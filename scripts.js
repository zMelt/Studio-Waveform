/**
 * STUDIO WAVEFORM - Creator's Toolkit Catalog
 * Snap Engineering Academy Project - Stage 2
 * 
 * This catalog helps music producers, DJs, and content creators find
 * the right tools for their workflow. Features include:
 * - Filtering by type, category, skill level, budget, and artist
 * - Searching across all fields
 * - Adding, editing, and removing tools
 * - Data persistence using localStorage
 * 
 * Data Structure: Array of Objects with nested arrays for tags
 * Operations: filter(), sort(), map(), push(), splice(), findIndex()
 */

// ============================================
// PART 1: DATA CATALOG (Array of Objects)
// ============================================

let gearCatalog = [
    // ==================== MUSIC SOFTWARE (DAWs) ====================
    {
        id: 1,
        name: "Ableton Live 11 Suite",
        category: "DAW",
        type: "Software",
        creator: "Ableton",
        description: "My primary DAW for EDM production and live performance. Session view is unmatched for sketching ideas and performing DJ sets with live stems.",
        visualPotential: "CV tools for modular visuals, perfect for syncing lights at small shows",
        skillLevel: "Intermediate",
        priceTier: "$$$$",
        priceNumeric: 749,
        artistsUsed: ["Skrillex", "Deadmau5", "Flume", "Disclosure", "Martin Garrix"],
        personalNote: "My go-to for detailed parameter control and warping audio",
        tags: ["EDM", "Live Performance", "Sound Design", "Warping"],
        imageUrl: "https://images.pexels.com/photos/4088041/pexels-photo-4088041.jpeg"
    },
    {
        id: 2,
        name: "Logic Pro X",
        category: "DAW",
        type: "Software",
        creator: "Apple",
        description: "Seamless integration with Apple ecosystem and Universal Audio hardware. Incredible stock plugins and Alchemy synth.",
        visualPotential: "Final Cut Pro roundtrip workflow for scoring videos",
        skillLevel: "Intermediate",
        priceTier: "$$",
        priceNumeric: 199,
        artistsUsed: ["Disclosure", "Kygo", "Calvin Harris", "FINNEAS", "Billie Eilish"],
        personalNote: "My choice when working on MacBook with UA Apollo interface",
        tags: ["Apple Ecosystem", "Scoring", "Universal Audio", "Songwriting"],
        imageUrl: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
    },
    {
        id: 3,
        name: "Pro Tools Studio",
        category: "DAW",
        type: "Software",
        creator: "Avid",
        description: "Industry standard for audio engineering, mixing, and mastering. Unparalleled editing precision for recorded audio.",
        visualPotential: "Surround sound mixing for film and immersive audio installations",
        skillLevel: "Advanced",
        priceTier: "$$$$",
        priceNumeric: 599,
        artistsUsed: ["Dr. Dre", "Rick Rubin", "Serban Ghenea", "Finneas"],
        personalNote: "I switch to Pro Tools for detailed vocal editing and stem mastering",
        tags: ["Audio Engineering", "Mixing", "Mastering", "Studio Standard"],
        imageUrl: "https://images.pexels.com/photos/8190803/pexels-photo-8190803.jpeg"
    },
    {
        id: 4,
        name: "FL Studio 21",
        category: "DAW",
        type: "Software",
        creator: "Image-Line",
        description: "Lifetime free updates. Famous for its pattern-based workflow and piano roll. Huge in the hip-hop and EDM trap scenes.",
        visualPotential: "Vectorial UI looks clean in screen recordings",
        skillLevel: "Beginner-Friendly",
        priceTier: "$$",
        priceNumeric: 199,
        artistsUsed: ["Martin Garrix", "Avicii", "Metro Boomin", "Porter Robinson", "Madeon"],
        personalNote: "Incredible piano roll - many producers start here",
        tags: ["Pattern-Based", "Lifetime Updates", "Trap", "Beginner"],
        imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
    },

    // ==================== PLUGINS / DIGITAL INSTRUMENTS ====================
    {
        id: 5,
        name: "Serum",
        category: "VST Synth",
        type: "Software",
        creator: "Xfer Records",
        description: "The wavetable synth that defined modern EDM. Visual feedback makes sound design intuitive and addictive.",
        visualPotential: "Waveform animations are content gold for social media tutorials",
        skillLevel: "Intermediate",
        priceTier: "$$$",
        priceNumeric: 189,
        artistsUsed: ["Martin Garrix", "Virtual Riot", "Au5", "Illenium", "Skrillex", "Marshmello"],
        personalNote: "My desert island synth. I use it on literally every track",
        tags: ["Sound Design", "Bass Music", "Wavetable", "EDM Essential"],
        imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
    },
    {
        id: 6,
        name: "Vital",
        category: "VST Synth",
        type: "Software",
        creator: "Vital Audio",
        description: "Free (with paid tiers) spectral warping wavetable synth. Democratizing professional sound design.",
        visualPotential: "Stunning animated UI—screen recordings look incredible on YouTube",
        skillLevel: "Beginner-Friendly",
        priceTier: "Free",
        priceNumeric: 0,
        artistsUsed: ["Subtronics", "Eliminate", "Bishu", "Tape B"],
        personalNote: "I recommend this to everyone starting out. It rivals $200 synths",
        tags: ["Sound Design", "Free", "Spectral", "Beginner"],
        imageUrl: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg"
    },
    {
        id: 7,
        name: "OTT (Xfer Records)",
        category: "Effect Plugin",
        type: "Software",
        creator: "Xfer Records",
        description: "Free aggressive multiband upward/downward compressor. The 'modern EDM sound' in a plugin.",
        visualPotential: "Makes synths and basses cut through phone speakers - essential for social media clips",
        skillLevel: "All Levels",
        priceTier: "Free",
        priceNumeric: 0,
        artistsUsed: ["Virtual Riot", "Barely Alive", "Zomboy", "Every EDM Producer"],
        personalNote: "I put this on EVERY synth bus. It's magic",
        tags: ["Compression", "Free", "EDM Essential", "Multiband"],
        imageUrl: "https://images.pexels.com/photos/164836/pexels-photo-164836.jpeg"
    },
    {
        id: 8,
        name: "FabFilter Pro-Q 3",
        category: "Effect Plugin",
        type: "Software",
        creator: "FabFilter",
        description: "Widely considered the best surgical EQ for cleaning up muddy mixdowns. Dynamic EQ bands and spectrum grab.",
        visualPotential: "The spectrum analyzer is gorgeous and helps explain EQ to viewers",
        skillLevel: "Intermediate",
        priceTier: "$$$",
        priceNumeric: 169,
        artistsUsed: ["Skrillex", "Flume", "Disclosure", "Deadmau5", "Dom Dolla"],
        personalNote: "Worth every penny. My mixes improved overnight",
        tags: ["EQ", "Mixing", "Dynamic EQ", "Professional"],
        imageUrl: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg"
    },
    {
        id: 9,
        name: "Valhalla VintageVerb",
        category: "Effect Plugin",
        type: "Software",
        creator: "Valhalla DSP",
        description: "Lush, algorithmic reverbs inspired by classic hardware units. The 80s and Concert Hall algorithms are magical.",
        visualPotential: "Creates the space and depth you hear in massive festival breakdowns",
        skillLevel: "All Levels",
        priceTier: "$",
        priceNumeric: 50,
        artistsUsed: ["Flume", "Four Tet", "Bonobo", "Jon Hopkins"],
        personalNote: "$50 for the best reverb plugin ever made. Non-negotiable purchase",
        tags: ["Reverb", "Mixing", "Space", "Affordable"],
        imageUrl: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg"
    },
    {
        id: 10,
        name: "Valhalla Supermassive",
        category: "Effect Plugin",
        type: "Software",
        creator: "Valhalla DSP",
        description: "Completely FREE delay/reverb plugin for massive atmospheric sounds. Perfect for intros and breakdowns.",
        visualPotential: "Creates ethereal textures that elevate any production video",
        skillLevel: "All Levels",
        priceTier: "Free",
        priceNumeric: 0,
        artistsUsed: ["Tape B", "Of The Trees", "Supertask", "Tipper"],
        personalNote: "I use this on every ambient intro. It's FREE!",
        tags: ["Reverb", "Delay", "Free", "Atmospheric"],
        imageUrl: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg"
    },
    {
        id: 11,
        name: "Kickstart 2",
        category: "Effect Plugin",
        type: "Software",
        creator: "Cableguys",
        description: "The go-to plugin for quick, professional sidechaining. Draw your own curves or use presets.",
        visualPotential: "Visual LFO display is great for explaining sidechain to beginners",
        skillLevel: "Beginner-Friendly",
        priceTier: "$",
        priceNumeric: 16,
        artistsUsed: ["Nicky Romero", "Afrojack", "Dannic", "EDM Producers"],
        personalNote: "So much faster than setting up a compressor for sidechain",
        tags: ["Sidechain", "EDM Essential", "Volume Shaping", "Affordable"],
        imageUrl: "https://images.pexels.com/photos/164836/pexels-photo-164836.jpeg"
    },
    {
        id: 12,
        name: "iZotope Ozone 11",
        category: "Effect Plugin",
        type: "Software",
        creator: "iZotope",
        description: "The standard suite for mastering EDM tracks. AI-powered Master Assistant gets you 80% there instantly.",
        visualPotential: "The visual feedback makes mastering less intimidating for content creators",
        skillLevel: "Advanced",
        priceTier: "$$$$",
        priceNumeric: 249,
        artistsUsed: ["Alison Wonderland", "REZZ", "Griz", "Zeds Dead"],
        personalNote: "My mastering chain lives in Ozone. Imager is incredible for width",
        tags: ["Mastering", "AI-Assisted", "Professional", "Imaging"],
        imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
    },
    {
        id: 13,
        name: "ShaperBox 3",
        category: "Effect Plugin",
        type: "Software",
        creator: "Cableguys",
        description: "Excellent for volume shaping, filtering, and creative effects. Time, Volume, Pan, Width, Filter, and more.",
        visualPotential: "The visual LFOs are incredibly satisfying to watch in tutorials",
        skillLevel: "Intermediate",
        priceTier: "$$",
        priceNumeric: 89,
        artistsUsed: ["Virtual Riot", "Au5", "Mr. Bill", "Flume"],
        personalNote: "TimeShaper alone is worth the price for stutter effects",
        tags: ["Volume Shaping", "Creative FX", "Filter", "Stutter"],
        imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
    },
    {
        id: 14,
        name: "Arturia Analog Lab V",
        category: "VST Instrument Suite",
        type: "Software",
        creator: "Arturia",
        description: "Massive library of 2000+ presets from Arturia's entire V Collection. Instant inspiration.",
        visualPotential: "Beautiful skeuomorphic interfaces look great in studio tour videos",
        skillLevel: "Beginner-Friendly",
        priceTier: "$$",
        priceNumeric: 199,
        artistsUsed: ["J. Cole", "Tame Impala", "Hans Zimmer", "Disclosure"],
        personalNote: "My preset-surfing happy place when I need quick inspiration",
        tags: ["Presets", "Analog", "Inspiration", "Keys"],
        imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
    },

    // ==================== HARDWARE / INSTRUMENTS ====================
    {
        id: 15,
        name: "Ableton Push 3",
        category: "MIDI Controller",
        type: "Hardware",
        creator: "Ableton",
        description: "Standalone or controller mode. Tactile control with 64 expressive MPE pads.",
        visualPotential: "The pad lighting matrix is mesmerizing in performance videos",
        skillLevel: "Intermediate",
        priceTier: "$$$$$",
        priceNumeric: 1999,
        artistsUsed: ["Madeon", "FKJ", "Stimming", "Nosaj Thing"],
        personalNote: "My dream upgrade. Standalone mode for live sets is game-changing",
        tags: ["Ableton", "Live Performance", "MPE", "Standalone"],
        imageUrl: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg"
    },
    {
        id: 16,
        name: "Arturia KeyStep 37",
        category: "MIDI Controller",
        type: "Hardware",
        creator: "Arturia",
        description: "Compact controller with CV/Gate for modular gear, plus arpeggiator and sequencer.",
        visualPotential: "Perfect travel companion for sketching melodies on the go",
        skillLevel: "All Levels",
        priceTier: "$$",
        priceNumeric: 199,
        artistsUsed: ["Tape B", "Of The Trees", "CharlestheFirst"],
        personalNote: "Lives on my desk. The arpeggiator is stupidly fun for techno",
        tags: ["Portable", "CV/Gate", "Sequencer", "Affordable"],
        imageUrl: "https://images.pexels.com/photos/2091374/pexels-photo-2091374.jpeg"
    },
    {
        id: 17,
        name: "Focusrite Scarlett 2i2",
        category: "Audio Interface",
        type: "Hardware",
        creator: "Focusrite",
        description: "The reliable entry point for recording vocals, guitar, or hardware synths.",
        visualPotential: "The gain halos look clean in overhead studio shots",
        skillLevel: "Beginner-Friendly",
        priceTier: "$$",
        priceNumeric: 179,
        artistsUsed: ["Every Bedroom Producer", "Billie Eilish (early days)"],
        personalNote: "This is my daily driver interface. Rock solid, never lets me down",
        tags: ["Recording", "Beginner", "Essential", "Vocals"],
        imageUrl: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg"
    },
    {
        id: 18,
        name: "Fender Player Stratocaster",
        category: "Instrument",
        type: "Hardware",
        creator: "Fender",
        description: "The most versatile electric guitar ever made. Perfect for adding organic texture to electronic tracks.",
        visualPotential: "Adds visual interest to studio photos and performance videos",
        skillLevel: "All Levels",
        priceTier: "$$$",
        priceNumeric: 799,
        artistsUsed: ["John Mayer", "Cory Wong", "Ed O'Brien (Radiohead)", "Nile Rodgers", "Flume"],
        personalNote: "My go-to for adding human feel and texture to tracks",
        tags: ["Guitar", "Organic", "Texture", "Versatile"],
        imageUrl: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg"
    },

    // ==================== DJ EQUIPMENT - CONTROLLERS ====================
    {
        id: 19,
        name: "Pioneer DDJ-SX3",
        category: "DJ Controller",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "4-channel Serato DJ Pro controller. RGB performance pads and standalone mixer capability.",
        visualPotential: "RGB pad FX look incredible in top-down DJ set recordings",
        skillLevel: "Intermediate",
        priceTier: "$$$",
        priceNumeric: 1099,
        artistsUsed: ["Mobile DJs", "Club Residents", "Dom Dolla (early controller)"],
        personalNote: "My current controller. Serato Flip and Pitch Play are my secret weapons",
        tags: ["Serato", "4-Channel", "RGB Pads", "Professional"],
        imageUrl: "https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg"
    },
    {
        id: 20,
        name: "Pioneer DDJ-FLX4",
        category: "DJ Controller",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "Entry-level controller for Rekordbox and Serato. Smart Fader makes mixing accessible.",
        visualPotential: "Perfect for streaming DJ sets from bedroom to Twitch/YouTube",
        skillLevel: "Beginner-Friendly",
        priceTier: "$",
        priceNumeric: 299,
        artistsUsed: ["James Hype (started on controller)", "Beginner DJs"],
        personalNote: "What I recommend to friends who want to start DJing tomorrow",
        tags: ["Beginner", "Rekordbox", "Serato", "Affordable", "Streaming"],
        imageUrl: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg"
    },
    {
        id: 21,
        name: "Pioneer DDJ-FLX6",
        category: "DJ Controller",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "4-channel controller with Merge FX for dramatic transitions. Full-size jog wheels.",
        visualPotential: "Merge FX knob is literally designed for content creators—dramatic drops on camera",
        skillLevel: "Intermediate",
        priceTier: "$$",
        priceNumeric: 649,
        artistsUsed: ["Content Creators", "Mobile DJs", "Crossfader"],
        personalNote: "The Merge FX is gimmicky but genuinely fun for YouTube mixes",
        tags: ["4-Channel", "Content Creation", "Merge FX", "Visual"],
        imageUrl: "https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg"
    },
    {
        id: 22,
        name: "Pioneer DDJ-FLX10",
        category: "DJ Controller",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "Flagship controller with full-size mechanical jog wheels and on-jog display.",
        visualPotential: "Jog wheel displays show waveform info—incredible for camera close-ups",
        skillLevel: "Advanced",
        priceTier: "$$$$",
        priceNumeric: 1599,
        artistsUsed: ["James Hype (uses for live streams)", "Club DJs", "Pro Hybrid DJs"],
        personalNote: "The sweet spot between FLX6 fun and XZ pro features",
        tags: ["Flagship", "Jog Displays", "4-Channel", "Pro Hybrid"],
        imageUrl: "https://images.pexels.com/photos/2258415/pexels-photo-2258415.jpeg"
    },

    // ==================== DJ EQUIPMENT - STANDALONE/MIXERS ====================
    {
        id: 23,
        name: "Pioneer XDJ-XZ",
        category: "DJ System",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "All-in-one standalone 4-channel system. Club-standard layout with full-size CDJ jog wheels.",
        visualPotential: "This is what you see in every Boiler Room set—the visual of pro DJing",
        skillLevel: "Advanced",
        priceTier: "$$$$$",
        priceNumeric: 2499,
        artistsUsed: ["James Hype", "Chris Lake", "Dom Dolla", "Fisher", "Sonny Fodera"],
        personalNote: "My upgrade goal. No laptop needed, just USBs and pure performance",
        tags: ["Standalone", "Club Standard", "4-Channel", "Pro"],
        imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
    },
    {
        id: 24,
        name: "Pioneer XDJ-RX3",
        category: "DJ System",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "2-channel standalone system with massive 10.1-inch touchscreen.",
        visualPotential: "That huge screen makes navigation so smooth—great for clean video setups",
        skillLevel: "Intermediate",
        priceTier: "$$$$",
        priceNumeric: 2099,
        artistsUsed: ["Wedding DJs", "Bar Residents", "Home Studio Pros", "Alison Wonderland (home setup)"],
        personalNote: "If I didn't need 4 channels, this would be my perfect setup",
        tags: ["Standalone", "2-Channel", "Touchscreen", "Compact Pro"],
        imageUrl: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
    },
    {
        id: 25,
        name: "Pioneer CDJ-3000",
        category: "Media Player",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "The industry standard media player. 9-inch touchscreen, 8 hot cues, stacked waveform.",
        visualPotential: "This is what you see on every festival mainstage—the visual of professional DJing",
        skillLevel: "Professional",
        priceTier: "$$$$$",
        priceNumeric: 2599,
        artistsUsed: ["Martin Garrix", "Skrillex", "Dom Dolla", "Every Festival Headliner"],
        personalNote: "The benchmark. One day I'll own a pair with a DJM-V10",
        tags: ["Club Standard", "Festival", "Professional", "Industry"],
        imageUrl: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
    },
    {
        id: 26,
        name: "Pioneer DJM-A9",
        category: "DJ Mixer",
        type: "Hardware",
        creator: "Pioneer DJ",
        description: "4-channel club mixer with studio-grade 96kHz sound. Center Lock cue system.",
        visualPotential: "The new color FX display is gorgeous on camera",
        skillLevel: "Professional",
        priceTier: "$$$$$",
        priceNumeric: 2699,
        artistsUsed: ["James Hype", "Chris Lake", "Fisher", "Club Installations"],
        personalNote: "Sound quality upgrade from the 900 is noticeable on big systems",
        tags: ["Club Standard", "4-Channel", "Sound Quality", "FX"],
        imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
    },

    // ==================== VIDEOGRAPHY SOFTWARE ====================
    {
        id: 27,
        name: "Final Cut Pro",
        category: "Video Editing",
        type: "Software",
        creator: "Apple",
        description: "Magnetic timeline makes editing DJ sets and YouTube content incredibly fast. Optimized for Apple Silicon.",
        visualPotential: "My primary tool for editing festival recap videos and DJ set recordings",
        skillLevel: "Intermediate",
        priceTier: "$$$",
        priceNumeric: 299,
        artistsUsed: ["MKBHD", "Peter McKinnon", "Countless YouTubers"],
        personalNote: "Multicam editing for mixing camera angles of a DJ set is unmatched",
        tags: ["Video Editing", "Apple", "Multicam", "Content Creation"],
        imageUrl: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
    },
    {
        id: 28,
        name: "Adobe Premiere Pro",
        category: "Video Editing",
        type: "Software",
        creator: "Adobe",
        description: "Industry-standard video editor. Deep integration with After Effects via Dynamic Link.",
        visualPotential: "Essential for syncing audio-reactive visuals to my original tracks",
        skillLevel: "Advanced",
        priceTier: "$$$",
        priceNumeric: 263,
        artistsUsed: ["Hollywood Editors", "YouTube Pros", "Every Post House"],
        personalNote: "My choice when I need heavy motion graphics integration",
        tags: ["Video Editing", "Industry Standard", "Motion Graphics", "Dynamic Link"],
        imageUrl: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg"
    },
    {
        id: 29,
        name: "Adobe After Effects",
        category: "Motion Graphics",
        type: "Software",
        creator: "Adobe",
        description: "Create audio-reactive visuals, lyric videos, and festival-style motion graphics.",
        visualPotential: "How you make YouTube DJ sets look like Boiler Room or Cercle videos",
        skillLevel: "Advanced",
        priceTier: "$$$",
        priceNumeric: 263,
        artistsUsed: ["Afterlife Visuals Team", "Eric Prydz HOLO Team", "EDC Stage Designers"],
        personalNote: "I use templates and audio keyframes to create visualizers for my tracks",
        tags: ["Motion Graphics", "Visuals", "Audio-Reactive", "Festival Visuals"],
        imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
    },
    {
        id: 30,
        name: "Adobe Photoshop",
        category: "Image Editing",
        type: "Software",
        creator: "Adobe",
        description: "Create cover art, social media assets, and festival lineup mockups.",
        visualPotential: "Essential for professional track artwork and YouTube thumbnails",
        skillLevel: "All Levels",
        priceTier: "$$$",
        priceNumeric: 263,
        artistsUsed: ["Every Graphic Designer", "Album Cover Artists"],
        personalNote: "I design all my track artwork and social templates here",
        tags: ["Graphics", "Thumbnails", "Album Art", "Visual Identity"],
        imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
        id: 31,
        name: "Adobe Illustrator",
        category: "Vector Graphics",
        type: "Software",
        creator: "Adobe",
        description: "Create logos, vector art, and scalable festival-style typography.",
        visualPotential: "Perfect for designing DJ logos that scale infinitely",
        skillLevel: "Intermediate",
        priceTier: "$$$",
        priceNumeric: 263,
        artistsUsed: ["Logo Designers", "Typography Artists", "Festival Brand Designers"],
        personalNote: "I use this for designing my artist logo and vector assets",
        tags: ["Vector", "Logo Design", "Typography", "Scalable"],
        imageUrl: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg"
    },
    {
        id: 32,
        name: "Adobe Express",
        category: "Content Creation",
        type: "Software",
        creator: "Adobe",
        description: "Quick social media templates for Instagram stories and Snapchat content.",
        visualPotential: "Rapid content creation for promoting new tracks and shows",
        skillLevel: "Beginner-Friendly",
        priceTier: "Free",
        priceNumeric: 0,
        artistsUsed: ["Social Media Managers", "Quick-Turn Content Creators"],
        personalNote: "My go-to for quick Instagram stories announcing new music",
        tags: ["Social Media", "Templates", "Quick", "Free", "Mobile"],
        imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
    },
    {
        id: 33,
        name: "TouchDesigner",
        category: "Visual Programming",
        type: "Software",
        creator: "Derivative",
        description: "Node-based real-time visual programming for custom audio-reactive visuals.",
        visualPotential: "Export to Snapchat Lens Studio for custom AR filters",
        skillLevel: "Advanced",
        priceTier: "Free",
        priceNumeric: 0,
        artistsUsed: ["EDC Mainstage", "Afterlife (Tale of Us)", "Eric Prydz HOLO", "Snap AR Team"],
        personalNote: "Currently learning this. Goal is custom visuals for my own live sets",
        tags: ["Visuals", "Real-Time", "AR", "Festival Visuals", "Free"],
        imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
    },

    // ==================== VIDEOGRAPHY HARDWARE ====================
    {
        id: 34,
        name: "GoPro HERO11 Black",
        category: "Camera",
        type: "Hardware",
        creator: "GoPro",
        description: "Rugged action camera with HyperSmooth 5.0 stabilization. Shoots 5.3K60 and 4K120.",
        visualPotential: "My primary POV camera for DJ sets and festival adventures",
        skillLevel: "All Levels",
        priceTier: "$$$",
        priceNumeric: 349,
        artistsUsed: ["Festival Vloggers", "Adventure Content Creators", "DJ Tour Documenters"],
        personalNote: "My festival essential. The stabilization makes walking shots buttery smooth",
        tags: ["Action Cam", "POV", "Stabilization", "Festival"],
        imageUrl: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },
    {
        id: 35,
        name: "iPhone 14 Pro",
        category: "Camera",
        type: "Hardware",
        creator: "Apple",
        description: "4K 60fps with Cinematic mode. The camera that's always in your pocket.",
        visualPotential: "Incredible low-light performance for club and festival footage",
        skillLevel: "All Levels",
        priceTier: "$$$$",
        priceNumeric: 999,
        artistsUsed: ["Everyone", "Countless TikTok/Reels Creators", "Musicians"],
        personalNote: "My always-on-me camera. 4K60 looks incredible for DJ content",
        tags: ["Smartphone", "4K", "Portable", "Low-Light"],
        imageUrl: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg"
    }
];

