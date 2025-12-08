// paragd1606/news-pulse-dummy/News-Pulse-Dummy-eea1ae486c0d7a74650bf31e662b20b4c98bf974/src/services/newsApi.js

// Using a placeholder import to maintain project structure, but no external API call is made.
import axios from "axios"; 

// Supported countries (from Home.jsx)
export const SUPPORTED_COUNTRIES = [
  { code: "us", name: "Hollywood" },
  { code: "in", name: "Bollywood" },
  { code: "gb", name: "Tollywood" },
  { code: "ca", name: "Kollywood" },
  { code: "au", name: "Mollywood" },
  { code: "de", name: "Pollywood" },
  { code: "jp", name: "Ghallywood" },
];



const CATEGORIES = [
  "general",
  "politics",
  "business",
  "technology",
  "sports",
  "entertainment",
  "health",
  "science",
];

// 1. DEDICATED LIST OF NEWS SOURCES (12 Sources)
const NEWS_SOURCES = [
  { id: 'cnn', name: 'CNN' },
  { id: 'nyt', name: 'The New York Times' },
  { id: 'bbc', name: 'BBC News' },
  { id: 'reuters', name: 'Reuters' },
  { id: 'techcrunch', name: 'TechCrunch' },
  { id: 'espn', name: 'ESPN' },
  { id: 'bloomberg', name: 'Bloomberg' },
  { id: 'thehindu', name: 'The Hindu' },
  { id: 'der-spiegel', name: 'Der Spiegel' },
  { id: 'aljazeera', name: 'Al Jazeera English' },
  { id: 'foxnews', name: 'Fox News' },
  { id: 'guardian', name: 'The Guardian' },
];

const getRandomSource = () => NEWS_SOURCES[Math.floor(Math.random() * NEWS_SOURCES.length)];

// ===============================================
// DEDICATED ARTICLE CREATION FUNCTIONS (FOR SEARCH)
// ===============================================

const createDedicatedArticle = (person, category, countryCode, title, sourceName, author, description, content) => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 3));
    const formattedDate = date.toISOString();
    
    // Unique image URL based on the person
    const urlToImage = `https://picsum.photos/600/400?q=${person}-${countryCode}-${category}`;
    
    // Find the source object for the dedicated article
    const source = NEWS_SOURCES.find(s => s.name === sourceName) || getRandomSource();

    return {
        // TEMPORARY PROPERTIES for filtering/injection:
        category: category, 
        countryCode: countryCode,
        
        // STANDARD ARTICLE PROPERTIES
        source: source, 
        author: author,
        title: title,
        description: description,
        url: `https://dummynewspulse.com/article/dedicated-${person}-${countryCode}-${category}`,
        urlToImage: urlToImage,
        publishedAt: formattedDate,
        content: content
    };
};

const getDedicatedArticles = () => {
    let articles = [];

    // --- TOM HOLLAND (Hollywood) ---
    articles.push(createDedicatedArticle('TomHolland', 'entertainment', 'us', 
        'Tom Holland Stars in New Spider-Man Sequel', 'Marvel', 'John Doe', 
        `Tom Holland returns as Spider-Man in the latest Marvel blockbuster, promising thrilling action and an emotional story arc for fans.`,
        `The film's premiere in Los Angeles drew massive crowds. Critics praise Holland's performance and the movie's CGI effects.`
    ));

    // --- SHAH RUKH KHAN (Bollywood) ---
    articles.push(createDedicatedArticle('ShahRukhKhan', 'entertainment', 'in', 
        'Shah Rukh Khan Announces Upcoming Film Release', 'The Hindu', 'Priya Sharma', 
        `King Khan revealed details of his next Bollywood venture, set to be a romantic thriller. Fans are eagerly awaiting the trailer.`,
        `The movie is expected to hit theaters nationwide next summer. SRK's popularity guarantees a blockbuster opening.`
    ));

    // --- AKIRA KUROSAWA TRIBUTE (Japan/Ghallywood) ---
    articles.push(createDedicatedArticle('Kurosawa', 'entertainment', 'jp', 
        'Classic Kurosawa Film Restored for Modern Audiences', 'NHK', 'Yuki Tanaka', 
        `A remastered version of Akira Kurosawa's iconic movie brings renewed interest from film enthusiasts worldwide.`,
        `The restoration includes enhanced visuals and sound. Film festivals are planning screenings across Asia.`
    ));

    // --- GLOBAL MOVIE FESTIVAL NEWS ---
    articles.push(createDedicatedArticle('Oscars', 'entertainment', 'us', 
        'Oscars 2025: Nominations Announced for Best Picture', 'Variety', 'Alex Chen', 
        `The Academy Awards nominations have been revealed, highlighting both Hollywood hits and independent films. Fans are discussing predictions.`,
        `The ceremony will take place in Los Angeles next spring. Analysts are focusing on trending movies and surprise nominations.`
    ));

    return articles;
};


