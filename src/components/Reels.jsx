import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiX, HiStar, HiVolumeUp, HiVolumeOff, HiPlay } from 'react-icons/hi';
import { DUMMY_MOVIES } from '../services/movieData';

// -----------------------
// Text-to-Speech Helper
// -----------------------
const speakMovie = (movie) => {
    if (!movie) return;

    // Stop any existing speech
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(
        `Now playing: ${movie.title}. Released in ${movie.year}. ${movie.description}`
    );

    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Use first available English voice for clarity
    const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
    };

    setVoice();

    // Fallback if voices load asynchronously
    if (window.speechSynthesis.onvoiceschanged === null) {
        window.speechSynthesis.onvoiceschanged = setVoice;
    }

    window.speechSynthesis.speak(utterance);
};

// -----------------------
// ReelItem Component
// -----------------------
const ReelItem = ({ movie, isActive, isMuted, setIsMuted }) => {

    useEffect(() => {
        // Cancel speech first
        window.speechSynthesis.cancel();

        if (isActive && !isMuted) {
            speakMovie(movie);
        }

        return () => window.speechSynthesis.cancel();
    }, [isActive, isMuted, movie]);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => {
            const newState = !prev;
            window.speechSynthesis.cancel();
            if (!newState && isActive) speakMovie(movie);
            return newState;
        });
    }, [isActive, movie]);

    return (
        <div
            className="snap-start w-full max-w-[420px] h-screen relative flex items-end justify-center p-4 bg-black overflow-hidden mx-auto"
            style={{
                backgroundImage: `url(${movie.posterUrl || '/fallback.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 w-full flex items-end justify-between">

                {/* Movie Info */}
                <div className="text-white max-w-[70%]">
                    <h2 className="text-3xl font-bold line-clamp-2">{movie.title} ({movie.year})</h2>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-3">{movie.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <HiStar className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">{movie.genre.split(',')[0].trim()}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center space-y-5 text-white">
                    {/* Play Button */}
                    <button className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition">
                        <HiPlay className="w-6 h-6" />
                    </button>

                    {/* Mute/Unmute */}
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
                        <span className="text-blue-400 text-xs mt-1 animate-pulse">
                            {window.speechSynthesis.speaking ? "Speaking..." : "Ready"}
                        </span>
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