// ============================================
// PART 2: ARTISTS CATALOG (For Filtering)
// ============================================

// Extract all unique artists from the gearCatalog
function getAllArtists() {
    const artistSet = new Set();
    gearCatalog.forEach(item => {
        if (item.artistsUsed) {
            item.artistsUsed.forEach(artist => artistSet.add(artist));
        }
    });
    return Array.from(artistSet).sort();
}

// ============================================
// PART 3: DOM ELEMENTS
// ============================================

const container = document.getElementById('catalog-container');
const searchInput = document.getElementById('search-input');
const typeFilter = document.getElementById('type-filter');
const categoryFilter = document.getElementById('category-filter');
const skillFilter = document.getElementById('skill-filter');
const priceFilter = document.getElementById('price-filter');
const sortSelect = document.getElementById('sort-select');
const resultsCount = document.getElementById('results-count');

// Buttons for CRUD operations
const addToolBtn = document.getElementById('add-tool-btn');
const saveToStorageBtn = document.getElementById('save-storage-btn');
const loadFromStorageBtn = document.getElementById('load-storage-btn');
const resetDefaultBtn = document.getElementById('reset-default-btn');
const exportDataBtn = document.getElementById('export-data-btn');

// Modal elements
const modal = document.getElementById('tool-modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.querySelector('.close-modal');
const toolForm = document.getElementById('tool-form');

// Form inputs
const toolId = document.getElementById('tool-id');
const toolName = document.getElementById('tool-name');
const toolCategory = document.getElementById('tool-category');
const toolType = document.getElementById('tool-type');
const toolCreator = document.getElementById('tool-creator');
const toolDescription = document.getElementById('tool-description');
const toolSkillLevel = document.getElementById('tool-skill');
const toolPriceTier = document.getElementById('tool-price');
const toolPriceNumeric = document.getElementById('tool-price-numeric');
const toolArtists = document.getElementById('tool-artists');
const toolPersonalNote = document.getElementById('tool-personal-note');
const toolTags = document.getElementById('tool-tags');
const toolImageUrl = document.getElementById('tool-image-url');
const toolVisualPotential = document.getElementById('tool-visual-potential');

// ============================================
// PART 4: HELPER FUNCTIONS
// ============================================

const priceMap = {
    'Free': 0,
    '$': 1,
    '$$': 2,
    '$$$': 3,
    '$$$$': 4,
    '$$$$$': 5
};

const skillOrder = ['Beginner-Friendly', 'All Levels', 'Intermediate', 'Advanced', 'Professional'];

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('studioWaveformCatalog', JSON.stringify(gearCatalog));
    alert('✅ Catalog saved to browser storage!');
    console.log('Catalog saved to localStorage');
}

