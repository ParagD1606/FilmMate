import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  HiOutlineBookmark,
  HiBookmark,
  HiVolumeUp,
  HiCalendar,
  HiTranslate,
} from "react-icons/hi"; 
import { getTranslation } from "@miracleufo/react-g-translator"; // Import translator

const LANGUAGE_OPTIONS = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "kn", name: "Kannada" },
  { code: "fr", name: "French" },
];

const speakText = (text, language) => {
  if (!text) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  utterance.voice =
    voices.find((v) => v.lang.startsWith(language)) || voices.find((v) => v.lang.startsWith("en"));
  utterance.lang = language;

  window.speechSynthesis.speak(utterance);
};

const MovieCard = ({ movie, onBookmark, isBookmarked }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translatedMovie, setTranslatedMovie] = useState(movie);
  const [loading, setLoading] = useState(false);
  const translationCache = useRef({});

  const currentMovie = translatedMovie || movie;

  useEffect(() => {
    const key = `${movie.id}_${selectedLanguage}`;
    if (translationCache.current[key]) {
      setTranslatedMovie(translationCache.current[key]);
      return;
    }

    let isCancelled = false;

    const fetchTranslation = async () => {
      if (selectedLanguage === "en") {
        setTranslatedMovie(movie);
        return;
      }

      setLoading(true);
      try {
        const [titleTranslated, descriptionTranslated] = await getTranslation(
          [movie.title, movie.description || ""],
          "en",
          selectedLanguage
        );

        if (!isCancelled) {
          const result = { title: titleTranslated, description: descriptionTranslated };
          setTranslatedMovie(result);
          translationCache.current[key] = result;
        }
      } catch (err) {
        console.error("Translation failed:", err);
        if (!isCancelled) setTranslatedMovie(movie);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchTranslation();

    return () => {
      isCancelled = true;
      window.speechSynthesis.cancel();
    };
  }, [movie, selectedLanguage]);

  const handleTextToSpeech = useCallback(() => {
    const textToSpeak = `${currentMovie.title}, released in ${movie.year}. ${currentMovie.description || "No description available."}`;
    speakText(textToSpeak, selectedLanguage);
  }, [currentMovie, movie.year, selectedLanguage]);

  const handleViewDetails = () => {
    alert(
      `Viewing Details for ${currentMovie.title}.\nGenre: ${movie.genre}\nYear: ${movie.year}`
    );
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.jpg";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg shadow-gray-300/50 dark:shadow-gray-900/50 
                    border border-gray-200 dark:border-gray-700 flex flex-col space-y-3 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-800/20 relative">

      {loading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl z-10">
          <span className="text-white font-semibold text-lg animate-pulse">Translating...</span>
        </div>
      )}

      <img
        src={movie.posterUrl || "/fallback.jpg"}
        onError={handleImageError}
        alt={currentMovie.title}
        loading="lazy"
        className="w-full h-64 object-cover rounded-lg select-none"
      />

      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
        {currentMovie.title} ({movie.year})
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <HiCalendar className="w-4 h-4" />
        <span className="font-semibold">{movie.year}</span>
        <span className="mx-2">|</span>
        <span className="font-medium text-blue-600 dark:text-blue-400">{movie.genre}</span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow">
        {currentMovie.description || "No plot summary available."}
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700/50">
        
        <button
          onClick={handleViewDetails}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition"
        >
          View Details →
        </button>

        <div className="flex flex-col items-end gap-2 self-end sm:self-auto">
          <div className="flex items-center gap-2">
            <HiTranslate className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => {
                window.speechSynthesis.cancel();
                setSelectedLanguage(e.target.value);
              }}
              className="text-xs py-1 px-2 rounded-md bg-gray-100 dark:bg-gray-700 
                         text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
              disabled={loading}
            >
              {LANGUAGE_OPTIONS.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTextToSpeech}
              title={`Listen in ${LANGUAGE_OPTIONS.find(l => l.code === selectedLanguage)?.name || "English"}`}
              className={`p-2 rounded-full transition transform hover:scale-110 ${
                loading
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              }`}
              disabled={loading}
            >
              <HiVolumeUp className="w-5 h-5" />
            </button>

            <button
              onClick={() => onBookmark(movie)}
              title={isBookmarked ? "Remove from Watchlist" : "Add to Watchlist"}
              className="p-1"
            >
              {isBookmarked ? (
                <HiBookmark className="w-7 h-7 text-yellow-500 hover:text-yellow-400 transition transform hover:scale-110" />
              ) : (
                <HiOutlineBookmark className="w-7 h-7 text-gray-500 dark:text-gray-300 hover:text-yellow-500 transition transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
