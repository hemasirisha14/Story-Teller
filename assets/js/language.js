/* =========================================
       STORY TELLER LANGUAGE SYSTEM
========================================= */


/* =========================================
       GET SAVED LANGUAGE
========================================= */

const selectedLanguage =
    localStorage.getItem("language") || "en";


/* =========================================
       LANGUAGE TRANSLATIONS
========================================= */

const translations = {

    /* =====================================
                    ENGLISH
    ===================================== */

    en: {

        home: "Home",
        stories: "Stories",
        about: "About",
        login: "Login",
        profile: "Profile",
        settings: "Settings",

        awaits:
            "A world of stories awaits",

        storyBegins:
            "Every Story Begins",

        singleClick:
            "with a Single Click.",

        tagline:
            "Every Story Begins with a Single Click.",

        heroDescription:
            "Step into a world of imagination where every story takes you somewhere new. Discover adventures, mysteries, laughter, emotions and unforgettable characters — all in one place.",

        exploreGenres:
            "Explore Genres",

        multipleGenres:
            "Multiple Genres",

        storiesEveryMood:
            "Stories for every mood",

        readAloud:
            "Read Aloud",

        listenStories:
            "Listen to your stories",

        yourExperience:
            "Your Experience",

        personalizeReading:
            "Personalize your reading",

        storiesEveryReader:
            "Stories for Every Kind of Reader",

        readerDescription:
            "Whether you want to laugh, feel, explore or be surprised, there is a story waiting for you.",

        imagine:
            "Imagine",

        imagineDescription:
            "Escape into magical worlds, fantasy adventures and extraordinary possibilities.",

        explore:
            "Explore",

        exploreDescription:
            "Follow mysteries, thrilling journeys and stories that keep you turning the page.",

        feel:
            "Feel",

        feelDescription:
            "Experience meaningful stories, life lessons and unforgettable emotional moments.",


        /* =================================
                 STORIES PAGE
        ================================= */

        storyLibrary:
            "✨ YOUR STORY LIBRARY",

        chooseYour:
            "Choose Your",

        storyWorld:
            "Story World",

        storyWorldDescription:
            "Pick your reading world, discover a genre, and let your next adventure begin.",

        whoReading:
            "Who is reading?",

        kids:
            "Kids",

        magicalFun:
            "Magical & fun",

        adults:
            "Adults",

        deeperAdventures:
            "Deeper adventures",

        search:
            "Search stories or genres...",

        youngReaders:
            "👧 FOR YOUNG READERS",

        kidsGenres:
            "Kids Genres",

        kidsGenresDescription:
            "Magical worlds, funny adventures, meaningful lessons and stories made to spark imagination.",

        fantasy:
            "Fantasy",

        fantasyDescription:
            "Enter magical worlds filled with wonder, courage and imagination.",

        magicalAdventures:
            "✨ Magical adventures",

        comedy:
            "Comedy",

        comedyDescription:
            "Funny characters and playful adventures guaranteed to make you smile.",

        funLaughter:
            "😄 Fun & laughter",

        moral:
            "Moral",

        moralDescription:
            "Heartwarming stories that carry meaningful lessons for life.",

        learnGrow:
            "💡 Learn & grow",

        animals:
            "Animals",

        animalsDescription:
            "Meet lovable animals and discover adventures from their wonderful worlds.",

        animalAdventures:
            "🐾 Animal adventures",

        magic:
            "Magic",

        magicDescription:
            "Discover enchanted places, mysterious powers and magical surprises.",

        enchantedWorlds:
            "🪄 Enchanted worlds",

        bedtime:
            "Bedtime",

        bedtimeDescription:
            "Calm and comforting stories perfect for winding down.",

        calmMoments:
            "🌙 Calm moments",

        fairyTales:
            "Fairy Tales",

        fairyTalesDescription:
            "Step into castles, kingdoms and timeless magical adventures.",

        timelessTales:
            "👑 Timeless tales",

        adventure:
            "Adventure",

        adventureDescription:
            "Exciting journeys, discoveries and challenges await beyond every page.",

        exploreDiscover:
            "🚀 Explore & discover",


        /* =================================
                 ADULT GENRES
        ================================= */

        adultReaders:
            "🧑 FOR ADULT READERS",

        adultGenres:
            "Adult Genres",

        adultGenresDescription:
            "Explore mysteries, suspense, romance, imagination and stories written for mature readers.",

        thriller:
            "Thriller",

        thrillerDescription:
            "Fast-paced stories filled with suspense, tension and unexpected turns.",

        highTension:
            "⚡ High tension",

        horror:
            "Horror",

        horrorDescription:
            "Dark mysteries, eerie places and stories that stay with you.",

        darkMysterious:
            "🌑 Dark & mysterious",

        romance:
            "Romance",

        romanceDescription:
            "Emotional journeys, relationships and stories about connection.",

        heartfeltStories:
            "❤️ Heartfelt stories",

        adultComedyDescription:
            "Light-hearted stories, clever moments and plenty of laughter.",

        funWitty:
            "😄 Fun & witty",

        mystery:
            "Mystery",

        mysteryDescription:
            "Follow clues, uncover secrets and solve intriguing mysteries.",

        solveUnknown:
            "🔎 Solve the unknown",

        scifi:
            "Sci-Fi",

        scifiDescription:
            "Explore futuristic worlds, technology and extraordinary possibilities.",

        beyondReality:
            "🌌 Beyond reality",

        historical:
            "Historical",

        historicalDescription:
            "Travel through time with stories inspired by different eras and worlds.",

        throughAges:
            "🕰️ Through the ages",

        motivational:
            "Motivational",

        motivationalDescription:
            "Stories of courage, growth, determination and new beginnings.",

        inspireYourself:
            "🌟 Inspire yourself",


        /* =================================
                 GENRE PAGE
        ================================= */

        storyCollection:
            "STORY COLLECTION",

        story:
            "STORY",

        pages:
            "Pages",

        originalStory:
            "Original Story",

        readThisStory:
            "Read This Story",

        storyWorldNotFound:
            "Story World Not Found",

        genreDoesNotExist:
            "Sorry, this genre does not exist.",

        exploreAllGenres:
            "← Explore All Genres",


        /* =================================
                 COMMON
        ================================= */

        chooseStory:
            "Choose Your Story World",

        readStory:
            "Read Story",

        favorite:
            "Favorite",

        bookmark:
            "Bookmark",

        next:
            "Next",

        previous:
            "Previous",

        page:
            "Page",

        save:
            "Save",

        cancel:
            "Cancel"

    },


    /* =====================================
                    TELUGU
    ===================================== */

    te: {

        home:
            "హోమ్",

        stories:
            "కథలు",

        about:
            "మా గురించి",

        login:
            "లాగిన్",

        profile:
            "ప్రొఫైల్",

        settings:
            "సెట్టింగ్స్",

        awaits:
            "కథల ప్రపంచం మీ కోసం ఎదురుచూస్తోంది",

        storyBegins:
            "ప్రతి కథ ప్రారంభమవుతుంది",

        singleClick:
            "ఒక్క క్లిక్‌తో.",

        tagline:
            "ప్రతి కథ ఒక్క క్లిక్‌తో ప్రారంభమవుతుంది.",

        heroDescription:
            "ఊహల ప్రపంచంలోకి అడుగుపెట్టి ప్రతి కథ మిమ్మల్ని ఒక కొత్త ప్రపంచానికి తీసుకెళ్లనివ్వండి. సాహసాలు, రహస్యాలు, నవ్వులు, భావోద్వేగాలు మరియు మరపురాని పాత్రలను ఒకే చోట కనుగొనండి.",

        exploreGenres:
            "కథా విభాగాలను అన్వేషించండి",

        multipleGenres:
            "అనేక కథా విభాగాలు",

        storiesEveryMood:
            "ప్రతి భావానికి ఒక కథ",

        readAloud:
            "కథ వినండి",

        listenStories:
            "మీ కథలను వినండి",

        yourExperience:
            "మీ అనుభవం",

        personalizeReading:
            "మీ పఠనాన్ని వ్యక్తిగతీకరించండి",

        storiesEveryReader:
            "ప్రతి రకమైన పాఠకుడి కోసం కథలు",

        readerDescription:
            "మీకు నవ్వాలనిపించినా, భావోద్వేగాలను అనుభవించాలనుకున్నా, అన్వేషించాలనుకున్నా లేదా ఆశ్చర్యపోవాలనుకున్నా, మీ కోసం ఒక కథ ఎదురుచూస్తోంది.",

        imagine:
            "ఊహించండి",

        imagineDescription:
            "మాయా ప్రపంచాలు, ఫాంటసీ సాహసాలు మరియు అద్భుతమైన అవకాశాల్లోకి ప్రయాణించండి.",

        explore:
            "అన్వేషించండి",

        exploreDescription:
            "రహస్యాలు, ఉత్కంఠభరితమైన ప్రయాణాలు మరియు పేజీ తర్వాత పేజీ చదివించే కథలను అనుసరించండి.",

        feel:
            "అనుభవించండి",

        feelDescription:
            "అర్థవంతమైన కథలు, జీవిత పాఠాలు మరియు మరపురాని భావోద్వేగ క్షణాలను అనుభవించండి.",


        /* =================================
                 STORIES PAGE
        ================================= */

        storyLibrary:
            "✨ మీ కథల గ్రంథాలయం",

        chooseYour:
            "మీ",

        storyWorld:
            "కథల ప్రపంచాన్ని ఎంచుకోండి",

        storyWorldDescription:
            "మీ పఠన ప్రపంచాన్ని ఎంచుకోండి, ఒక కథా విభాగాన్ని కనుగొనండి మరియు మీ తదుపరి సాహసాన్ని ప్రారంభించండి.",

        whoReading:
            "ఎవరు చదువుతున్నారు?",

        kids:
            "పిల్లలు",

        magicalFun:
            "మాయాజాలం & వినోదం",

        adults:
            "పెద్దలు",

        deeperAdventures:
            "లోతైన సాహసాలు",

        search:
            "కథలు లేదా విభాగాలను వెతకండి...",

        youngReaders:
            "👧 చిన్న పాఠకుల కోసం",

        kidsGenres:
            "పిల్లల కథా విభాగాలు",

        kidsGenresDescription:
            "మాయా ప్రపంచాలు, సరదా సాహసాలు, అర్థవంతమైన పాఠాలు మరియు ఊహాశక్తిని పెంచే కథలు.",

        fantasy:
            "ఫాంటసీ",

        fantasyDescription:
            "అద్భుతం, ధైర్యం మరియు ఊహాశక్తితో నిండిన మాయా ప్రపంచాల్లోకి ప్రవేశించండి.",

        magicalAdventures:
            "✨ మాయా సాహసాలు",

        comedy:
            "కామెడీ",

        comedyDescription:
            "మీ ముఖంలో చిరునవ్వు తెప్పించే సరదా పాత్రలు మరియు ఆటపాటల సాహసాలు.",

        funLaughter:
            "😄 సరదా & నవ్వులు",

        moral:
            "నీతి కథలు",

        moralDescription:
            "జీవితానికి అర్థవంతమైన పాఠాలను అందించే హృదయపూర్వక కథలు.",

        learnGrow:
            "💡 నేర్చుకోండి & ఎదగండి",

        animals:
            "జంతువులు",

        animalsDescription:
            "ముద్దైన జంతువులను కలుసుకుని వాటి అద్భుతమైన ప్రపంచంలోని సాహసాలను కనుగొనండి.",

        animalAdventures:
            "🐾 జంతువుల సాహసాలు",

        magic:
            "మాయాజాలం",

        magicDescription:
            "మాయా ప్రదేశాలు, రహస్య శక్తులు మరియు అద్భుతమైన మాయాజాలాన్ని కనుగొనండి.",

        enchantedWorlds:
            "🪄 మాయా ప్రపంచాలు",

        bedtime:
            "నిద్రవేళ",

        bedtimeDescription:
            "రోజు ముగింపులో ప్రశాంతంగా ఉండటానికి సరైన సౌకర్యవంతమైన కథలు.",

        calmMoments:
            "🌙 ప్రశాంతమైన క్షణాలు",

        fairyTales:
            "అద్భుత కథలు",

        fairyTalesDescription:
            "కోటలు, రాజ్యాలు మరియు ఎప్పటికీ నిలిచిపోయే మాయా సాహసాల్లోకి అడుగుపెట్టండి.",

        timelessTales:
            "👑 శాశ్వత కథలు",

        adventure:
            "సాహసం",

        adventureDescription:
            "ప్రతి పేజీ వెనుక ఉత్కంఠభరితమైన ప్రయాణాలు, అన్వేషణలు మరియు సవాళ్లు ఎదురుచూస్తున్నాయి.",

        exploreDiscover:
            "🚀 అన్వేషించండి & కనుగొనండి",


        /* =================================
                 ADULT GENRES
        ================================= */

        adultReaders:
            "🧑 పెద్ద పాఠకుల కోసం",

        adultGenres:
            "పెద్దల కథా విభాగాలు",

        adultGenresDescription:
            "పెద్దల కోసం రూపొందించిన రహస్యాలు, ఉత్కంఠ, ప్రేమ, ఊహాశక్తి మరియు కథలను అన్వేషించండి.",

        thriller:
            "థ్రిల్లర్",

        thrillerDescription:
            "ఉత్కంఠ, టెన్షన్ మరియు ఊహించని మలుపులతో నిండిన వేగవంతమైన కథలు.",

        highTension:
            "⚡ అధిక ఉత్కంఠ",

        horror:
            "భయానక కథలు",

        horrorDescription:
            "చీకటి రహస్యాలు, భయపెట్టే ప్రదేశాలు మరియు మీతో పాటు ఉండిపోయే కథలు.",

        darkMysterious:
            "🌑 చీకటి & రహస్యమైన",

        romance:
            "ప్రేమకథలు",

        romanceDescription:
            "భావోద్వేగ ప్రయాణాలు, సంబంధాలు మరియు అనుబంధం గురించి కథలు.",

        heartfeltStories:
            "❤️ హృదయపూర్వక కథలు",

        adultComedyDescription:
            "తేలికైన కథలు, తెలివైన సందర్భాలు మరియు ఎన్నో నవ్వులు.",

        funWitty:
            "😄 సరదా & చమత్కారం",

        mystery:
            "మిస్టరీ",

        mysteryDescription:
            "ఆధారాలను అనుసరించండి, రహస్యాలను వెలికితీయండి మరియు ఆసక్తికరమైన మిస్టరీలను పరిష్కరించండి.",

        solveUnknown:
            "🔎 తెలియని విషయాన్ని కనుగొనండి",

        scifi:
            "సైన్స్ ఫిక్షన్",

        scifiDescription:
            "భవిష్యత్ ప్రపంచాలు, సాంకేతికత మరియు అద్భుతమైన అవకాశాలను అన్వేషించండి.",

        beyondReality:
            "🌌 వాస్తవికతకు అవతల",

        historical:
            "చారిత్రక",

        historicalDescription:
            "వివిధ కాలాలు మరియు ప్రపంచాల నుండి ప్రేరణ పొందిన కథలతో కాలంలో ప్రయాణించండి.",

        throughAges:
            "🕰️ కాల ప్రయాణం",

        motivational:
            "ప్రేరణాత్మక",

        motivationalDescription:
            "ధైర్యం, ఎదుగుదల, పట్టుదల మరియు కొత్త ప్రారంభాల కథలు.",

        inspireYourself:
            "🌟 మీకు మీరే ప్రేరణ పొందండి",


        /* =================================
                 GENRE PAGE
        ================================= */

        storyCollection:
            "కథల సేకరణ",

        story:
            "కథ",

        pages:
            "పేజీలు",

        originalStory:
            "అసలు కథ",

        readThisStory:
            "ఈ కథను చదవండి",

        storyWorldNotFound:
            "కథల ప్రపంచం కనుగొనబడలేదు",

        genreDoesNotExist:
            "క్షమించండి, ఈ కథా విభాగం లేదు.",

        exploreAllGenres:
            "← అన్ని కథా విభాగాలను అన్వేషించండి",


        /* =================================
                 COMMON
        ================================= */

        chooseStory:
            "మీ కథల ప్రపంచాన్ని ఎంచుకోండి",

        readStory:
            "కథ చదవండి",

        favorite:
            "ఇష్టమైనవి",

        bookmark:
            "బుక్‌మార్క్",

        next:
            "తదుపరి",

        previous:
            "మునుపటి",

        page:
            "పేజీ",

        save:
            "సేవ్ చేయండి",

        cancel:
            "రద్దు చేయండి"

    },


    /* =====================================
                    HINDI
    ===================================== */

    hi: {

        home: "होम",
        stories: "कहानियाँ",
        about: "हमारे बारे में",
        login: "लॉगिन",
        profile: "प्रोफ़ाइल",
        settings: "सेटिंग्स",

        awaits:
            "कहानियों की दुनिया आपका इंतज़ार कर रही है",

        storyBegins:
            "हर कहानी शुरू होती है",

        singleClick:
            "एक क्लिक से।",

        tagline:
            "हर कहानी एक क्लिक से शुरू होती है।",

        heroDescription:
            "कल्पना की दुनिया में कदम रखें, जहाँ हर कहानी आपको एक नई जगह ले जाती है। रोमांच, रहस्य, हंसी, भावनाओं और यादगार किरदारों को एक ही जगह खोजें।",

        exploreGenres:
            "कहानी की श्रेणियाँ देखें",

        multipleGenres:
            "कई कहानी श्रेणियाँ",

        storiesEveryMood:
            "हर मनोदशा के लिए कहानियाँ",

        readAloud:
            "कहानी सुनें",

        listenStories:
            "अपनी कहानियाँ सुनें",

        yourExperience:
            "आपका अनुभव",

        personalizeReading:
            "अपने पढ़ने के अनुभव को व्यक्तिगत बनाएं",

        storiesEveryReader:
            "हर तरह के पाठक के लिए कहानियाँ",

        readerDescription:
            "चाहे आप हंसना चाहते हों, भावनाओं को महसूस करना चाहते हों, कुछ नया खोजना चाहते हों या आश्चर्यचकित होना चाहते हों, आपके लिए एक कहानी इंतज़ार कर रही है।",

        imagine:
            "कल्पना करें",

        imagineDescription:
            "जादुई दुनिया, काल्पनिक रोमांच और अद्भुत संभावनाओं में खो जाएँ।",

        explore:
            "खोजें",

        exploreDescription:
            "रहस्यों, रोमांचक यात्राओं और ऐसी कहानियों का अनुसरण करें जो आपको पन्ने पलटते रहने पर मजबूर करें।",

        feel:
            "महसूस करें",

        feelDescription:
            "अर्थपूर्ण कहानियों, जीवन के सबक और यादगार भावनात्मक पलों का अनुभव करें.",


        /* =================================
                 STORIES PAGE
        ================================= */

        storyLibrary:
            "✨ आपकी कहानी लाइब्रेरी",

        chooseYour:
            "अपनी",

        storyWorld:
            "कहानी की दुनिया चुनें",

        storyWorldDescription:
            "अपनी पढ़ने की दुनिया चुनें, एक श्रेणी खोजें और अपना अगला रोमांच शुरू करें।",

        whoReading:
            "कौन पढ़ रहा है?",

        kids:
            "बच्चे",

        magicalFun:
            "जादुई और मज़ेदार",

        adults:
            "वयस्क",

        deeperAdventures:
            "गहरे रोमांच",

        search:
            "कहानियाँ या श्रेणियाँ खोजें...",

        youngReaders:
            "👧 युवा पाठकों के लिए",

        kidsGenres:
            "बच्चों की कहानी श्रेणियाँ",

        kidsGenresDescription:
            "जादुई दुनिया, मज़ेदार रोमांच, जीवन के सबक और कल्पना को जगाने वाली कहानियाँ।",

        fantasy:
            "फैंटेसी",

        fantasyDescription:
            "आश्चर्य, साहस और कल्पना से भरी जादुई दुनियाओं में प्रवेश करें।",

        magicalAdventures:
            "✨ जादुई रोमांच",

        comedy:
            "कॉमेडी",

        comedyDescription:
            "मज़ेदार किरदार और ऐसी रोमांचक कहानियाँ जो आपके चेहरे पर मुस्कान लाएँ।",

        funLaughter:
            "😄 मज़ा और हंसी",

        moral:
            "नैतिक कहानियाँ",

        moralDescription:
            "दिल को छू लेने वाली कहानियाँ जो जीवन के महत्वपूर्ण सबक देती हैं।",

        learnGrow:
            "💡 सीखें और बढ़ें",

        animals:
            "जानवर",

        animalsDescription:
            "प्यारे जानवरों से मिलें और उनकी अद्भुत दुनिया के रोमांच खोजें।",

        animalAdventures:
            "🐾 जानवरों के रोमांच",

        magic:
            "जादू",

        magicDescription:
            "जादुई स्थानों, रहस्यमय शक्तियों और अद्भुत जादुई अनुभवों की खोज करें।",

        enchantedWorlds:
            "🪄 जादुई दुनिया",

        bedtime:
            "सोने के समय की कहानियाँ",

        bedtimeDescription:
            "दिन के अंत में आराम करने के लिए शांत और सुकून देने वाली कहानियाँ।",

        calmMoments:
            "🌙 शांत पल",

        fairyTales:
            "परियों की कहानियाँ",

        fairyTalesDescription:
            "महलों, राज्यों और कालातीत जादुई रोमांच की दुनिया में कदम रखें।",

        timelessTales:
            "👑 कालातीत कहानियाँ",

        adventure:
            "रोमांच",

        adventureDescription:
            "हर पन्ने के पीछे रोमांचक यात्राएँ, खोज और चुनौतियाँ आपका इंतज़ार कर रही हैं।",

        exploreDiscover:
            "🚀 खोजें और अन्वेषण करें",


        /* =================================
                 ADULT GENRES
        ================================= */

        adultReaders:
            "🧑 वयस्क पाठकों के लिए",

        adultGenres:
            "वयस्क कहानी श्रेणियाँ",

        adultGenresDescription:
            "वयस्क पाठकों के लिए लिखी गई रहस्य, रोमांच, प्रेम, कल्पना और अन्य कहानियों का आनंद लें।",

        thriller:
            "थ्रिलर",

        thrillerDescription:
            "रोमांच, तनाव और अप्रत्याशित मोड़ों से भरी तेज़ गति वाली कहानियाँ।",

        highTension:
            "⚡ उच्च तनाव",

        horror:
            "हॉरर",

        horrorDescription:
            "अंधेरे रहस्य, डरावनी जगहें और ऐसी कहानियाँ जो आपके साथ बनी रहें।",

        darkMysterious:
            "🌑 अंधेरा और रहस्यमय",

        romance:
            "रोमांस",

        romanceDescription:
            "भावनात्मक यात्राएँ, रिश्ते और जुड़ाव के बारे में कहानियाँ।",

        heartfeltStories:
            "❤️ दिल को छू लेने वाली कहानियाँ",

        adultComedyDescription:
            "हल्की-फुल्की कहानियाँ, चतुर पल और ढेर सारी हंसी।",

        funWitty:
            "😄 मज़ेदार और चतुर",

        mystery:
            "मिस्ट्री",

        mysteryDescription:
            "संकेतों का अनुसरण करें, रहस्यों को उजागर करें और दिलचस्प पहेलियों को हल करें।",

        solveUnknown:
            "🔎 अज्ञात को सुलझाएँ",

        scifi:
            "साइंस फिक्शन",

        scifiDescription:
            "भविष्य की दुनिया, तकनीक और असाधारण संभावनाओं का अन्वेषण करें।",

        beyondReality:
            "🌌 वास्तविकता से परे",

        historical:
            "ऐतिहासिक",

        historicalDescription:
            "अलग-अलग युगों और दुनियाओं से प्रेरित कहानियों के साथ समय की यात्रा करें।",

        throughAges:
            "🕰️ युगों के माध्यम से",

        motivational:
            "प्रेरणादायक",

        motivationalDescription:
            "साहस, विकास, दृढ़ संकल्प और नई शुरुआत की कहानियाँ।",

        inspireYourself:
            "🌟 खुद को प्रेरित करें",


        /* =================================
                 GENRE PAGE
        ================================= */

        storyCollection:
            "कहानी संग्रह",

        story:
            "कहानी",

        pages:
            "पृष्ठ",

        originalStory:
            "मूल कहानी",

        readThisStory:
            "यह कहानी पढ़ें",

        storyWorldNotFound:
            "कहानी की दुनिया नहीं मिली",

        genreDoesNotExist:
            "क्षमा करें, यह श्रेणी मौजूद नहीं है.",

        exploreAllGenres:
            "← सभी श्रेणियाँ देखें",


        /* =================================
                 COMMON
        ================================= */

        chooseStory:
            "अपनी कहानी की दुनिया चुनें",

        readStory:
            "कहानी पढ़ें",

        favorite:
            "पसंदीदा",

        bookmark:
            "बुकमार्क",

        next:
            "अगला",

        previous:
            "पिछला",

        page:
            "पृष्ठ",

        save:
            "सहेजें",

        cancel:
            "रद्द करें"

    },


    /* =====================================
                    TAMIL
    ===================================== */

    ta: {

        home:
            "முகப்பு",

        stories:
            "கதைகள்",

        about:
            "எங்களைப் பற்றி",

        login:
            "உள்நுழைவு",

        profile:
            "சுயவிவரம்",

        settings:
            "அமைப்புகள்",

        awaits:
            "கதைகளின் உலகம் உங்களுக்காக காத்திருக்கிறது",

        storyBegins:
            "ஒவ்வொரு கதையும் தொடங்குகிறது",

        singleClick:
            "ஒரே கிளிக்கில்.",

        tagline:
            "ஒவ்வொரு கதையும் ஒரு கிளிக்கில் தொடங்குகிறது.",

        heroDescription:
            "கற்பனை உலகிற்குள் செல்லுங்கள், அங்கு ஒவ்வொரு கதையும் உங்களை ஒரு புதிய இடத்திற்கு அழைத்துச் செல்லும். சாகசங்கள், மர்மங்கள், நகைச்சுவை, உணர்வுகள் மற்றும் மறக்க முடியாத கதாபாத்திரங்களை ஒரே இடத்தில் கண்டறியுங்கள்.",

        exploreGenres:
            "கதை வகைகளை ஆராயுங்கள்",

        multipleGenres:
            "பல கதை வகைகள்",

        storiesEveryMood:
            "ஒவ்வொரு மனநிலைக்கும் கதைகள்",

        readAloud:
            "கதையைக் கேளுங்கள்",

        listenStories:
            "உங்கள் கதைகளைக் கேளுங்கள்",

        yourExperience:
            "உங்கள் அனுபவம்",

        personalizeReading:
            "உங்கள் வாசிப்பு அனுபவத்தை தனிப்பயனாக்குங்கள்",

        storiesEveryReader:
            "ஒவ்வொரு வகையான வாசகருக்கும் கதைகள்",

        readerDescription:
            "நீங்கள் சிரிக்க விரும்பினாலும், உணர விரும்பினாலும், ஆராய விரும்பினாலும் அல்லது ஆச்சரியப்பட விரும்பினாலும், உங்களுக்காக ஒரு கதை காத்திருக்கிறது.",

        imagine:
            "கற்பனை செய்யுங்கள்",

        imagineDescription:
            "மாய உலகங்கள், கற்பனை சாகசங்கள் மற்றும் அற்புதமான வாய்ப்புகளுக்குள் செல்லுங்கள்.",

        explore:
            "ஆராயுங்கள்",

        exploreDescription:
            "மர்மங்கள், சுவாரஸ்யமான பயணங்கள் மற்றும் பக்கங்களைத் தொடர்ந்து படிக்க வைக்கும் கதைகளைப் பின்தொடருங்கள்.",

        feel:
            "உணருங்கள்",

        feelDescription:
            "அர்த்தமுள்ள கதைகள், வாழ்க்கைப் பாடங்கள் மற்றும் மறக்க முடியாத உணர்ச்சிகரமான தருணங்களை அனுபவியுங்கள்.",


        /* =================================
                 STORIES PAGE
        ================================= */

        storyLibrary:
            "✨ உங்கள் கதை நூலகம்",

        chooseYour:
            "உங்கள்",

        storyWorld:
            "கதை உலகத்தைத் தேர்ந்தெடுக்கவும்",

        storyWorldDescription:
            "உங்கள் வாசிப்பு உலகத்தைத் தேர்ந்தெடுத்து, ஒரு வகையைக் கண்டறிந்து, உங்கள் அடுத்த சாகசத்தைத் தொடங்குங்கள்.",

        whoReading:
            "யார் படிக்கிறார்கள்?",

        kids:
            "குழந்தைகள்",

        magicalFun:
            "மாயாஜாலம் & வேடிக்கை",

        adults:
            "பெரியவர்கள்",

        deeperAdventures:
            "ஆழமான சாகசங்கள்",

        search:
            "கதைகள் அல்லது வகைகளைத் தேடுங்கள்...",

        youngReaders:
            "👧 இளம் வாசகர்களுக்காக",

        kidsGenres:
            "குழந்தைகள் கதை வகைகள்",

        kidsGenresDescription:
            "மாய உலகங்கள், வேடிக்கையான சாகசங்கள், வாழ்க்கைப் பாடங்கள் மற்றும் கற்பனையைத் தூண்டும் கதைகள்.",

        fantasy:
            "கற்பனை",

        fantasyDescription:
            "ஆச்சரியம், தைரியம் மற்றும் கற்பனையால் நிறைந்த மாய உலகங்களுக்குள் செல்லுங்கள்.",

        magicalAdventures:
            "✨ மாயாஜால சாகசங்கள்",

        comedy:
            "நகைச்சுவை",

        comedyDescription:
            "உங்களை சிரிக்க வைக்கும் வேடிக்கையான கதாபாத்திரங்கள் மற்றும் விளையாட்டுத்தனமான சாகசங்கள்.",

        funLaughter:
            "😄 வேடிக்கை & சிரிப்பு",

        moral:
            "நீதிக் கதைகள்",

        moralDescription:
            "வாழ்க்கைக்கான அர்த்தமுள்ள பாடங்களைக் கொண்ட மனதைத் தொடும் கதைகள்.",

        learnGrow:
            "💡 கற்றுக்கொண்டு வளருங்கள்",

        animals:
            "விலங்குகள்",

        animalsDescription:
            "அன்பான விலங்குகளைச் சந்தித்து அவற்றின் அற்புதமான உலகங்களிலிருந்து சாகசங்களை கண்டறியுங்கள்.",

        animalAdventures:
            "🐾 விலங்கு சாகசங்கள்",

        magic:
            "மாயாஜாலம்",

        magicDescription:
            "மந்திர இடங்கள், மர்மமான சக்திகள் மற்றும் அற்புதமான மாயாஜால அனுபவங்களைக் கண்டறியுங்கள்.",

        enchantedWorlds:
            "🪄 மந்திர உலகங்கள்",

        bedtime:
            "படுக்கை நேரம்",

        bedtimeDescription:
            "ஓய்வெடுக்கவும் அமைதியாக இருக்கவும் ஏற்ற அமைதியான கதைகள்.",

        calmMoments:
            "🌙 அமைதியான தருணங்கள்",

        fairyTales:
            "தேவதைக் கதைகள்",

        fairyTalesDescription:
            "அரண்மனைகள், ராஜ்யங்கள் மற்றும் காலத்தால் அழியாத மாயாஜால சாகசங்களுக்குள் செல்லுங்கள்.",

        timelessTales:
            "👑 காலத்தால் அழியாத கதைகள்",

        adventure:
            "சாகசம்",

        adventureDescription:
            "ஒவ்வொரு பக்கத்திற்குப் பின்னாலும் உற்சாகமான பயணங்கள், கண்டுபிடிப்புகள் மற்றும் சவால்கள் காத்திருக்கின்றன.",

        exploreDiscover:
            "🚀 ஆராய்ந்து கண்டறியுங்கள்",


        /* =================================
                 ADULT GENRES
        ================================= */

        adultReaders:
            "🧑 பெரிய வாசகர்களுக்காக",

        adultGenres:
            "பெரியவர்களுக்கான கதை வகைகள்",

        adultGenresDescription:
            "மர்மங்கள், சஸ்பென்ஸ், காதல், கற்பனை மற்றும் பெரியவர்களுக்காக எழுதப்பட்ட கதைகளை ஆராயுங்கள்.",

        thriller:
            "த்ரில்லர்",

        thrillerDescription:
            "சஸ்பென்ஸ், பதற்றம் மற்றும் எதிர்பாராத திருப்பங்களால் நிறைந்த வேகமான கதைகள்.",

        highTension:
            "⚡ அதிக பதற்றம்",

        horror:
            "திகில்",

        horrorDescription:
            "இருண்ட மர்மங்கள், பயமுறுத்தும் இடங்கள் மற்றும் உங்களுடன் நீடிக்கும் கதைகள்.",

        darkMysterious:
            "🌑 இருண்ட & மர்மமான",

        romance:
            "காதல்",

        romanceDescription:
            "உணர்ச்சிகரமான பயணங்கள், உறவுகள் மற்றும் இணைப்பைப் பற்றிய கதைகள்.",

        heartfeltStories:
            "❤️ மனதைத் தொடும் கதைகள்",

        adultComedyDescription:
            "இலகுவான கதைகள், புத்திசாலித்தனமான தருணங்கள் மற்றும் நிறைய சிரிப்பு.",

        funWitty:
            "😄 வேடிக்கை & நகைச்சுவை",

        mystery:
            "மர்மம்",

        mysteryDescription:
            "தடயங்களைப் பின்தொடர்ந்து, ரகசியங்களை வெளிப்படுத்தி, சுவாரஸ்யமான மர்மங்களைத் தீர்க்குங்கள்.",

        solveUnknown:
            "🔎 தெரியாததைத் தீர்க்கவும்",

        scifi:
            "அறிவியல் புனைகதை",

        scifiDescription:
            "எதிர்கால உலகங்கள், தொழில்நுட்பம் மற்றும் அற்புதமான சாத்தியங்களை ஆராயுங்கள்.",

        beyondReality:
            "🌌 யதார்த்தத்திற்கு அப்பால்",

        historical:
            "வரலாற்று",

        historicalDescription:
            "வெவ்வேறு காலங்கள் மற்றும் உலகங்களால் ஈர்க்கப்பட்ட கதைகளுடன் காலத்தின் வழியாக பயணம் செய்யுங்கள்.",

        throughAges:
            "🕰️ காலங்களின் வழியாக",

        motivational:
            "ஊக்கமளிக்கும்",

        motivationalDescription:
            "தைரியம், வளர்ச்சி, உறுதி மற்றும் புதிய தொடக்கங்களின் கதைகள்.",

        inspireYourself:
            "🌟 உங்களை ஊக்கப்படுத்துங்கள்",


        /* =================================
                 GENRE PAGE
        ================================= */

        storyCollection:
            "கதை தொகுப்பு",

        story:
            "கதை",

        pages:
            "பக்கங்கள்",

        originalStory:
            "அசல் கதை",

        readThisStory:
            "இந்தக் கதையைப் படிக்கவும்",

        storyWorldNotFound:
            "கதை உலகம் கிடைக்கவில்லை",

        genreDoesNotExist:
            "மன்னிக்கவும், இந்த வகை இல்லை.",

        exploreAllGenres:
            "← அனைத்து வகைகளையும் ஆராயுங்கள்",


        /* =================================
                 COMMON
        ================================= */

        chooseStory:
            "உங்கள் கதை உலகத்தைத் தேர்ந்தெடுக்கவும்",

        readStory:
            "கதையைப் படிக்கவும்",

        favorite:
            "பிடித்தவை",

        bookmark:
            "புத்தகக்குறி",

        next:
            "அடுத்து",

        previous:
            "முந்தைய",

        page:
            "பக்கம்",

        save:
            "சேமிக்கவும்",

        cancel:
            "ரத்து செய்க"

    },


    /* =====================================
                    KANNADA
    ===================================== */

    kn: {

        home:
            "ಮುಖಪುಟ",

        stories:
            "ಕಥೆಗಳು",

        about:
            "ನಮ್ಮ ಬಗ್ಗೆ",

        login:
            "ಲಾಗಿನ್",

        profile:
            "ಪ್ರೊಫೈಲ್",

        settings:
            "ಸೆಟ್ಟಿಂಗ್ಸ್",

        awaits:
            "ಕಥೆಗಳ ಜಗತ್ತು ನಿಮಗಾಗಿ ಕಾಯುತ್ತಿದೆ",

        storyBegins:
            "ಪ್ರತಿ ಕಥೆಯೂ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ",

        singleClick:
            "ಒಂದು ಕ್ಲಿಕ್‌ನಿಂದ.",

        tagline:
            "ಪ್ರತಿ ಕಥೆಯೂ ಒಂದು ಕ್ಲಿಕ್‌ನಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",

        heroDescription:
            "ಕಲ್ಪನೆಯ ಜಗತ್ತಿಗೆ ಕಾಲಿಡಿ, ಅಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಕಥೆಯೂ ನಿಮ್ಮನ್ನು ಹೊಸ ಸ್ಥಳಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ. ಸಾಹಸಗಳು, ರಹಸ್ಯಗಳು, ನಗು, ಭಾವನೆಗಳು ಮತ್ತು ಮರೆಯಲಾಗದ ಪಾತ್ರಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಕಂಡುಕೊಳ್ಳಿ.",

        exploreGenres:
            "ಕಥಾ ವಿಭಾಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",

        multipleGenres:
            "ಹಲವಾರು ಕಥಾ ವಿಭಾಗಗಳು",

        storiesEveryMood:
            "ಪ್ರತಿ ಮನಸ್ಥಿತಿಗೆ ಕಥೆಗಳು",

        readAloud:
            "ಕಥೆ ಕೇಳಿ",

        listenStories:
            "ನಿಮ್ಮ ಕಥೆಗಳನ್ನು ಕೇಳಿ",

        yourExperience:
            "ನಿಮ್ಮ ಅನುಭವ",

        personalizeReading:
            "ನಿಮ್ಮ ಓದುವ ಅನುಭವವನ್ನು ವೈಯಕ್ತಿಕಗೊಳಿಸಿ",

        storiesEveryReader:
            "ಪ್ರತಿಯೊಂದು ರೀತಿಯ ಓದುಗರಿಗಾಗಿ ಕಥೆಗಳು",

        readerDescription:
            "ನೀವು ನಗಲು, ಭಾವನೆಗಳನ್ನು ಅನುಭವಿಸಲು, ಅನ್ವೇಷಿಸಲು ಅಥವಾ ಆಶ್ಚರ್ಯಪಡಲು ಬಯಸಿದರೂ, ನಿಮಗಾಗಿ ಒಂದು ಕಥೆ ಕಾಯುತ್ತಿದೆ.",

        imagine:
            "ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ",

        imagineDescription:
            "ಮಾಯಾ ಲೋಕಗಳು, ಕಲ್ಪನಾ ಸಾಹಸಗಳು ಮತ್ತು ಅದ್ಭುತ ಸಾಧ್ಯತೆಗಳೊಳಗೆ ಪ್ರಯಾಣಿಸಿ.",

        explore:
            "ಅನ್ವೇಷಿಸಿ",

        exploreDescription:
            "ರಹಸ್ಯಗಳು, ರೋಮಾಂಚಕಾರಿ ಪ್ರಯಾಣಗಳು ಮತ್ತು ಪುಟಗಳನ್ನು ತಿರುಗಿಸುತ್ತಲೇ ಓದುವಂತೆ ಮಾಡುವ ಕಥೆಗಳನ್ನು ಅನುಸರಿಸಿ.",

        feel:
            "ಅನುಭವಿಸಿ",

        feelDescription:
            "ಅರ್ಥಪೂರ್ಣ ಕಥೆಗಳು, ಜೀವನ ಪಾಠಗಳು ಮತ್ತು ಮರೆಯಲಾಗದ ಭಾವನಾತ್ಮಕ ಕ್ಷಣಗಳನ್ನು ಅನುಭವಿಸಿ.",


        /* =================================
                 STORIES PAGE
        ================================= */

        storyLibrary:
            "✨ ನಿಮ್ಮ ಕಥಾ ಗ್ರಂಥಾಲಯ",

        chooseYour:
            "ನಿಮ್ಮ",

        storyWorld:
            "ಕಥೆಯ ಜಗತ್ತನ್ನು ಆಯ್ಕೆಮಾಡಿ",

        storyWorldDescription:
            "ನಿಮ್ಮ ಓದುವ ಜಗತ್ತನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಒಂದು ಕಥಾ ವಿಭಾಗವನ್ನು ಕಂಡುಹಿಡಿದು ನಿಮ್ಮ ಮುಂದಿನ ಸಾಹಸವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",

        whoReading:
            "ಯಾರು ಓದುತ್ತಿದ್ದಾರೆ?",

        kids:
            "ಮಕ್ಕಳು",

        magicalFun:
            "ಮಾಯಾಜಾಲ & ಮೋಜು",

        adults:
            "ವಯಸ್ಕರು",

        deeperAdventures:
            "ಆಳವಾದ ಸಾಹಸಗಳು",

        search:
            "ಕಥೆಗಳು ಅಥವಾ ವಿಭಾಗಗಳನ್ನು ಹುಡುಕಿ...",

        youngReaders:
            "👧 ಯುವ ಓದುಗರಿಗಾಗಿ",

        kidsGenres:
            "ಮಕ್ಕಳ ಕಥಾ ವಿಭಾಗಗಳು",

        kidsGenresDescription:
            "ಮಾಯಾ ಲೋಕಗಳು, ಮೋಜಿನ ಸಾಹಸಗಳು, ಅರ್ಥಪೂರ್ಣ ಪಾಠಗಳು ಮತ್ತು ಕಲ್ಪನೆಯನ್ನು ಉತ್ತೇಜಿಸುವ ಕಥೆಗಳು.",

        fantasy:
            "ಕಲ್ಪನಾ ಕಥೆಗಳು",

        fantasyDescription:
            "ಅದ್ಭುತ, ಧೈರ್ಯ ಮತ್ತು ಕಲ್ಪನೆಯಿಂದ ತುಂಬಿರುವ ಮಾಯಾ ಲೋಕಗಳಿಗೆ ಪ್ರವೇಶಿಸಿ.",

        magicalAdventures:
            "✨ ಮಾಯಾ ಸಾಹಸಗಳು",

        comedy:
            "ಹಾಸ್ಯ",

        comedyDescription:
            "ನಿಮ್ಮನ್ನು ನಗಿಸುವ ಮೋಜಿನ ಪಾತ್ರಗಳು ಮತ್ತು ಆಟಪಾಟದ ಸಾಹಸಗಳು.",

        funLaughter:
            "😄 ಮೋಜು & ನಗು",

        moral:
            "ನೀತಿ ಕಥೆಗಳು",

        moralDescription:
            "ಜೀವನಕ್ಕೆ ಅರ್ಥಪೂರ್ಣ ಪಾಠಗಳನ್ನು ನೀಡುವ ಹೃದಯಸ್ಪರ್ಶಿ ಕಥೆಗಳು.",

        learnGrow:
            "💡 ಕಲಿಯಿರಿ & ಬೆಳೆಯಿರಿ",

        animals:
            "ಪ್ರಾಣಿಗಳು",

        animalsDescription:
            "ಮುದ್ದಾದ ಪ್ರಾಣಿಗಳನ್ನು ಭೇಟಿ ಮಾಡಿ ಮತ್ತು ಅವುಗಳ ಅದ್ಭುತ ಜಗತ್ತಿನ ಸಾಹಸಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",

        animalAdventures:
            "🐾 ಪ್ರಾಣಿಗಳ ಸಾಹಸಗಳು",

        magic:
            "ಮಾಯಾಜಾಲ",

        magicDescription:
            "ಮಾಯಾ ಸ್ಥಳಗಳು, ರಹಸ್ಯ ಶಕ್ತಿಗಳು ಮತ್ತು ಅದ್ಭುತ ಮಾಯಾಜಾಲವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",

        enchantedWorlds:
            "🪄 ಮಾಯಾ ಲೋಕಗಳು",

        bedtime:
            "ಮಲಗುವ ಸಮಯ",

        bedtimeDescription:
            "ವಿಶ್ರಾಂತಿ ಪಡೆಯಲು ಸೂಕ್ತವಾದ ಶಾಂತ ಮತ್ತು ಆರಾಮದಾಯಕ ಕಥೆಗಳು.",

        calmMoments:
            "🌙 ಶಾಂತ ಕ್ಷಣಗಳು",

        fairyTales:
            "ಕಾಲ್ಪನಿಕ ಕಥೆಗಳು",

        fairyTalesDescription:
            "ಕೋಟೆಗಳು, ರಾಜ್ಯಗಳು ಮತ್ತು ಕಾಲಾತೀತ ಮಾಯಾ ಸಾಹಸಗಳೊಳಗೆ ಹೆಜ್ಜೆ ಇಡಿ.",

        timelessTales:
            "👑 ಕಾಲಾತೀತ ಕಥೆಗಳು",

        adventure:
            "ಸಾಹಸ",

        adventureDescription:
            "ಪ್ರತಿ ಪುಟದ ಹಿಂದೆ ರೋಮಾಂಚಕಾರಿ ಪ್ರಯಾಣಗಳು, ಕಂಡುಹಿಡಿಯುವಿಕೆಗಳು ಮತ್ತು ಸವಾಲುಗಳು ಕಾಯುತ್ತಿವೆ.",

        exploreDiscover:
            "🚀 ಅನ್ವೇಷಿಸಿ & ಕಂಡುಹಿಡಿಯಿರಿ",


        /* =================================
                 ADULT GENRES
        ================================= */

        adultReaders:
            "🧑 ವಯಸ್ಕ ಓದುಗರಿಗಾಗಿ",

        adultGenres:
            "ವಯಸ್ಕರ ಕಥಾ ವಿಭಾಗಗಳು",

        adultGenresDescription:
            "ವಯಸ್ಕ ಓದುಗರಿಗಾಗಿ ಬರೆಯಲಾದ ರಹಸ್ಯ, ಸಸ್ಪೆನ್ಸ್, ಪ್ರೇಮ, ಕಲ್ಪನೆ ಮತ್ತು ಇತರ ಕಥೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",

        thriller:
            "ಥ್ರಿಲ್ಲರ್",

        thrillerDescription:
            "ಸಸ್ಪೆನ್ಸ್, ಉದ್ವೇಗ ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ತಿರುವುಗಳಿಂದ ತುಂಬಿದ ವೇಗದ ಕಥೆಗಳು.",

        highTension:
            "⚡ ಹೆಚ್ಚಿನ ಉದ್ವೇಗ",

        horror:
            "ಭಯಾನಕ",

        horrorDescription:
            "ಕತ್ತಲೆಯ ರಹಸ್ಯಗಳು, ಭಯಾನಕ ಸ್ಥಳಗಳು ಮತ್ತು ನಿಮ್ಮೊಂದಿಗೆ ಉಳಿಯುವ ಕಥೆಗಳು.",

        darkMysterious:
            "🌑 ಕತ್ತಲೆ & ರಹಸ್ಯಮಯ",

        romance:
            "ಪ್ರೇಮಕಥೆಗಳು",

        romanceDescription:
            "ಭಾವನಾತ್ಮಕ ಪ್ರಯಾಣಗಳು, ಸಂಬಂಧಗಳು ಮತ್ತು ಸಂಪರ್ಕದ ಕುರಿತಾದ ಕಥೆಗಳು.",

        heartfeltStories:
            "❤️ ಹೃದಯಸ್ಪರ್ಶಿ ಕಥೆಗಳು",

        adultComedyDescription:
            "ಹಗುರವಾದ ಕಥೆಗಳು, ಚತುರ ಕ್ಷಣಗಳು ಮತ್ತು ಸಾಕಷ್ಟು ನಗು.",

        funWitty:
            "😄 ಮೋಜು & ಚತುರತೆ",

        mystery:
            "ರಹಸ್ಯ",

        mysteryDescription:
            "ಸುಳಿವುಗಳನ್ನು ಅನುಸರಿಸಿ, ರಹಸ್ಯಗಳನ್ನು ಬಯಲಿಗೆಳೆದು ಆಸಕ್ತಿದಾಯಕ ರಹಸ್ಯಗಳನ್ನು ಪರಿಹರಿಸಿ.",

        solveUnknown:
            "🔎 ತಿಳಿಯದದ್ದನ್ನು ಪರಿಹರಿಸಿ",

        scifi:
            "ವಿಜ್ಞಾನ ಕಾಲ್ಪನಿಕ",

        scifiDescription:
            "ಭವಿಷ್ಯದ ಲೋಕಗಳು, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಅಸಾಧಾರಣ ಸಾಧ್ಯತೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",

        beyondReality:
            "🌌 ವಾಸ್ತವದ ಆಚೆಗೆ",

        historical:
            "ಐತಿಹಾಸಿಕ",

        historicalDescription:
            "ವಿವಿಧ ಯುಗಗಳು ಮತ್ತು ಲೋಕಗಳಿಂದ ಪ್ರೇರಿತವಾದ ಕಥೆಗಳೊಂದಿಗೆ ಕಾಲದ ಮೂಲಕ ಪ್ರಯಾಣಿಸಿ.",

        throughAges:
            "🕰️ ಯುಗಗಳ ಮೂಲಕ",

        motivational:
            "ಪ್ರೇರಣಾದಾಯಕ",

        motivationalDescription:
            "ಧೈರ್ಯ, ಬೆಳವಣಿಗೆ, ದೃಢನಿಶ್ಚಯ ಮತ್ತು ಹೊಸ ಆರಂಭಗಳ ಕಥೆಗಳು.",

        inspireYourself:
            "🌟 ನಿಮ್ಮನ್ನು ನೀವು ಪ್ರೇರೇಪಿಸಿಕೊಳ್ಳಿ",


        /* =================================
                 GENRE PAGE
        ================================= */

        storyCollection:
            "ಕಥಾ ಸಂಗ್ರಹ",

        story:
            "ಕಥೆ",

        pages:
            "ಪುಟಗಳು",

        originalStory:
            "ಮೂಲ ಕಥೆ",

        readThisStory:
            "ಈ ಕಥೆಯನ್ನು ಓದಿ",

        storyWorldNotFound:
            "ಕಥೆಯ ಜಗತ್ತು ಕಂಡುಬಂದಿಲ್ಲ",

        genreDoesNotExist:
            "ಕ್ಷಮಿಸಿ, ಈ ವಿಭಾಗವು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.",

        exploreAllGenres:
            "← ಎಲ್ಲಾ ವಿಭಾಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",


        /* =================================
                 COMMON
        ================================= */

        chooseStory:
            "ನಿಮ್ಮ ಕಥೆಯ ಜಗತ್ತನ್ನು ಆಯ್ಕೆಮಾಡಿ",

        readStory:
            "ಕಥೆ ಓದಿ",

        favorite:
            "ಮೆಚ್ಚಿನವು",

        bookmark:
            "ಬುಕ್‌ಮಾರ್ಕ್",

        next:
            "ಮುಂದೆ",

        previous:
            "ಹಿಂದೆ",

        page:
            "ಪುಟ",

        save:
            "ಉಳಿಸಿ",

        cancel:
            "ರದ್ದುಮಾಡಿ"

    }

};


