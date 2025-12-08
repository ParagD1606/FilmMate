import idiots from "../assets/3idiots.jpg";
import avatar from "../assets/avatar.jpg";
import endgame from "../assets/endgame.jpg";
import redemption from "../assets/redemption.jpg";

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
      },
      ta: {
        title: "அவதார்",
        description: "பாண்டோரா நிலவுக்கு ஒரு தனித்துவமான பணிக்கு அனுப்பப்பட்ட ஒரு பக்கவாதத்தால் பாதிக்கப்பட்ட கடற்படை வீரர், உத்தரவுகளைப் பின்பற்றுவதற்கும், அவர் தனது வீடு என்று உணரும் உலகத்தைப் பாதுகாப்பதற்கும் இடையில் கிழிந்திருக்கிறார்."
      },
      fr: {
        title: "Avatar",
        description: "Un marine paraplégique envoyé sur la lune Pandora pour une mission unique est déchiré entre suivre les ordres et protéger le monde qu'il considère comme sa maison."
      }
    },
    posterUrl: avatar
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
      },
      ta: {
        title: "அவெஞ்சர்ஸ்: எண்ட்கேம்",
        description: "உணவோ நீரோ இல்லாமல் விண்வெளியில் சிக்கியிருக்கும் டோனி ஸ்டார்க், தன் ஆக்ஸிஜன் இருப்பு குறையத் தொடங்கியதால் பெப்பர் பாட்ஸுக்கு ஒரு செய்தியை அனுப்புகிறார். இதற்கிடையில், மீதமுள்ள அவெஞ்சர்ஸ் ஒரு கடைசி சண்டைக்குத் தயாராகிறார்கள்."
      },
      fr: {
        title: "Avengers: Endgame",
        description: "À la dérive dans l'espace sans nourriture ni eau, Tony Stark envoie un message à Pepper Potts alors que son approvisionnement en oxygène commence à diminuer. Pendant ce temps, les Avengers restants se préparent pour un dernier combat."
      }
    },
    posterUrl: endgame
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
      },
      ta: {
        title: "தி ஷாவ்ஷாங்க் ரிடெம்ப்சன்",
        description: "சிறையில் அடைக்கப்பட்ட இரண்டு ஆண்கள் பல ஆண்டுகளாகப் பழகி, பொதுவான ஒழுக்கமான செயல்கள் மூலம் ஆறுதலையும் இறுதியில் மீட்பையும் பெறுகிறார்கள்."
      },
      fr: {
        title: "Les Évadés",
        description: "Deux hommes emprisonnés nouent des liens au fil des ans, trouvant réconfort et rédemption finale à travers des actes de décence commune."
      }
    },
    posterUrl: redemption
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
      },
      ta: {
        title: "தி டார்க் நைட்",
        description: "தி ஜோக்கர் என்று அழைக்கப்படும் அச்சுறுத்தல் தனது மர்மமான கடந்த காலத்திலிருந்து வெளிப்படும்போது, ​​அவர் கோதம் மக்கள் மீது பேரழிவையும் குழப்பத்தையும் ஏற்படுத்துகிறார்."
      },
      fr: {
        title: "The Dark Knight",
        description: "Lorsque la menace connue sous le nom du Joker émerge de son passé mystérieux, il sème le chaos et la destruction sur les habitants de Gotham."
      }
    },
    posterUrl: "https://host.trivialbeing.org/up/small/tdk-jun26-joker-subway.jpg"
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
      },
      ta: {
        title: "பல்ப் ஃபிக்சன்",
        description: "இரண்டு கும்பல் கொலையாளிகள், ஒரு குத்துச்சண்டை வீரர், ஒரு கேங்க்ஸ்டர் மற்றும் அவரது மனைவி, மற்றும் ஒரு ஜோடி உணவகக் கொள்ளையர்களின் வாழ்க்கை வன்முறை மற்றும் மீட்பின் நான்கு கதைகளில் பின்னிப்பிணைந்துள்ளது."
      },
      fr: {
        title: "Pulp Fiction",
        description: "Les vies de deux tueurs à gages, d'un boxeur, d'un gangster et de sa femme, et d'un couple de bandits de restaurant s'entremêlent dans quatre histoires de violence et de rédemption."
      }
    },
    posterUrl: "https://www.shutterstock.com/image-photo/napoliitaly-november-152024-movie-poster-260nw-2546155485.jpg"
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
      },
      ta: {
        title: "ஃபைட் கிளப்",
        description: "தன் வாழ்க்கையை மாற்ற வழி தேடும் தூக்கமின்மை கொண்ட அலுவலக ஊழியர் ஒரு அலட்சியமான சோப்பு தயாரிப்பாளருடன் பாதைகளைக் கடக்கிறார் மற்றும் ஒரு நிலத்தடி சண்டை கிளப்பைத் தொடங்குகிறார், அது இன்னும் அதிகமாக உருவாகிறது."
      },
      fr: {
        title: "Fight Club",
        description: "Un employé de bureau insomniaque cherchant un moyen de changer sa vie croise le chemin d'un fabricant de savon insouciant et lance un club de combat clandestin qui évolue en quelque chose de bien plus grand."
      }
    },
    posterUrl: "https://wallpapers.com/images/featured/fight-club-pictures-ibgirl59hxvxr5y4.jpg"
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
      },
      ta: {
        title: "இன்செப்ஷன்",
        description: "கனவுகளைப் பகிர்ந்துகொள்ளும் தொழில்நுட்பத்தைப் பயன்படுத்தி கார்ப்பரேட் ரகசியங்களைத் திருடும் ஒரு திருடனுக்கு, ஒரு தலைமை நிர்வாக அதிகாரியின் மனதில் ஒரு யோசனையை விதைக்கும் தலைகீழ் பணி வழங்கப்படுகிறது."
      },
      fr: {
        title: "Inception",
        description: "Un voleur qui dérobe des secrets d'entreprise par le biais d'une technologie de partage de rêves se voit confier la tâche inverse d'implanter une idée dans l'esprit d'un PDG."
      }
    },
    posterUrl: "https://m.media-amazon.com/images/I/71SjZkFDdGL._AC_UF1000,1000_QL80_.jpg"
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
      },
      ta: {
        title: "தி மேட்ரிக்ஸ்",
        description: "ஒரு கணினி ஹேக்கர் மர்மமான கிளர்ச்சியாளர்களிடமிருந்து தனது யதார்த்தத்தின் உண்மையான தன்மை மற்றும் அதன் கட்டுப்படுத்திகளுக்கு எதிரான போரில் தனது பங்கு பற்றி அறிந்து கொள்கிறார்."
      },
      fr: {
        title: "The Matrix",
        description: "Un hacker apprend de mystérieux rebelles la véritable nature de sa réalité et son rôle dans la guerre contre ses contrôleurs."
      }
    },
    posterUrl: "https://ih1.redbubble.net/image.3076041117.0867/fposter,small,wall_texture,square_product,600x600.jpg"
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
      },
      ta: {
        title: "இன்டர்ஸ்டெல்லர்",
        description: "மனிதகுலத்தின் இருப்பை உறுதி செய்வதற்காக ஒரு குழு ஆய்வாளர்கள் விண்வெளியில் ஒரு வார்ம்ஹோல் வழியாக பயணிக்கின்றனர்."
      },
      fr: {
        title: "Interstellar",
        description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace pour tenter d'assurer la survie de l'humanité."
      }
    },
    posterUrl: "https://cdn.mos.cms.futurecdn.net/z8AEXEHERwLGdQtBUSUECU.jpg"
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
      },
      ta: {
        title: "ஸ்பிரிட்டட் அவே",
        description: "தன் குடும்பம் புறநகர்ப் பகுதிக்குச் செல்லும் போது, ​​ஒரு சோர்வான 10 வயது சிறுமி கடவுள்கள், மந்திரவாதிகள் மற்றும் ஆவிகளால் ஆளப்படும் ஒரு உலகிற்குச் செல்கிறாள், அங்கு மனிதர்கள் மிருகங்களாக மாற்றப்படுகிறார்கள்."
      },
      fr: {
        title: "Le Voyage de Chihiro",
        description: "Lors du déménagement de sa famille en banlieue, une fille de 10 ans boudeuse s'égare dans un monde régi par des dieux, des sorcières et des esprits, et où les humains sont changés en bêtes."
      }
    },
    posterUrl: "https://images.squarespace-cdn.com/content/v1/5b1591bf70e802d439edd4de/2485aaa6-313a-4296-a4b0-239f7215a2eb/Spirited+Away+-+Hero.jpg"
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
      },
      ta: {
        title: "தங்கல்",
        description: "முன்னாள் மல்யுத்த வீரர் மஹாவீர் சிங் போகட் தனது மகள்களான கீதா மற்றும் பபிதாவை உலகத் தரம் வாய்ந்த மல்யுத்த வீரர்களாகப் பயிற்றுவிக்க முடிவு செய்கிறார்."
      },
      fr: {
        title: "Dangal",
        description: "L'ancien lutteur Mahavir Singh Phogat décide d'entraîner ses filles Geeta et Babita pour qu'elles deviennent des lutteuses de classe mondiale."
      }
    },
    posterUrl: "https://images.firstpost.com/wp-content/uploads/2016/07/Dangal-poster-large-380.jpg?im=FitAndFill=(596,336)"
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
      },
      ta: {
        title: "பாகுபலி 2: தி கன்க்ளூஷன்",
        description: "தி பிகினிங் நிகழ்வுகளுக்குப் பல ஆண்டுகளுக்குப் பிறகு, ராணி தாயார் சிவகாமி, பாகுபலியை தூக்கிலிட வேண்டிய கட்டாயம் ஏற்படுகிறது. இப்போது அவரது மகன் தனது தந்தையின் மரணத்திற்கு பழிவாங்க வேண்டும்."
      },
      fr: {
        title: "Baahubali 2: La Conclusion",
        description: "Des années après les événements de The Beginning, Sivagami, la reine mère, est contrainte d'exécuter Baahubali. Son fils doit maintenant venger la mort de son père."
      }
    },
    posterUrl: "https://xstreamcp-assets-msp.streamready.in/assets/SONYLIV_VOD/MOVIE/64b6ac9c1e42943d88c5643c/images/bahubalithebeginning_1080x1080_clean_airtel_square.jpg"
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
      },
      ta: {
        title: "RRR",
        description: "அல்லூரி சீதாராம ராஜு மற்றும் கோமாரம் பீம் ஆகிய இரண்டு புகழ்பெற்ற புரட்சியாளர்களைப் பற்றிய ஒரு கற்பனைக் கதை, மேலும் அவர்கள் 1920 களில் தங்கள் நாட்டிற்காகப் போராடத் தொடங்குவதற்கு முன் வீட்டை விட்டு வெளியேறிய அவர்களின் பயணம்."
      },
      fr: {
        title: "RRR",
        description: "Une histoire fictive sur deux révolutionnaires légendaires, Alluri Sitarama Raju et Komaram Bheem, et leur voyage loin de chez eux avant qu'ils ne commencent à se battre pour leur pays dans les années 1920."
      }
    },
    posterUrl: "https://static01.nyt.com/images/2023/03/28/mosaic-oscars-naatunaatu68328-889/mosaic-oscars-naatunaatu68328-889-square640.jpg"
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
      },
      ta: {
        title: "கே.ஜி.எஃப்: அத்தியாயம் 2",
        description: "கோலார் தங்க வயல்களின் தலைவராக தன்னை நிலைநிறுத்திய பிறகு, எதிரிகள் மற்றும் அரசு அதிகாரிகள் மீது தனது மேலாதிக்கத்தைத் தக்க வைத்துக் கொள்ள வேண்டிய ராக்கியின் கதை."
      },
      fr: {
        title: "K.G.F: Chapitre 2",
        description: "L'histoire de Rocky, qui, après s'être imposé comme le chef des Kolar Gold Fields, doit maintenir sa suprématie sur ses ennemis et les fonctionnaires du gouvernement."
      }
    },
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpBoHaFTj9Uc0x-1o3HRZTxo8DrmZRGkrYw&s"
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
      },
      ta: {
        title: "3 இடியட்ஸ்",
        description: "உலகின் முட்டாள்கள் என்று அழைக்கப்பட்டாலும், வித்தியாசமாக சிந்திக்கத் தூண்டிய ஒரு இழந்த நண்பனைத் தேடி இரண்டு நண்பர்கள் புறப்படுகிறார்கள்."
      },
      fr: {
        title: "3 Idiots",
        description: "Deux amis se lancent à la recherche d'un camarade perdu qui les a inspirés à penser différemment, même si le monde les traitait d'idiots."
      }
    },
    posterUrl: idiots
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
      },
      ta: {
        title: "பி.கே.",
        description: "ஒரு வேற்றுகிரகவாசி பூமியில் தரையிறங்குகிறார், ஆனால் அவரது தகவல் தொடர்பு சாதனம் திருடப்பட்டபோது, ​​அவர் அதை மீட்கவும் வீட்டிற்கு திரும்பவும் மனிதகுலத்தின் விசித்திரமான பழக்கவழக்கங்களைப் பற்றி அறிந்து கொள்ள வேண்டும்."
      },
      fr: {
        title: "PK",
        description: "Un extraterrestre atterrit sur Terre, mais lorsque son dispositif de communication est volé, il doit apprendre les étranges coutumes de l'humanité pour le récupérer et rentrer chez lui."
      }
    },
    posterUrl: "https://w0.peakpx.com/wallpaper/380/356/HD-wallpaper-pk-movie-motion-poster-thumbnail.jpg"
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
      },
      ta: {
        title: "தாரே ஜமீன் பர்",
        description: "எட்டு வயது சிறுவன் சோம்பேறி குறும்புக்காரன் என்று கருதப்படுகிறான், புதிய கலை ஆசிரியர் உண்மையான பிரச்சனையைக் கண்டுபிடிக்கும் வரை: டிஸ்லெக்ஸியா."
      },
      fr: {
        title: "Taare Zameen Par",
        description: "Un garçon de huit ans est considéré comme un fauteur de troubles paresseux, jusqu'à ce que le nouveau professeur d'art découvre le vrai problème: la dyslexie."
      }
    },
    posterUrl: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/51206139.jpg"
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
      },
      ta: {
        title: "உரி: தி சர்ஜிகல் ஸ்ட்ரைக்",
        description: "ஒரு பயங்கரவாதத் தாக்குதலுக்குப் பதிலடியாக இந்திய இராணுவத்தால் மேற்கொள்ளப்பட்ட 2016 உண்மையான அறுவை சிகிச்சை வேலைநிறுத்தங்களின் அடிப்படையில் அமைந்துள்ளது."
      },
      fr: {
        title: "Uri: The Surgical Strike",
        description: "Basé sur les véritables frappes chirurgicales menées par l'armée indienne en 2016 en représailles à une attaque terroriste."
      }
    },
    posterUrl: "https://static.toiimg.com/thumb/msid-67956024,width-400,resizemode-4/67956024.jpg"
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
      },
      ta: {
        title: "கேங்ஸ் ஆஃப் வாஸேபூர்",
        description: "வாஸேபூர் நகரத்தில் மூன்று குற்றக் குடும்பங்களுக்கு இடையேயான பரவிய பகையை விவரிக்கும் இரண்டு பகுதி காவியம்."
      },
      fr: {
        title: "Gangs of Wasseypur",
        description: "Une saga en deux parties racontant la querelle tentaculaire entre trois familles criminelles dans la ville de Wasseypur."
      }
    },
    posterUrl: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2012/06/15/Incoming/Pictures/872904_Wallpaper2.jpg"
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
      },
      ta: {
        title: "கஹானி",
        description: "காணாமல் போன கணவரைத் தேடி கர்ப்பிணிப் பெண் லண்டனில் இருந்து கொல்கத்தா வந்து சேர்கிறாள், ஆனால் அவர் எப்போதாவது இருந்ததை நகரம் மறுப்பதாகத் தெரிகிறது."
      },
      fr: {
        title: "Kahaani",
        description: "Une femme enceinte arrive à Kolkata depuis Londres pour chercher son mari disparu, mais la ville semble nier qu'il ait jamais existé."
      }
    },
    posterUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b5de6137092751.56065c8e59a75.jpg"
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