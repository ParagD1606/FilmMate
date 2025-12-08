// src/services/moviesApi.js

export const DUMMY_MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci‑Fi",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "A skilled thief leads a team into people’s dreams to plant an idea — if they succeed, the impact will be global."
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    description: "Batman faces the ultimate test when a rising criminal mastermind spreads chaos across Gotham."
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNMqR7pKChXU.jpg",
    description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description: "The lives of two hitmen, a boxer, a gangster’s wife and a pair of diner bandits intertwine in tales of violence and redemption."
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description: "Two imprisoned men bond over several years, forming a friendship based on hope and resilience."
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description: "The life journey of Forrest Gump, a man with a low IQ but good intentions, through decades of American history."
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Sci‑Fi",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description: "A hacker discovers that reality as he knows it is a simulation and joins a rebellion against powerful controllers."
  },
  {
    id: 8,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "A poor family schemes to become employed by a wealthy household — their plan spirals into a dangerous game of greed and class divide."
  },
  {
    id: 9,
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    poster: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    description: "A young girl becomes trapped in a strange and magical world of spirits — she must find her way back to the human world."
  },
  {
    id: 10,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    description: "The aging patriarch of a mafia dynasty transfers control of his empire to his reluctant son under dangerous circumstances."
  },
  // … you can add more movies here
];

// Example fetch function (no external call)
export const fetchMovies = async (query = "", genre = "") => {
  let results = DUMMY_MOVIES;

  if (query) {
    const lowerQ = query.toLowerCase();
    results = results.filter(m => m.title.toLowerCase().includes(lowerQ));
  }
  if (genre && genre !== "All") {
    results = results.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  }

  // Simulate network delay
  return new Promise(res => setTimeout(() => res(results), 200));
};
