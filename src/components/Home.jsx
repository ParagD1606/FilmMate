import React, { useState, useMemo } from "react";
import MovieCard from "./MoviesCard"; 
import { HiSearch, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { DUMMY_MOVIES, CATEGORIES } from "../services/movieData"; // <-- IMPORTED DATA

const PAGE_SIZE = 6;

// Pagination logic remains the same
const getPageNumbersToShow = (currentPage, totalPages) => {
  if (totalPages <= 4) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const windowSize = 2;
  let startPage = Math.max(2, currentPage);
  let endPage = Math.min(totalPages - 1, currentPage + windowSize - 1);
  if (currentPage >= totalPages - 1) {
    startPage = Math.max(2, totalPages - 2);
    endPage = totalPages - 1;
  }
  if (currentPage <= 2) {
    startPage = 2;
    endPage = Math.min(totalPages - 1, 3);
  }
  const pagesToShow = [];
  pagesToShow.push(1);
  if (startPage > 2) pagesToShow.push("...");
  for (let i = startPage; i <= endPage; i++) pagesToShow.push(i);
  if (endPage < totalPages - 1) pagesToShow.push("...");
  if (totalPages > 1) pagesToShow.push(totalPages);
  return [...new Set(pagesToShow)];
};

const Home = ({
  bookmarks,
  handleBookmark,
  genre, 
  setGenre, 
  searchQuery,
  setSearchQuery,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter movies based on search query and selected genre
  const filteredMovies = useMemo(() => {
    let result = DUMMY_MOVIES; // <-- Uses imported DUMMY_MOVIES

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (movie) => {
          // FIX: Safely access English translations for searching
          const enTitle = movie.translations?.en?.title?.toLowerCase() || "";
          const enDescription = movie.translations?.en?.description?.toLowerCase() || "";
          const movieGenre = movie.genre.toLowerCase();

          return (
            enTitle.includes(query) ||
            enDescription.includes(query) ||
            movieGenre.includes(query)
          );
        }
      );
    } else if (genre) {
      const selectedGenre = genre.toLowerCase();
      // Keep genre filter as it works on the top-level 'genre' string property
      result = result.filter(movie =>
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }
    
    // Sort by Year (most recent first)
    return result.sort((a, b) => b.year - a.year); 

  }, [searchQuery, genre]); 

  // Search handler
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setGenre(""); 
    setCurrentPage(1);
  };

  // Genre handler
  const handleCategoryChange = (cat) => {
    setGenre(cat); 
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Pagination setup
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const currentMovies = filteredMovies.slice(startIdx, startIdx + PAGE_SIZE); 
  const totalPages = Math.ceil(filteredMovies.length / PAGE_SIZE);
  const pagesToShow = getPageNumbersToShow(currentPage, totalPages);

  return (
    <div className="max-w-7xl mx-auto pt-0">
      {/* Header Section */}
      <div className="px-6 py-6 sm:py-8 border-b border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-none">

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <div className="relative w-full max-w-xl flex-grow">
            <input
              type="text"
              placeholder="Search movies by title, year, or genre..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-3 pl-12 pr-4 border-2 border-blue-500/80 dark:border-blue-600 rounded-full bg-white dark:bg-gray-800 text-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition shadow-lg"
            />
            <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 dark:text-blue-400" />
          </div>
        </div>

        {/* Categories (Genres) */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => ( // <-- Uses imported CATEGORIES
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md ${
                genre === cat && searchQuery === "" 
                  ? "bg-blue-600 text-white shadow-blue-500/50"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}

          {searchQuery && (
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white shadow-md">
              <span>Searching for: "{searchQuery}"</span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-white font-bold text-lg leading-none"
                title="Clear Search"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Movies Cards */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMovies.map((movie, idx) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onBookmark={handleBookmark}
            isBookmarked={!!bookmarks.find((m) => m.id === movie.id)} 
          />
        ))}

        {filteredMovies.length === 0 && (
          <div className="col-span-full text-center py-10 text-xl text-gray-700 dark:text-gray-300">
            No movies found matching your criteria.
          </div>
        )}
      </main>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 p-6">
          {currentPage > 1 && (
            <button
              className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-200 shadow-md"
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <span className="hidden sm:inline">← Prev</span>
              <HiArrowLeft className="w-5 h-5 sm:hidden" />
            </button>
          )}

          {pagesToShow.map((page, idx) => {
            if (page === "...") return (
              <span key={idx} className="px-1 sm:px-4 py-2 text-gray-500 dark:text-gray-400">...</span>
            );
            const isCurrent = currentPage === page;
            return (
              <button
                key={idx}
                onClick={() => setCurrentPage(page)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                  isCurrent
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700"
                }`}
              >
                {page}
              </button>
            );
          })}

          {currentPage < totalPages && (
            <button
              className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-200 shadow-md"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <span className="hidden sm:inline">Next →</span>
              <HiArrowRight className="w-5 h-5 sm:hidden" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;