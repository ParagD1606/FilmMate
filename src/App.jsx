import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import Reels from './components/Reels'; 
import Analytics from './components/Analytics'; // NEW IMPORT
import "./App.css";

// 1. App is now a wrapper for BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// 2. AppContent holds the logic and state, giving it access to useLocation
function AppContent() {
    // Determine which routes require the main layout (Navbar + padding)
    const location = useLocation();
    
    // EXCLUDE pages that should NOT have the Navbar/padding
    const isFullScreenPage = ['/', '/login', '/registration', '/reels'].includes(location.pathname);
    const showNavbar = !isFullScreenPage;

    // --- State and Logic ---
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );
    const [bookmarks, setBookmarks] = useState(
        JSON.parse(localStorage.getItem("filmmate_bookmarks")) || []
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [genre, setGenre] = useState("");
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    useEffect(() => {
        localStorage.setItem("filmmate_bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const handleBookmark = (movie) => {
        setBookmarks((prevBookmarks) => {
        const isBookmarked = prevBookmarks.some((b) => b.id === movie.id);
        if (isBookmarked) {
            return prevBookmarks.filter((b) => b.id !== movie.id);
        } else {
            return [movie, ...prevBookmarks];
        }
        });
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
        console.log("Movie data refreshed.");
        setIsRefreshing(false);
        }, 1500);
    };
    // --- End State and Logic ---

    return (
        // Added w-full to ensure full screen width
        <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
            
            {/* Conditional Navbar Rendering */}
            {showNavbar && (
                <Navbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    onRefresh={handleRefresh}
                    isRefreshing={isRefreshing}
                />
            )}

            {/* Content Wrapper - applies top padding only when Navbar is visible */}
            <div className={`min-h-screen ${showNavbar ? "pt-[72px]" : ""}`}> 
                 <Routes>
                    {/* Full Screen/No Navbar Routes */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/reels" element={<Reels />} /> 

                    {/* Main App Routes (with Navbar) */}
                    <Route 
                        path="/home" 
                        element={
                            <Home
                                bookmarks={bookmarks}
                                handleBookmark={handleBookmark}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                genre={genre}
                                setGenre={setGenre}
                            />
                        } 
                    />
                    <Route 
                        path="/bookmarks" 
                        element={
                            <Bookmarks
                                bookmarks={bookmarks}
                                handleBookmark={handleBookmark}
                            />
                        } 
                    />
                    <Route 
                        path="/profile" 
                        element={
                            <Profile
                                bookmarks={bookmarks}
                            />
                        } 
                    />
                    
                    {/* Analytics Page */}
                    <Route path="/analytics" element={<Analytics />} /> 
                    
                    {/* Default redirect for unknown paths */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                 </Routes>
            </div>
        </div>
    )
}

export default App;