import React, { useCallback } from "react";
import { HiOutlineBookmark, HiBookmark, HiVolumeUp, HiCalendar } from "react-icons/hi";

// Renamed NewsCard to MovieCard
const MovieCard = ({ movie, onBookmark, isBookmarked }) => {

  const handleTextToSpeech = useCallback(() => {
    const textToSpeak = `${movie.title}, released in ${movie.year}. Plot summary: ${
      movie.description || "No description available."
    }`;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1;
    utterance.pitch = 1;
    // Default to English. You can expand this with more complex language detection if needed.
    utterance.lang = "en-US"; 

    window.speechSynthesis.speak(utterance);
  }, [movie.title, movie.year, movie.description]);


  const handleViewDetails = () => {
    // Retain the existing view details functionality, now separated from the volume icon
    console.log(`Viewing details for: ${movie.title} (${movie.year})`);
    alert(`Viewing Details for ${movie.title}.\nGenre: ${movie.genre}\nYear: ${movie.year}`);
  };

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "/fallback.jpg"; // Your fallback image in /public folder
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 p-5 rounded-xl 
                 shadow-lg shadow-gray-300/50 dark:shadow-gray-900/50 
                 border border-gray-200 dark:border-gray-700
                 flex flex-col space-y-3 transition-all duration-300 
                 hover:shadow-xl hover:shadow-blue-500/20 
                 dark:hover:shadow-blue-800/20"
    >
      {/* Movie Poster Image */}
      <img
        src={movie.posterUrl || "/fallback.jpg"} 
        onError={handleImageError}
        alt={movie.title}
        loading="lazy"
        className="w-full h-64 object-cover rounded-lg select-none"
      />

      {/* Movie Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
        {movie.title} ({movie.year})
      </h3>

      {/* Genre and Year info */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <HiCalendar className="w-4 h-4" />
        <span className="font-semibold">{movie.year}</span>
        <span className="mx-2">|</span>
        <span className="font-medium text-blue-600 dark:text-blue-400">{movie.genre}</span>
      </div>

      {/* Description / Plot Summary */}
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow">
        {movie.description || "No plot summary available."}
      </p>

      {/* Footer: Details link + buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700/50">
        <button
          onClick={handleViewDetails}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition"
        >
          View Details →
        </button>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* LISTEN BUTTON: Now handles Text-to-Speech */}
          <button
            onClick={handleTextToSpeech}
            title="Listen to Movie Details"
            className="p-2 rounded-full text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110"
          >
            <HiVolumeUp className="w-5 h-5" />
          </button>

          {/* Bookmark (Watchlist) Button */}
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
  );
};

export default MovieCard;