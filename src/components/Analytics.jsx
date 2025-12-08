import React, { useMemo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { DUMMY_MOVIES } from '../services/movieData';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Stop Words (Keeping the existing set)
const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "is", "of", "to", "in", "it", "on", "with", "for", "as", "by", "at", "from",
  "this", "that", "he", "she", "they", "we", "i", "my", "me", "him", "her", "us", "its", "which", "who", "whom", "where", 
  "when", "why", "how", "what", "must", "be", "have", "has", "had", "do", "does", "did", "can", "could", "should", "would", 
  "was", "were", "are", "been", "being", "about", "into", "through", "during", "before", "after", "above", "below", "up", 
  "down", "out", "off", "over", "under", "again", "further", "then", "once", "here", "there", "no", "nor", "only", "own", 
  "same", "so", "than", "too", "very", "s", "t", "just", "don", "now", "ve", "ll", "m", "re", "y", "d", "movie", "film", 
  "end", "new", "two", "one", "find", "his", "their", "must", "life", "world", "home", "upon", "against", "king", "must",
  "city", "go", "man", "woman", "comes", "finds"
]);

// Word Cloud Processor
const processTextForWordCloud = (movies) => {
  const wordCounts = {};
  const regex = /[^\w\s]/g;
  
  movies.forEach(movie => {
    // FIX: Access title and description from the nested 'translations.en' object.
    const english = movie.translations?.en;
    if (!english) return; // Skip if English translation is missing
    
    const text = `${english.title} ${english.description}`.toLowerCase().replace(regex, ' ');
    const words = text.split(/\s+/).filter(word => word.length > 2 && !STOP_WORDS.has(word));
    
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  });

  return Object.fromEntries(
    Object.entries(wordCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 50)
  );
};

// Main Data Processor
const processData = (movies) => {
  const genreCounts = {};
  const yearCounts = {};

  movies.forEach(movie => {
    movie.genre.split(',').map(g => g.trim()).forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });

    const year = movie.year.toString();
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  });

  // wordCounts will now be correctly calculated
  const wordCounts = processTextForWordCloud(movies);

  return { genreCounts, yearCounts, wordCounts };
};

const Analytics = () => {
  const { genreCounts, yearCounts, wordCounts } = useMemo(() => processData(DUMMY_MOVIES), []);

  // --- CHART DATA CONFIGURATIONS ---

  // 1. Genre Distribution Bar Chart Data 
  const genreLabels = Object.keys(genreCounts);
  const genreData = Object.values(genreCounts);
  
  const genreChartData = {
    labels: genreLabels,
    datasets: [
      {
        label: 'Number of Movies',
        data: genreData,
        // Use a single primary color with varying opacity for a clean look
        backgroundColor: genreLabels.map(() => 'rgba(59, 130, 246, 0.7)'), // Blue-500 with opacity
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const genreOptions = {
    responsive: true,
    maintainAspectRatio: false, // Important for responsive height
    plugins: {
      legend: { display: false },
      title: { 
          display: true, 
          text: 'Genre Distribution', 
          color: '#F9FAFB', // White
          font: { size: 16 }
      },
      tooltip: {
          mode: 'index',
          intersect: false,
      }
    },
    scales: {
      y: { 
          beginAtZero: true, 
          ticks: { color: '#D1D5DB' }, // Gray-300
          grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false } 
      },
      x: { 
          ticks: { color: '#D1D5DB' }, 
          grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false } 
      },
    }
  };
  
  // 2. Movies by Year Doughnut Chart Data
  const yearLabels = Object.keys(yearCounts).sort();
  const yearCountsData = yearLabels.map(year => yearCounts[year]);

  // Use a professional, vibrant color palette for Doughnut
  const colorPalette = yearLabels.map((_, i) => {
    const hue = (i * 360 / yearLabels.length + 220) % 360; // Spread colors evenly starting from blue
    return `hsl(${hue}, 70%, 55%)`;
  });

  const yearDoughnutData = {
      labels: yearLabels,
      datasets: [
        {
          label: 'Movies Produced',
          data: yearCountsData,
          backgroundColor: colorPalette,
          borderColor: '#1F2937', // Dark background color for slices
          borderWidth: 2,
          hoverOffset: 8,
        },
      ],
  };
  
  const yearOptions = {
    responsive: true,
    maintainAspectRatio: false, // Important for responsive height
    plugins: {
        legend: { 
            position: 'right', 
            labels: { color: '#F9FAFB', font: { size: 12 } } 
        },
        title: { 
            display: true, 
            text: 'Movies by Release Year', 
            color: '#F9FAFB',
            font: { size: 16 }
        },
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
        }
    }
  };

  // --- WORD CLOUD RENDERING LOGIC ---
  const wordEntries = Object.entries(wordCounts);
  const maxCount = Math.max(...wordEntries.map(([, count]) => count), 1); 
  const minSize = 14;
  const maxSize = 38;

  const getFontSize = (count) => {
    if (maxCount === 0 || count === 0) return minSize;
    // Apply a logarithmic scale for better differentiation of common words
    const logCount = Math.log(count + 1);
    const logMax = Math.log(maxCount + 1);
    const scale = (maxSize - minSize) / logMax;
    return minSize + scale * logCount;
  };
  
  // Use a subtle color scheme for the words, focusing on contrast and readability
  const wordCloudColors = (index) => {
    const hue = (index * 30 + 190) % 360; // Cool colors (blue/purple/cyan)
    return `hsl(${hue}, 75%, 65%)`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24 min-h-screen">
      <h1 className="text-5xl font-extrabold text-blue-500 mb-8 pb-4">
        Movie Analytics Dashboard
      </h1>
      
      <div className="space-y-12">
        
        {/* 1. Word Cloud / Top Searchable Keywords */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-3xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
            Top Search Keywords (Word Cloud)
          </h2>

          <div className="relative flex flex-wrap gap-x-6 gap-y-4 justify-center items-center max-w-full min-h-[250px]">
            {wordEntries.map(([word, count], index) => {
              const size = getFontSize(count);
              // Slight random rotation for visual flair, kept subtle
              const rotation = (Math.random() * 6 - 3); 

              return (
                <span
                  key={word}
                  style={{
                    fontSize: `${size}px`,
                    transform: `rotate(${rotation}deg)`,
                    color: wordCloudColors(index),
                  }}
                  className="font-extrabold inline-block cursor-pointer leading-none 
                             transition-all duration-300 hover:scale-125 hover:brightness-125"
                >
                  {word}
                </span>
              );
            })}

            {wordEntries.length === 0 && (
              <p className="text-gray-500">No keywords found to generate the cloud.</p>
            )}
          </div>

          <p className="text-gray-500 text-sm mt-8 text-center">
            *Keyword size represents its log-frequency across movie titles and descriptions.
          </p>
        </div>
        
        {/* 2 & 3. Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Genre Distribution Bar Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                <div className="h-80"> {/* Set a fixed height for Chart.js container */}
                    <Bar options={genreOptions} data={genreChartData} />
                </div>
            </div>

            {/* Movies by Year Doughnut Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                <div className="h-80 flex items-center justify-center">
                    <Doughnut options={yearOptions} data={yearDoughnutData} />
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Analytics;