// Load from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('studioWaveformCatalog');
    if (saved) {
        gearCatalog = JSON.parse(saved);
        populateCategoryDropdown();
        populateArtistFilter();
        filterData();
        alert('📂 Catalog loaded from browser storage!');
        console.log('Catalog loaded from localStorage');
    } else {
        alert('❌ No saved catalog found.');
    }
}

// Reset to default catalog
function resetToDefault() {
    if (confirm('Reset to default catalog? Any unsaved changes will be lost.')) {
        location.reload();
    }
}

// Export as JSON file
function exportAsJSON() {
    const dataStr = JSON.stringify(gearCatalog, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'studio-waveform-catalog.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Generate unique ID
function generateId() {
    return Math.max(...gearCatalog.map(item => item.id), 0) + 1;
}

// ============================================
// PART 5: RENDER FUNCTION
// ============================================

function renderCatalog(dataArray) {
    container.innerHTML = '';
    
    if (resultsCount) {
        resultsCount.textContent = `Showing ${dataArray.length} of ${gearCatalog.length} items`;
    }
    
    if (dataArray.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>🎵 No gear found</h3>
                <p>Try adjusting your filters or <button class="add-prompt-btn" onclick="openAddModal()">Add a new tool</button></p>
            </div>
        `;
        return;
    }

    dataArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const tagsHTML = item.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        const artistsDisplay = item.artistsUsed ? item.artistsUsed.slice(0, 3).join(', ') : '';
        const moreCount = item.artistsUsed && item.artistsUsed.length > 3 ? ` +${item.artistsUsed.length - 3}` : '';
        
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${item.imageUrl}'); background-size: cover; background-position: center;">
                <span class="category-badge">${item.category}</span>
                <div class="card-actions">
                    <button class="edit-btn" data-id="${item.id}" title="Edit"><span>✏️</span></button>
                    <button class="delete-btn" data-id="${item.id}" title="Delete"><span>🗑️</span></button>
                </div>
            </div>
            <div class="card-content">
                <h2>${item.name}</h2>
                <p class="creator">🎹 ${item.creator}</p>
                <p class="description">${item.description}</p>
                ${item.personalNote ? `<div class="personal-note">💭 "${item.personalNote}"</div>` : ''}
                <div class="meta-grid">
                    <span class="meta-item">📊 ${item.skillLevel}</span>
                    <span class="meta-item">💰 ${item.priceTier}</span>
                    <span class="meta-item">🎧 ${artistsDisplay}${moreCount}</span>
                </div>
                <div class="visual-potential">
                    <strong>🎬 Content Angle:</strong> ${item.visualPotential}
                </div>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            openEditModal(id);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            deleteTool(id);
        });
    });
}

// ============================================
// PART 6: CRUD OPERATIONS
// ============================================

function deleteTool(id) {
    if (confirm('Are you sure you want to delete this tool?')) {
        gearCatalog = gearCatalog.filter(item => item.id !== id);
        populateCategoryDropdown();
        populateArtistFilter();
        filterData();
        console.log('Deleted tool with ID:', id);
    }
}

function openAddModal() {
    modalTitle.textContent = 'Add New Tool';
    toolForm.reset();
    toolId.value = '';
    modal.style.display = 'block';
}

function openEditModal(id) {
    const tool = gearCatalog.find(item => item.id === id);
    if (!tool) return;
    
    modalTitle.textContent = 'Edit Tool';
    toolId.value = tool.id;
    toolName.value = tool.name || '';
    toolCategory.value = tool.category || '';
    toolType.value = tool.type || '';
    toolCreator.value = tool.creator || '';
    toolDescription.value = tool.description || '';
    toolSkillLevel.value = tool.skillLevel || '';
    toolPriceTier.value = tool.priceTier || '';
    toolPriceNumeric.value = tool.priceNumeric || '';
    toolArtists.value = tool.artistsUsed ? tool.artistsUsed.join(', ') : '';
    toolPersonalNote.value = tool.personalNote || '';
    toolTags.value = tool.tags ? tool.tags.join(', ') : '';
    toolImageUrl.value = tool.imageUrl || '';
    toolVisualPotential.value = tool.visualPotential || '';
    
    modal.style.display = 'block';
}

function saveTool(event) {
    event.preventDefault();
    
    const toolData = {
        name: toolName.value,
        category: toolCategory.value,
        type: toolType.value,
        creator: toolCreator.value,
        description: toolDescription.value,
        skillLevel: toolSkillLevel.value,
        priceTier: toolPriceTier.value,
        priceNumeric: parseFloat(toolPriceNumeric.value) || 0,
        artistsUsed: toolArtists.value.split(',').map(a => a.trim()).filter(a => a),
        personalNote: toolPersonalNote.value,
        tags: toolTags.value.split(',').map(t => t.trim()).filter(t => t),
        imageUrl: toolImageUrl.value || 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
        visualPotential: toolVisualPotential.value
    };
    
    const id = toolId.value;
    
    if (id) {
        // Edit existing tool
        const index = gearCatalog.findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            gearCatalog[index] = { ...gearCatalog[index], ...toolData };
        }
    } else {
        // Add new tool
        const newTool = {
            id: generateId(),
            ...toolData
        };
        gearCatalog.push(newTool);
    }
    
    modal.style.display = 'none';
    populateCategoryDropdown();
    populateArtistFilter();
    filterData();
    console.log('Tool saved:', toolData.name);
}

// ============================================
// PART 7: FILTER & SORT FUNCTIONS
// ============================================

function filterData() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const typeValue = typeFilter.value;
    const categoryValue = categoryFilter.value;
    const skillValue = skillFilter.value;
    const priceValue = priceFilter.value;
    const artistValue = document.getElementById('artist-filter')?.value || 'All';

    const filtered = gearCatalog.filter(item => {
        if (typeValue !== 'All' && item.type !== typeValue) return false;
        if (categoryValue !== 'All' && item.category !== categoryValue) return false;
        if (skillValue !== 'All' && item.skillLevel !== skillValue) return false;
        if (priceValue !== 'All' && item.priceTier !== priceValue) return false;
        
        if (artistValue !== 'All') {
            if (!item.artistsUsed || !item.artistsUsed.includes(artistValue)) return false;
        }
        
        if (searchTerm !== '') {
            const matchesSearch = 
                item.name.toLowerCase().includes(searchTerm) ||
                item.creator.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                (item.personalNote && item.personalNote.toLowerCase().includes(searchTerm)) ||
                (item.artistsUsed && item.artistsUsed.some(a => a.toLowerCase().includes(searchTerm)));
            if (!matchesSearch) return false;
        }
        
        return true;
    });

    sortAndRender(filtered);
}

function sortAndRender(data) {
    const sortBy = sortSelect.value;
    let sortedData = [...data];

    switch (sortBy) {
        case 'name-asc':
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedData.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            sortedData.sort((a, b) => (a.priceNumeric || 0) - (b.priceNumeric || 0));
            break;
        case 'price-desc':
            sortedData.sort((a, b) => (b.priceNumeric || 0) - (a.priceNumeric || 0));
            break;
        case 'skill':
            sortedData.sort((a, b) => skillOrder.indexOf(a.skillLevel) - skillOrder.indexOf(b.skillLevel));
            break;
        default:
            sortedData.sort((a, b) => a.id - b.id);
    }

    renderCatalog(sortedData);
}

// ============================================
// PART 8: POPULATE DROPDOWNS
// ============================================

function populateCategoryDropdown() {
    const categories = [...new Set(gearCatalog.map(item => item.category))].sort();
    categoryFilter.innerHTML = '<option value="All">All Categories</option>';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function populateArtistFilter() {
    const artistFilter = document.getElementById('artist-filter');
    if (!artistFilter) return;
    
    const artists = getAllArtists();
    artistFilter.innerHTML = '<option value="All">All Artists</option>';
    artists.forEach(artist => {
        const option = document.createElement('option');
        option.value = artist;
        option.textContent = artist;
        artistFilter.appendChild(option);
    });
}

// ============================================
// PART 9: INITIALIZATION
// ============================================

function initializeApp() {
    populateCategoryDropdown();
    
    // Create artist filter dynamically if it doesn't exist
    let artistFilter = document.getElementById('artist-filter');
    if (!artistFilter) {
        const filterGroup = document.querySelector('.filter-group');
        const artistFilterDiv = document.createElement('div');
        artistFilterDiv.className = 'filter-item';
        artistFilterDiv.innerHTML = `
            <label>🎤 Artist</label>
            <select id="artist-filter">
                <option value="All">All Artists</option>
            </select>
        `;
        filterGroup.appendChild(artistFilterDiv);
        artistFilter = document.getElementById('artist-filter');
        artistFilter.addEventListener('change', filterData);
    }
    
    populateArtistFilter();
    
    // Add event listeners
    searchInput.addEventListener('input', filterData);
    typeFilter.addEventListener('change', filterData);
    categoryFilter.addEventListener('change', filterData);
    skillFilter.addEventListener('change', filterData);
    priceFilter.addEventListener('change', filterData);
    sortSelect.addEventListener('change', filterData);
    
    // Button listeners
    if (addToolBtn) addToolBtn.addEventListener('click', openAddModal);
    if (saveToStorageBtn) saveToStorageBtn.addEventListener('click', saveToLocalStorage);
    if (loadFromStorageBtn) loadFromStorageBtn.addEventListener('click', loadFromLocalStorage);
    if (resetDefaultBtn) resetDefaultBtn.addEventListener('click', resetToDefault);
    if (exportDataBtn) exportDataBtn.addEventListener('click', exportAsJSON);
    
    // Modal listeners
    if (closeModal) closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
    
    if (toolForm) toolForm.addEventListener('submit', saveTool);
    
    // Initial render
    renderCatalog(gearCatalog);
    
    console.log('🎛️ STUDIO WAVEFORM loaded successfully! Items:', gearCatalog.length);
    console.log('👤 Artists available:', getAllArtists().length);
}

// Make openAddModal globally available for the "Add new tool" prompt
window.openAddModal = openAddModal;

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);