const DUMMY_MOVIES = [
  // --- International (10 Movies) ---
  {
    id: 1,
    year: 2009,
    genre: "Action, Sci-Fi, Adventure",
    translations: {
      en: {
        title: "Avatar",
        description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home."
      },
      hi: {
        title: "अवतार",
        description: "एक पैरालाइज्ड मरीन पेंडोरा चंद्रमा पर एक अनोखी मिशन के लिए भेजा जाता है, जो आदेशों का पालन करने और अपने घर को बचाने के बीच फंस जाता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 2,
    year: 2019,
    genre: "Action, Sci-Fi, Drama",
    translations: {
      en: {
        title: "Avengers: Endgame",
        description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers prepare for one last stand."
      },
      hi: {
        title: "अवेंजर्स: एंडगेम",
        description: "खाने या पानी के बिना अंतरिक्ष में, टोनी स्टार्क पेपर पॉट्स को संदेश भेजते हैं क्योंकि उनकी ऑक्सीजन आपूर्ति घटने लगती है। बाकी अवेंजर्स आखिरी लड़ाई के लिए तैयार होते हैं।"
      }
    },
    posterUrl: ""
  },
  {
    id: 3,
    year: 1994,
    genre: "Drama",
    translations: {
      en: {
        title: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      },
      hi: {
        title: "द शॉशैंक रिडेम्पशन",
        description: "दो कैदियों की दोस्ती वर्षों में गहरी होती है, जो सामान्य सदाचार के कार्यों के माध्यम से शांति और अंततः मुक्ति पाते हैं।"
      }
    },
    posterUrl: ""
  },
  {
    id: 4,
    year: 2008,
    genre: "Action, Crime, Drama",
    translations: {
      en: {
        title: "The Dark Knight",
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
      },
      hi: {
        title: "द डार्क नाइट",
        description: "जब जोकर के रूप में जाना जाने वाला खलनायक अपने रहस्यमय अतीत से उभरता है, तो वह गॉथम के लोगों पर अराजकता फैलाता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 5,
    year: 1994,
    genre: "Crime, Drama, Comedy",
    translations: {
      en: {
        title: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      },
      hi: {
        title: "पल्प फिक्शन",
        description: "दो माफिया हिटमैन, एक बॉक्सर, एक गैंगस्टर और उसकी पत्नी, और दो डिनर डाकुओं की कहानियाँ चार हिंसक और मुक्ति से भरी घटनाओं में जुड़ती हैं।"
      }
    },
    posterUrl: ""
  },
  {
    id: 6,
    year: 1999,
    genre: "Drama",
    translations: {
      en: {
        title: "Fight Club",
        description: "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and starts an underground fight club that evolves into something much more."
      },
      hi: {
        title: "फाइट क्लब",
        description: "एक अनिद्रा से पीड़ित ऑफिस कर्मचारी अपनी जिंदगी बदलने का रास्ता खोजते हुए एक नापरवाह साबुन बनाने वाले से मिलता है और एक भूमिगत फाइट क्लब शुरू करता है जो बहुत कुछ बन जाता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 7,
    year: 2010,
    genre: "Action, Adventure, Sci-Fi",
    translations: {
      en: {
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
      },
      hi: {
        title: "इन्सेप्शन",
        description: "एक चोर जो सपनों के जरिए कॉर्पोरेट रहस्य चुराता है, उसे एक सीईओ के दिमाग में एक विचार डालने का उल्टा काम दिया जाता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 8,
    year: 1999,
    genre: "Action, Sci-Fi",
    translations: {
      en: {
        title: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
      },
      hi: {
        title: "द मैट्रिक्स",
        description: "एक कंप्यूटर हैकर रहस्यमय विद्रोहियों से अपनी वास्तविकता की असली प्रकृति और इसके नियंत्रकों के खिलाफ युद्ध में अपनी भूमिका के बारे में सीखता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 9,
    year: 2014,
    genre: "Sci-Fi, Drama, Adventure",
    translations: {
      en: {
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
      },
      hi: {
        title: "इंटरस्टेलर",
        description: "एक खोजकर्ता टीम अंतरिक्ष में वर्महोल के माध्यम से यात्रा करती है ताकि मानवता के अस्तित्व को सुनिश्चित किया जा सके।"
      }
    },
    posterUrl: ""
  },
  {
    id: 10,
    year: 2001,
    genre: "Animation, Adventure, Fantasy",
    translations: {
      en: {
        title: "Spirited Away",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
      },
      hi: {
        title: "स्पिरिटेड अवे",
        description: "अपने परिवार के उपनगरों में जाने के दौरान, एक उदास 10 वर्षीय लड़की एक दुनिया में भटकती है जहाँ देवता, जादूगर और आत्माएँ शासन करती हैं और मानवों को जानवरों में बदल दिया जाता है।"
      }
    },
    posterUrl: ""
  },

  // --- Indian (10 Movies) ---
  {
    id: 11,
    year: 2016,
    genre: "Biography, Sport, Drama",
    translations: {
      en: {
        title: "Dangal (Hindi)",
        description: "Former wrestler Mahavir Singh Phogat decides to train his daughters Geeta and Babita to become world-class wrestlers."
      },
      hi: {
        title: "दंगल",
        description: "पूर्व पहलवान महावीर सिंह फोगट अपनी बेटियों गीता और बबीता को विश्व स्तरीय पहलवान बनाने के लिए प्रशिक्षित करने का निर्णय लेते हैं।"
      }
    },
    posterUrl: ""
  },
  {
    id: 12,
    year: 2017,
    genre: "Action, Fantasy, Drama",
    translations: {
      en: {
        title: "Baahubali 2: The Conclusion",
        description: "Years after the events of The Beginning, Sivagami, the Queen Mother, is forced to execute Baahubali. His son must now avenge his father's death."
      },
      hi: {
        title: "बाहुबली 2: द कंक्लूजन",
        description: "द बिगिनिंग की घटनाओं के वर्षों बाद, रानी शिवगामी को बाहुबली को समाप्त करने के लिए मजबूर किया जाता है। अब उसका बेटा अपने पिता की मौत का बदला लेता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 13,
    year: 2022,
    genre: "Action, Drama, History",
    translations: {
      en: {
        title: "RRR (Telugu)",
        description: "A fictional story about two legendary revolutionaries, Alluri Sitarama Raju and Komaram Bheem, and their journey away from home before they started fighting for their country in the 1920s."
      },
      hi: {
        title: "आरआरआर",
        description: "दो प्रसिद्ध क्रांतिकारियों, अल्लुरी सीताराम राजू और कोमारम भीम की एक काल्पनिक कहानी, और उनके देश के लिए लड़ने से पहले घर से उनकी यात्रा।"
      }
    },
    posterUrl: ""
  },
  {
    id: 14,
    year: 2022,
    genre: "Action, Crime, Thriller",
    translations: {
      en: {
        title: "K.G.F: Chapter 2 (Kannada)",
        description: "The story of Rocky, who after establishing himself as the kingpin of the Kolar Gold Fields, must retain his supremacy over the enemies and government officials."
      },
      hi: {
        title: "के.जी.एफ: चैप्टर 2",
        description: "रॉकी की कहानी, जो कोलार गोल्ड फील्ड्स का राजा बनने के बाद, अपने दुश्मनों और सरकारी अधिकारियों पर अपनी प्रभुत्व बनाए रखना चाहता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 15,
    year: 2009,
    genre: "Comedy, Drama, Romance",
    translations: {
      en: {
        title: "3 Idiots (Hindi)",
        description: "Two friends embark on a quest for a lost buddy who inspired them to think differently, even as the world called them 'idiots.'"
      },
      hi: {
        title: "3 इडियट्स",
        description: "दो दोस्त एक खोए हुए मित्र की तलाश में निकलते हैं, जिसने उन्हें अलग सोचने के लिए प्रेरित किया, भले ही दुनिया उन्हें 'इडियट्स' कहती रही।"
      }
    },
    posterUrl: ""
  },
  {
    id: 16,
    year: 2014,
    genre: "Sci-Fi, Comedy, Fantasy",
    translations: {
      en: {
        title: "PK (Hindi)",
        description: "An alien lands on Earth, but when his communication device is stolen, he must learn about the strange customs of humanity to recover it and return home."
      },
      hi: {
        title: "पी.के.",
        description: "एक एलियन पृथ्वी पर आता है, लेकिन जब उसका संचार उपकरण चोरी हो जाता है, तो उसे इसे वापस पाने और घर लौटने के लिए मानवता की अजीब रीतियों को सीखना पड़ता है।"
      }
    },
    posterUrl: ""
  },
  {
    id: 17,
    year: 2007,
    genre: "Drama, Family",
    translations: {
      en: {
        title: "Taare Zameen Par (Hindi)",
        description: "An eight-year-old boy is thought to be a lazy troublemaker, until the new art teacher discovers the real problem: dyslexia."
      },
      hi: {
        title: "तारे ज़मीन पर",
        description: "एक आठ वर्षीय लड़के को आलसी समझा जाता है, जब तक कि नए आर्ट टीचर को असली समस्या: डिस्लेक्सिया का पता नहीं चलता।"
      }
    },
    posterUrl: ""
  },
  {
    id: 18,
    year: 2019,
    genre: "Action, War, Drama",
    translations: {
      en: {
        title: "Uri: The Surgical Strike (Hindi)",
        description: "Based on the real-life 2016 surgical strikes conducted by the Indian Army in retaliation for a terrorist attack."
      },
      hi: {
        title: "उरी: द सर्जिकल स्ट्राइक",
        description: "2016 में भारतीय सेना द्वारा आतंकवादी हमले के जवाब में किए गए वास्तविक सर्जिकल स्ट्राइक पर आधारित।"
      }
    },
    posterUrl: ""
  },
  {
    id: 19,
    year: 2012,
    genre: "Action, Crime, Thriller",
    translations: {
      en: {
        title: "Gangs of Wasseypur (Hindi)",
        description: "A two-part saga chronicling the sprawling feud between three crime families in the city of Wasseypur."
      },
      hi: {
        title: "गैंग्स ऑफ वासेपुर",
        description: "वासेपुर शहर में तीन अपराधी परिवारों के बीच फैली झगड़े की दो-भाग वाली गाथा।"
      }
    },
    posterUrl: ""
  },
  {
    id: 20,
    year: 2012,
    genre: "Thriller, Mystery, Drama",
    translations: {
      en: {
        title: "Kahaani (Hindi)",
        description: "A pregnant woman arrives in Kolkata from London to search for her missing husband, but the city seems to deny that he ever existed."
      },
      hi: {
        title: "कहानी",
        description: "एक गर्भवती महिला अपने पति की तलाश में लंदन से कोलकाता आती है, लेकिन शहर ऐसा लगता है कि वह कभी मौजूद ही नहीं था।"
      }
    },
    posterUrl: ""
  }
];

const CATEGORIES = [
  "Action",
  "Sci-Fi",
  "Adventure",
  "Drama",
  "Romance",
  "Crime",
  "Comedy",
  "Animation",
  "Thriller",
  "Fantasy", 
  "War",     
  "Horror",  
  "Biography", 
  "Sport",
  "History",
  "Mystery", 
  "Family" 
];

export { DUMMY_MOVIES, CATEGORIES };
