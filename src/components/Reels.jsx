// paragd1606/filmmate/.../src/components/Reels.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiX, HiStar, HiVolumeUp, HiVolumeOff, HiPlay } from 'react-icons/hi';
import { DUMMY_MOVIES } from '../services/movieData';

const MOVIES = DUMMY_MOVIES;

// Stop speech helper
const stopSpeech = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};

/* ---------------- Reel Item ---------------- */
const ReelItem = React.forwardRef(
  ({ movie, isActive, isMuted, setIsMuted, speakMovie }, ref) => {
    const en = movie.translations?.en;
    const title = en?.title || "Unknown Title";
    const description = en?.description || "No description";
    const isSpeaking = window.speechSynthesis?.speaking;

    useEffect(() => {
      if (isActive && !isMuted) {
        speakMovie(movie);
      } else {
        stopSpeech();
      }

      return () => stopSpeech();
    }, [isActive, isMuted, movie, speakMovie]);

    const toggleMute = () => {
      setIsMuted(prev => {
        const next = !prev;
        stopSpeech();
        if (!next && isActive) speakMovie(movie);
        return next;
      });
    };

    return (
      <div
        ref={ref}
        className="snap-start w-full max-w-[420px] h-screen relative flex items-end justify-center p-4 bg-black overflow-hidden mx-auto"
        style={{
          backgroundImage: `url(${movie.posterUrl || "/fallback.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="relative z-10 w-full flex items-end justify-between">
          <div className="text-white max-w-[70%]">
            <h2 className="text-3xl font-bold line-clamp-2">
              {title} ({movie.year})
            </h2>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">
              {description}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <HiStar className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">
                {movie.genre.split(",")[0]}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5 text-white">
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition">
              <HiPlay className="w-6 h-6" />
            </button>

            <button
              onClick={toggleMute}
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
              title={isMuted ? "Unmute Voice" : "Mute Voice"}
            >
              {isMuted ? (
                <HiVolumeOff className="w-6 h-6 text-gray-400" />
              ) : (
                <HiVolumeUp className="w-6 h-6 text-white" />
              )}
            </button>

            {isActive && !isMuted && (
              <span className="text-blue-400 text-xs mt-1 animate-pulse">
                {isSpeaking ? "Speaking..." : "Ready"}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

/* ---------------- MAIN REELS ---------------- */
const Reels = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const autoScrollTimeout = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const stopSpeechAndClearTimer = useCallback(() => {
    window.speechSynthesis.cancel();
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
      autoScrollTimeout.current = null;
    }
  }, []);

  const speakMovie = useCallback(
    movie => {
      if (!movie || !window.speechSynthesis) return;

      stopSpeechAndClearTimer();

      const en = movie.translations?.en;
      const text = `Now playing: ${en?.title || movie.title}. Released in ${
        movie.year
      }. ${en?.description || ""}`;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";

      utterance.onend = () => {
        const nextIndex = (activeIndexRef.current + 1) % MOVIES.length;
        const nextEl = itemRefs.current[nextIndex];

        if (nextEl && containerRef.current) {
          containerRef.current.scrollTo({
            top: nextEl.offsetTop,
            behavior: "smooth",
          });
        }

        autoScrollTimeout.current = setTimeout(
          () => setActiveIndex(nextIndex),
          800
        );
      };

      const speakNow = () => {
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find(v => v.lang.startsWith("en")) || null;
        window.speechSynthesis.speak(utterance);
      };

      setTimeout(speakNow, 150);
    },
    [stopSpeechAndClearTimer]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            stopSpeechAndClearTimer();
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    const blocks = container.querySelectorAll(".snap-start");
    blocks.forEach(el => obs.observe(el));

    return () => {
      obs.disconnect();
      stopSpeechAndClearTimer();
    };
  }, [stopSpeechAndClearTimer]);

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div
        ref={containerRef}
        className="w-full max-w-[420px] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative"
      >
        <div className="fixed top-4 left-4 z-50">
          <a
            href="/home"
            className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <HiX className="w-6 h-6" />
          </a>
        </div>

        {MOVIES.map((movie, index) => (
          <div
            key={movie.id}
            data-index={index}
            className="w-full h-screen"
            ref={el => (itemRefs.current[index] = el)}
          >
            <ReelItem
              movie={movie}
              isActive={index === activeIndex}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              speakMovie={() => speakMovie(movie)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