// ===============================================
// DUMMY DATA GENERATION CORE LOGIC
// ===============================================

const articleTemplate = (cat, country, index, titleSuffix) => {
  const date = new Date();
  date.setDate(date.getDate() - (index % 7)); 
  const formattedDate = date.toISOString();
  
  const imageUrlBase = 'https://picsum.photos/600/400';
  const uniqueSeed = index * 1000 + cat.length + country.length;
  const urlToImage = `${imageUrlBase}?r=${uniqueSeed}`; 
  
  const newsTitles = {
    general: ["Global Movie News: ", "Latest Film Update: ", "Cinema Headline: "],
    politics: ["Film Industry Policy: ", "Studio Deals: ", "Award Controversy: "],
    business: ["Box Office Report: ", "Studio Investment Update: ", "Merger in Entertainment: "],
    technology: ["Visual Effects Breakthrough: ", "New Streaming Tech: ", "AI in Movies: "],
    sports: ["Celebrity Sports Event: ", "Actor Fitness Routine: ", "Movie-Themed Competition: "],
    entertainment: ["Movie Release: ", "Celebrity Gossip: ", "Film Premiere: "],
    health: ["Actor Wellness: ", "Fitness Trends: ", "Mental Health in Film Industry: "],
    science: ["Sci-Fi Film Concept: ", "Space Movies: ", "Tech Innovations in Film: "],
};


  // --- Random Source Assignment for Analytics ---
  const randomSource = getRandomSource();

  const articleTitlePrefix = newsTitles[cat][index % 3] || newsTitles[cat][0];
  let title = `${articleTitlePrefix}${cat.charAt(0).toUpperCase() + cat.slice(1)} in ${country.toUpperCase()} ${titleSuffix} (Article ${index + 1})`;
  let description = `This is a long, unique description for the ${cat} news in ${country}. The article covers the massive impact of the story on the local culture and global markets. This is long enough for the Reels component to read aloud. (Article ${index + 1} of ${cat} in ${country})`;
  let content = `The full content for the article, which is used by Reels to read aloud. ${cat} is buzzing in ${country}. This content section confirms the vital information from the title. Source: ${randomSource.name}. This is article number ${index + 1} for full Text-to-Speech demonstration.`;
  
  // --- Local Language Injection for politics, business, and general (for diversity) ---
  if (index < 3 && (cat === 'politics' || cat === 'general' || cat === 'business') && country !== "United States" && country !== "Canada") { 
    if (country === "India") {
      title = `भारत की खबरें: ${articleTitlePrefix}${cat.toUpperCase()} Update (Article ${index + 1})`;
      description = `यह भारत की ख़बरों के बारे में एक महत्वपूर्ण समाचार है। देश और दुनिया के लिए इसका बड़ा महत्व है। यह विवरण रीलों के लिए काफी लंबा है।`;
      content = `यह भारत की ख़बरों के बारे में पूरी खबर है।`;
    } else if (country === "Germany") {
      title = `DEUTSCHE NACHRICHTEN: ${articleTitlePrefix}${cat.toUpperCase()} News (Artikel ${index + 1})`;
      description = `Dies ist eine wichtige Nachricht über die deutschen Neuigkeiten. Die Auswirkungen auf die lokale Wirtschaft sind enorm. Diese Beschreibung ist lang genug für Reels.`;
      content = `Der vollständige Inhalt des Artikels, der für Text-to-Speech verwendet wird.`;
    } else if (country === "Japan") {
      title = `日本のニュース: ${articleTitlePrefix}${cat.toUpperCase()}の最新情報 (記事 ${index + 1})`;
      description = `これは日本のニュースに関する重要な記事です。この記事は、地域文化への大きな影響をカバーしています。この説明はリールに十分な長さです。`;
      content = `リールで使用される記事の完全なコンテンツ。`;
    }
  }

  return {
    source: randomSource, // RANDOM SOURCE
    author: `D. Author ${index + 1}`,
    title: title,
    description: description,
    url: `https://dummynewspulse.com/article/${country}-${cat}-${index}`,
    urlToImage: urlToImage,
    publishedAt: formattedDate,
    content: content
  };
};