/* =========================================
       GET TRANSLATION
========================================= */

function getTranslation(key) {

    const language =
        translations[selectedLanguage];

    if (
        language &&
        language[key]
    ) {

        return language[key];

    }

    return translations.en[key] || key;

}


/* =========================================
       APPLY LANGUAGE
========================================= */

function applyLanguage() {

    /* Translate normal text */

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(element => {

        const key =
            element.getAttribute(
                "data-i18n"
            );

        const translatedText =
            getTranslation(key);


        if (translatedText) {

            element.textContent =
                translatedText;

        }

    });


    /* Translate placeholders */

    const placeholderElements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    placeholderElements.forEach(element => {

        const key =
            element.getAttribute(
                "data-i18n-placeholder"
            );

        const translatedText =
            getTranslation(key);


        if (translatedText) {

            element.placeholder =
                translatedText;

        }

    });


    /* Update HTML language */

    document.documentElement.lang =
        selectedLanguage;

}


/* =========================================
       START LANGUAGE SYSTEM
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyLanguage();

    }
);


/* =========================================
       MAKE FUNCTIONS AVAILABLE
========================================= */

window.getTranslation =
    getTranslation;

window.applyLanguage =
    applyLanguage;
/* =========================================
       STORY CONTENT TRANSLATION
========================================= */

