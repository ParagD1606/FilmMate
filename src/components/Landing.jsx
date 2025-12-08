import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import Aurora from "../Usages/Aurora";
import LandingFooter from "./LandingFooter";
import { 
  HiBookmark, 
  HiSearch, 
  HiEye, 
  HiSun, 
  HiFilm, 
  HiChartPie,
  HiArrowDown,
  HiHome,
  HiChartBar,
  HiMoon,
  HiArrowRight,
  HiViewList,
  HiVolumeUp  
} from "react-icons/hi"; 

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-2xl transition duration-500 hover:bg-white/20 hover:scale-[1.02] cursor-default">
      <div className="text-blue-400 mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const Landing = () => {
  const featuresRef = useRef(null);
  const navigate = useNavigate(); 
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black"> 
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#29DDEA","#4D64F0",  "#E248DD"]} 
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
          
          <h1 
            className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tight 
                       opacity-0 animate-fade-in-up delay-300" 
            style={{ 
                animation: 'fade-in-up 1s ease-out forwards',
                animationDelay: '300ms',
                transform: 'translateY(20px)',
                opacity: 0,
            }}
          >
            Film<span className="text-blue-400">Mate</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-2xl 
                       opacity-0 animate-fade-in-up delay-700"
            style={{ 
                animation: 'fade-in-up 1s ease-out forwards',
                animationDelay: '700ms',
                transform: 'translateY(20px)',
                opacity: 0,
            }}
          >
            Explore movies, search your favorites, and build your personal watchlist instantly.
          </p>
          
          <div className="flex space-x-4">

              <button
                onClick={() => navigate("/login")} 
                className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full 
                           hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30
                           opacity-0 animate-fade-in delay-1000"
                style={{ 
                    animation: 'fade-in 1s ease-out forwards',
                    animationDelay: '1000ms',
                    opacity: 0,
                }}
              >
                Get Started
              </button>
              
              <button
                onClick={scrollToFeatures}
                className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full 
                           hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 shadow-lg
                           opacity-0 animate-fade-in delay-1200"
                style={{ 
                    animation: 'fade-in 1s ease-out forwards',
                    animationDelay: '1200ms',
                    opacity: 0,
                }}
              >
                Features <HiArrowDown className="inline w-5 h-5 ml-2" />
              </button>
          </div>
        </div>
      </div>
      
      {/* 2. Features Section */}
      <div 
        ref={featuresRef} 
        id="features" 
        className="w-full bg-gray-900 py-20 px-6 sm:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-white text-center mb-16 border-b-4 border-blue-500/50 pb-4 inline-block mx-auto">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  <FeatureCard
      icon={<HiHome className="w-8 h-8" />}
      title="Movie Categories"
      description="Explore movies grouped by categories like Action, Sci-Fi, Comedy, Drama and more."
  />

  <FeatureCard
      icon={<HiSearch className="w-8 h-8" />}
      title="Smart Local Search"
      description="Find movies instantly from the local database using keyword-based search."
  />

  <FeatureCard
      icon={<HiBookmark className="w-8 h-8" />}
      title="Personal Watchlist"
      description="Save your must-watch movies and manage your personal watchlist easily."
  />

  <FeatureCard
      icon={<HiVolumeUp className="w-8 h-8" />}
      title="Movie Reels"
      description="Watch short mini-reels of trailers or clips from trending movies in a modern swipe UI."
  />

  <FeatureCard
      icon={<HiChartBar className="w-8 h-8" />}
      title="Movie Analytics"
      description="See genre distribution and identify the most popular movie themes using charts."
  />

  <FeatureCard
      icon={<HiMoon className="w-8 h-8" />}
      title="Dark/Light Theme"
      description="Switch between light and dark modes for a comfortable browsing experience."
  />

  <FeatureCard
      icon={<HiArrowRight className="w-8 h-8" />}
      title="Detailed Movie Info"
      description="Open full movie details cards showing year, genre, cast, and poster."
  />

  <FeatureCard
      icon={<HiViewList className="w-8 h-8" />}
      title="Advanced Pagination & Caching"
      description="Smooth navigation through large movie lists with optimized pagination and intelligent caching."
  />

  <FeatureCard
      icon={<HiChartPie className="w-8 h-8" />}
      title="Movie Analytics"
      description="Advances and simplifies movie analytics about movie and Production"
  />

</div>

        </div>
      </div>

      <LandingFooter />
    </div>
  );
};

export default Landing;