const DUMMY_NEWS_DATA = {};
const dedicatedArticles = getDedicatedArticles();

SUPPORTED_COUNTRIES.forEach(country => {
  DUMMY_NEWS_DATA[country.code] = {};
  
  CATEGORIES.forEach(category => {
    let articleCount;
    let titleSuffix = 'Summary'; // Default suffix
    let source;

    // Define counts and specific details based on category 
    // Home.jsx PAGE_SIZE = 6.
    switch (category) {
      case 'general':
        articleCount = 36; // 6 pages
        titleSuffix = 'Global Summary';
        break;
      case 'politics':
        articleCount = 30; // 5 pages
        titleSuffix = 'Political Analysis';
        break;
      case 'technology':
        articleCount = 18; // 3 pages
        titleSuffix = 'Tech Report';
        break;
      case 'business':
        articleCount = 12; // 2 pages
        titleSuffix = 'Market Focus';
        break;
      case 'sports':
        articleCount = 7; // 2 pages
        titleSuffix = 'Match Day';
        break;
      case 'entertainment':
        articleCount = 5; // 1 page
        titleSuffix = 'Gossip Scoop';
        break;
      case 'health':
        articleCount = 15; // 3 pages
        titleSuffix = 'Wellness Alert';
        break;
      case 'science':
        articleCount = 10; // 2 pages
        titleSuffix = 'Scientific Discovery';
        break;
      default:
        articleCount = 6;
        titleSuffix = 'Misc News';
    }
    
    // Generate filler articles
    const fillerArticles = Array.from({ length: articleCount }, (_, i) => 
      articleTemplate(category, country.name, i, titleSuffix)
    );
    
    // Filter and prepend dedicated articles for this country/category
    const categoryDedicatedArticles = dedicatedArticles
        .filter(a => a.category === category && a.countryCode === country.code)
        // Destructure to remove temporary filtering properties (category, countryCode)
        .map(({ category: _, countryCode: __, ...rest }) => rest); 
    
    // Prepend dedicated articles to ensure they appear first and are included in search pool
    DUMMY_NEWS_DATA[country.code][category] = [...categoryDedicatedArticles, ...fillerArticles];
  });
});

// ===============================================
// DUMMY FETCH FUNCTION (REPLACING API CALL)
// ===============================================

export const fetchTopHeadlines = async (
  category = "general",
  query = "",
  country = "us"
) => {
  // If a search query is active, simulate search results from all available data
  if (query) {
    // Collect all articles from all categories/countries for a diverse search pool
    const allArticles = Object.values(DUMMY_NEWS_DATA)
      .flatMap(countryData => Object.values(countryData).flat());
    
    const lowerQuery = query.toLowerCase();

    // Filter by query (title, description, or content) - Max 30 articles for 5 pages of search results
    const searchResults = allArticles.filter(article => 
      (article.title && article.title.toLowerCase().includes(lowerQuery)) || 
      (article.description && article.description.toLowerCase().includes(lowerQuery)) || 
      (article.content && article.content.toLowerCase().includes(lowerQuery))
    ).slice(0, 30); 
    
    // Modify titles and source for search results context
    return searchResults.map((article, index) => ({
      ...article,
      title: `Search Result ${index + 1} for "${query}": ${article.title.replace(/\(Article\s\d+\)/, '').trim()}`,
      source: { id: 'dummy-search', name: 'Search Aggregator' },
    }));
  }

  // Otherwise, return the specific country/category data
  const countryData = DUMMY_NEWS_DATA[country] || DUMMY_NEWS_DATA["us"];
  return countryData[category] || countryData["general"] || []; 
};