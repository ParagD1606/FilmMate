import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiX, HiStar, HiVolumeUp, HiVolumeOff, HiPlay } from 'react-icons/hi';
import { DUMMY_MOVIES } from '../services/movieData';

// -----------------------
// Text-to-Speech Helper
// -----------------------
const speakText = (movie) => {
    // Cancel any existing speech
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    const text = `
        Now playing: ${movie.title}.
        Released in ${movie.year}.
        Genre: ${movie.genre}.
        Description: ${movie.description}.
    `;

    const utterance = new SpeechSynthesisUtterance(text);

    // Optional: Pick first English voice
    const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    if (voices.length > 0) {
        utterance.voice = voices[0];
    }

    utterance.rate = 1;  // natural speed
    utterance.pitch = 1; // natural pitch
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
};

// -----------------------
// ReelItem Component
// -----------------------
const ReelItem = ({ movie, isActive, isMuted, setIsMuted }) => {

    // Handle TTS activation/deactivation
    useEffect(() => {
    if (isActive && !isMuted) {
        speakText(movie);
    } else {
        // Stop speech if not active or muted
        window.speechSynthesis.cancel();
    }

    return () => window.speechSynthesis.cancel();
}, [isActive, isMuted, movie]);


    // Toggle mute/pause/resume
    const toggleMute = useCallback(() => {
    setIsMuted(prev => {
        const newMuteState = !prev;

        if (newMuteState) {
            // Muted: stop speech immediately
            window.speechSynthesis.cancel();
        } else {
            // Unmuted: speak current active movie again
            if (isActive) {
                speakText(movie);
            }
        }

        return newMuteState;
    });
}, [isActive, movie]);


    const backgroundUrl = movie.posterUrl || '/fallback.jpg';

    return (
        <div
            className="snap-start w-full max-w-[420px] h-screen relative flex items-end justify-center p-4 bg-black overflow-hidden mx-auto"
            style={{
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 w-full flex items-end justify-between">

                {/* Left: Movie Info */}
                <div className="text-white max-w-[70%]">
                    <h2 className="text-3xl font-bold line-clamp-2">
                        {movie.title} ({movie.year})
                    </h2>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-3">{movie.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <HiStar className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">{movie.genre.split(',')[0].trim()}</span>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col items-center space-y-5 text-white">
                    {/* Play Button (Placeholder) */}
                    <button className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition">
                        <HiPlay className="w-6 h-6" />
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                        onClick={toggleMute}
                        className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
                        title={isMuted ? "Unmute Voice" : "Mute Voice"}
                    >
                        {isMuted
                            ? <HiVolumeOff className="w-6 h-6 text-gray-400" />
                            : <HiVolumeUp className="w-6 h-6 text-white" />
                        }
                    </button>

                    {/* Speaking Indicator */}
                    {isActive && !isMuted && (
                        <span className="text-blue-400 text-xs mt-1 animate-pulse">Speaking...</span>
                    )}
                </div>

            </div>
        </div>
    );
};

// -----------------------
// Reels Main Component
// -----------------------
const Reels = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    // Intersection Observer to detect active reel
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveIndex(Number(entry.target.dataset.index));
                    }
                });
            },
            { threshold: 0.6 }
        );

        const items = container.querySelectorAll('.snap-start');
        items.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex justify-center bg-black min-h-screen">
            <div
                ref={containerRef}
                className="w-full max-w-[420px] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative"
            >
                {/* Exit Button */}
                <div className="fixed top-4 left-4 z-50">
                    <a href="/home" className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                        <HiX className="w-6 h-6" />
                    </a>
                </div>

                {/* Render Reel Items */}
                {DUMMY_MOVIES.map((movie, index) => (
                    <div key={movie.id} data-index={index} className="w-full h-screen">
                        <ReelItem
                            movie={movie}
                            isActive={index === activeIndex}
                            isMuted={isMuted}
                            setIsMuted={setIsMuted}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reels;
