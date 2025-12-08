// paragd1606/filmmate/FilmMate-d923bdcf21c92fb574060a6fef2f68b2eb645ee0/src/components/MoviesCard.jsx
import React, { useCallback, useState } from "react";
import {
  HiOutlineBookmark,
  HiBookmark,
  HiVolumeUp,
  HiVolumeOff, // Added for the stop button look
  HiCalendar,
  HiTranslate,
} from "react-icons/hi"; 

// Updated LANGUAGE_OPTIONS to reflect available translations
const LANGUAGE_OPTIONS = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "fr", name: "French" },
];

// Modified to accept callbacks for setting the playing status
const speakText = (text, language, onStart, onEnd) => {
  if (!text) return;

  // Cancel any previous speech immediately
  window.speechSynthesis.cancel(); 
  
  // Exit immediately if the API is not available
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onEnd; // Also trigger onEnd on error

  // Voice selection logic remains the same
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find((v) => v.lang.startsWith(language)) || voices.find((v) => v.lang.startsWith("en"));
  if (englishVoice) {
      utterance.voice = englishVoice;
      utterance.lang = language;
  } else {
      // Use system default if specific voice isn't found, 
      // but ensure lang attribute is set for proper pronunciation fallback
      utterance.lang = language; 
  }

  // Use a slight delay as a workaround for browser voice initialization issues
  setTimeout(() => window.speechSynthesis.speak(utterance), 100);
};

// New function to handle stopping globally
const stopText = () => {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
};


const MovieCard = ({ movie, onBookmark, isBookmarked }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isSpeaking, setIsSpeaking] = useState(false); // NEW STATE for TTS status
  
  // Callbacks to manage the speaking state
  const handleSpeechStart = useCallback(() => setIsSpeaking(true), []);
  const handleSpeechEnd = useCallback(() => setIsSpeaking(false), []);
  
  // Logic to determine the current translation based on selection.
  const currentTranslation = 
      movie.translations?.[selectedLanguage] || 
      movie.translations?.en ||                 
      { title: "Unknown Title", description: "No description available." }; 

  const loading = false; 

  const handleTextToSpeech = useCallback(() => {
    // If currently speaking, the play button acts as stop.
    if (isSpeaking) {
        stopText();
        handleSpeechEnd();
        return;
    }

    const textToSpeak = `${currentTranslation.title}, released in ${movie.year}. ${currentTranslation.description || "No description available."}`;
    
    // Pass state handlers to the utility function
    speakText(textToSpeak, selectedLanguage, handleSpeechStart, handleSpeechEnd);
    
  }, [currentTranslation, movie.year, selectedLanguage, isSpeaking, handleSpeechStart, handleSpeechEnd]);
  
  // Handler for manual language change
  const handleLanguageChange = (e) => {
    stopText(); // Stop current speech if language changes
    handleSpeechEnd();
    setSelectedLanguage(e.target.value);
  }

  const handleViewDetails = () => {
    alert(
      `Viewing Details for ${currentTranslation.title}.\nGenre: ${movie.genre}\nYear: ${movie.year}`
    );
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.jpg";
  };

  return (
    // 1. Enhanced Card Styling: Deeper shadow, rounded corners, lift on hover, added 'group' class for coordinated hovers
    <div className="group bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl dark:shadow-gray-900/50 
                    flex flex-col space-y-4 transition-all duration-500 hover:translate-y-[-4px] 
                    hover:shadow-blue-500/40 dark:hover:shadow-blue-700/30 relative">

      {/* Removed the loading overlay block */}

      {/* 2. Enhanced Image Styling: Slightly taller and subtle zoom/brightness on card hover */}
      <img
        src={movie.posterUrl || "/fallback.jpg"}
        onError={handleImageError}
        alt={currentTranslation.title}
        loading="lazy"
        className="w-full h-72 object-cover rounded-xl select-none 
                   transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
      />

      {/* 3. Title Styling: Stronger font weight */}
      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white line-clamp-2">
        {currentTranslation.title} ({movie.year})
      </h3>

      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        
        <span className="flex items-center gap-1 font-semibold">
          <HiCalendar className="w-4 h-4 text-blue-500" />
          {movie.year}
        </span>
        
        {/* 4. Genre as a Styled Pill/Tag */}
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full uppercase tracking-wider">
            {movie.genre.split(',')[0].trim()}
        </span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full uppercase tracking-wider">
            {movie.rating}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow">
        {currentTranslation.description || "No plot summary available."}
      </p>

      {/* Action Bar: Improved layout and CTA focus */}
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/50">
        
        {/* 5. Primary CTA Button */}
        <button
          onClick={handleViewDetails}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold 
                     hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30"
        >
          Watch Now →
        </button>

        {/* Action Group: Changed gap-4 to gap-2 to prevent overflow in narrow cards */}
        <div className="flex items-center gap-2">
            
          {/* Language Selector: Tightened spacing and reduced icon size */}
          <div className="flex items-center gap-1">
            <HiTranslate className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              // Reduced padding (py-0.5, px-1) for horizontal space saving
              className="text-xs py-0.5 px-1 rounded-md bg-gray-100 dark:bg-gray-700 
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

          {/* Text-to-Speech Button (Toggle Play/Stop) */}
          <button
            onClick={handleTextToSpeech}
            title={isSpeaking ? "Stop Narration" : `Listen in ${LANGUAGE_OPTIONS.find(l => l.code === selectedLanguage)?.name || "English"}`}
            className={`p-2 rounded-full transition transform hover:scale-110 
              ${isSpeaking 
                  ? 'text-red-500 dark:text-red-400 hover:text-red-600' // Stop icon uses red
                  : 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300' // Play icon uses blue
              }`}
            disabled={loading}
          >
            {isSpeaking 
                ? <HiVolumeOff className="w-6 h-6" /> // Stop icon
                : <HiVolumeUp className="w-6 h-6" /> // Play icon
            }
          </button>

          {/* Bookmark Button */}
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