async function translateStoryText(text, targetLanguage) {

    // English stories must remain unchanged
    if (!text || targetLanguage === "en") {
        return text;
    }

    try {

        const url =
            "https://translate.googleapis.com/translate_a/single" +
            "?client=gtx" +
            "&sl=en" +
            "&tl=" + encodeURIComponent(targetLanguage) +
            "&dt=t" +
            "&q=" + encodeURIComponent(text);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Translation request failed");
        }

        const data = await response.json();

        if (!data || !data[0]) {
            return text;
        }

        return data[0]
            .map(part => part[0])
            .join("");

    } catch (error) {

        console.error(
            "Story translation error:",
            error
        );

        // If translation fails,
        // show the original English text
        return text;
    }
}


/* =========================================
       TRANSLATE STORY HTML
========================================= */

async function translateStoryHTML(
    html,
    targetLanguage
) {

    // English = original story exactly as it is
    if (!html || targetLanguage === "en") {
        return html;
    }

    const container =
        document.createElement("div");

    container.innerHTML = html;


    /*
       IMPORTANT:

       Translate each COMPLETE paragraph
       instead of translating individual
       text fragments.

       This gives the translator the full
       sentence/story context and produces
       much more natural Telugu, Hindi,
       Tamil and Kannada sentences.
    */

    const paragraphs =
        Array.from(
            container.querySelectorAll("p")
        );


    /* =====================================
           TRANSLATE PARAGRAPHS
    ===================================== */

    if (paragraphs.length > 0) {

        for (const paragraph of paragraphs) {

            const originalText =
                paragraph.textContent.trim();

            // Ignore empty paragraphs
            if (!originalText) {
                continue;
            }

            const translatedText =
                await translateStoryText(
                    originalText,
                    targetLanguage
                );

            paragraph.textContent =
                translatedText;
        }

    } else {

        /*
           Fallback in case the story does
           not contain <p> elements.
        */

        const originalText =
            container.textContent.trim();

        if (originalText) {

            const translatedText =
                await translateStoryText(
                    originalText,
                    targetLanguage
                );

            container.textContent =
                translatedText;
        }
    }


    return container.innerHTML;
}


/* =========================================
       TRANSLATE STORY TITLE
========================================= */

async function translateStoryTitle(
    title,
    targetLanguage
) {

    // English title stays unchanged
    if (!title || targetLanguage === "en") {
        return title;
    }

    return await translateStoryText(
        title,
        targetLanguage
    );
}


/* =========================================
       MAKE STORY FUNCTIONS AVAILABLE
========================================= */

window.translateStoryText =
    translateStoryText;

window.translateStoryHTML =
    translateStoryHTML;

window.translateStoryTitle =
    translateStoryTitle;