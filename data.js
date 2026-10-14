// Curated rooms dataset for UrbanNest - Pune, Maharashtra
export const ROOMS_DATA = [
  {
    id: "pune-room-1",
    title: "Bohemian Garden Suite in Koregaon Park",
    tagline: "Lush green peaceful studio near Lane 7 & German Bakery",
    category: "studio",
    roomType: "Entire Studio",
    city: "Koregaon Park",
    area: "Lane 7, Koregaon Park, Pune",
    country: "India",
    address: "North Main Road, Koregaon Park, Pune, Maharashtra 411001",
    priceUSD: 24, // ~₹2,020 / night
    rating: 4.97,
    reviewCount: 142,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 520,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed WiFi (300 Mbps)",
      "Air Conditioning (Daikin Inverter)",
      "Private Lush Garden Balcony",
      "Modular Kitchenette & Microwave",
      "RO Water Purifier",
      "Power Backup Inverter",
      "Smart 43\" TV with OTT",
      "Dedicated Work Desk & Ergonomic Chair"
    ],
    description: "Nestled among the majestic banyan trees of Koregaon Park, this quiet studio offers an idyllic retreat. Features a private leafy balcony overlooking manicured gardens, high-speed fiber internet for remote work, and instant walking access to KP's famous cafes, yoga studios, and art centers.",
    host: {
      name: "Pooja Deshmukh",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2020",
      rating: 4.99,
      reviews: 310,
      responseRate: "100%",
      responseTime: "within 15 minutes",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: After 2:00 PM",
      "Checkout: 11:00 AM",
      "Self check-in with keypad smart lock",
      "No smoking indoors",
      "Quiet hours after 10:30 PM"
    ],
    reviews: [
      {
        id: "rev-pune-1",
        author: "Rohan Nair",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        date: "October 2026",
        rating: 5,
        comment: "Koregaon Park at its finest! Calm, lush green surroundings and walking distance to Sante Spa Cuisine and Nature's Basket. Internet was rock solid."
      },
      {
        id: "rev-pune-2",
        author: "Meera Sen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Pooja is a wonderful host! The garden balcony was my favorite spot for morning chai. Extremely clean and secure society."
      }
    ]
  },
  {
    id: "pune-room-2",
    title: "Executive Smart Pod Suite in Baner High Street",
    tagline: "Modern high-rise studio next to Baner's buzzing IT & dining hub",
    category: "studio",
    roomType: "Entire Studio",
    city: "Baner",
    area: "Baner High Street, Pune",
    country: "India",
    address: "Baner Road, near Balewadi High Street, Pune 411045",
    priceUSD: 28, // ~₹2,350 / night
    rating: 4.94,
    reviewCount: 116,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 480,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "1 Gbps JioFiber WiFi",
      "Motorized Standing Desk",
      "Central Air Conditioning",
      "Fully Equipped Kitchen",
      "Society Gym & Swimming Pool",
      "24/7 Gated Security & CCTV",
      "Reserved Covered Parking",
      "Washing Machine"
    ],
    description: "Designed specifically for IT professionals, entrepreneurs, and consultants. Situated just 2 minutes from Balewadi High Street with easy 15-minute access to Hinjawadi IT Park. Premium ergonomic seating, dual monitor support, and high-speed elevator.",
    host: {
      name: "Aarav Kulkarni",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2021",
      rating: 4.96,
      reviews: 215,
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 1:00 PM",
      "Checkout: 11:00 AM",
      "Smart lock self check-in",
      "No unauthorized loud parties"
    ],
    reviews: [
      {
        id: "rev-pune-3",
        author: "Kunal Shah",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Perfect stay for my 2-week project in Pune. The workspace setup and proximity to cafes on High Street made it seamless."
      }
    ]
  },
  {
    id: "pune-room-3",
    title: "Chic Sunlit Private Room in Viman Nagar",
    tagline: "Minutes from Pune Airport, Phoenix Marketcity & Symbiosis",
    category: "private-room",
    roomType: "Private Master Bedroom",
    city: "Viman Nagar",
    area: "Clover Park, Viman Nagar, Pune",
    country: "India",
    address: "Datta Mandir Chowk, Viman Nagar, Pune 411014",
    priceUSD: 16, // ~₹1,350 / night
    rating: 4.91,
    reviewCount: 98,
    isSuperhost: false,
    isFeatured: false,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 340,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed WiFi",
      "Attached Private Bathroom with Geyser",
      "Air Conditioning",
      "Balcony with Street View",
      "Shared Kitchen with Refrigerator",
      "Daily Housekeeping",
      "Gated Community with Lift"
    ],
    description: "A cozy and bright private master bedroom located in prime Viman Nagar. Just 8 minutes from Pune Airport and 5 minutes from Phoenix Marketcity. Ideal for students, flight travelers, and young working professionals.",
    host: {
      name: "Tanvi Chitale",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2022",
      rating: 4.92,
      reviews: 120,
      responseRate: "99%",
      responseTime: "within 30 minutes",
      isSuperhost: false
    },
    houseRules: [
      "Check-in: 2:00 PM - 10:00 PM",
      "Checkout: 11:00 AM",
      "Quiet residential building"
    ],
    reviews: [
      {
        id: "rev-pune-4",
        author: "Aakash Verma",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
        date: "October 2026",
        rating: 5,
        comment: "Super convenient location near the airport! Tanvi was very welcoming and guided me around Viman Nagar."
      }
    ]
  },
  {
    id: "pune-room-4",
    title: "Tech Nomad Studio in Hinjawadi Phase 1",
    tagline: "Ultra-fast internet, power backup & steps from Rajiv Gandhi IT Park",
    category: "studio",
    roomType: "Entire Serviced Studio",
    city: "Hinjawadi",
    area: "Phase 1, Hinjawadi, Pune",
    country: "India",
    address: "Hinjawadi IT Park Main Rd, Phase 1, Pune 411057",
    priceUSD: 20, // ~₹1,680 / night
    rating: 4.89,
    reviewCount: 168,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 420,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Dual-line Redundant High Speed WiFi",
      "100% DG Power Backup (No Outages)",
      "Smart Keycard Access",
      "Air Conditioning",
      "Cafeteria & Meal Plan Option",
      "Gymnasium & Table Tennis",
      "Laundromat Service",
      "Free Two-Wheeler & Four-Wheeler Parking"
    ],
    description: "Never worry about work interruptions! Situated right in Hinjawadi Phase 1 adjacent to Infosys, Wipro, and TCS campuses. Features full 24/7 power backup, dual broadband connections, an ergonomic desk, and on-site dining.",
    host: {
      name: "Vikram Patil",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2019",
      rating: 4.91,
      reviews: 290,
      responseRate: "100%",
      responseTime: "within 10 minutes",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 24/7 reception desk",
      "Checkout: 12:00 PM",
      "Government photo ID required"
    ],
    reviews: [
      {
        id: "rev-pune-5",
        author: "Priyanka Roy",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Zero commute to office in Hinjawadi! The backup power and fast internet made remote client calls completely stress-free."
      }
    ]
  },
  {
    id: "pune-room-5",
    title: "Luxury Penthouse Suite in Kalyani Nagar",
    tagline: "Serene terrace suite overlooking Jogger's Park & river greens",
    category: "penthouse",
    roomType: "Private Master Penthouse Suite",
    city: "Kalyani Nagar",
    area: "Jogger's Park, Kalyani Nagar, Pune",
    country: "India",
    address: "East Avenue, Kalyani Nagar, Pune 411006",
    priceUSD: 36, // ~₹3,030 / night
    rating: 4.98,
    reviewCount: 84,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: false,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1.5,
    sqft: 680,
    images: [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Private Open-Sky Terrace",
      "Jacuzzi Bathtub",
      "Italian Marble Flooring",
      "High-speed WiFi (500 Mbps)",
      "Daily Chef Breakfast Included",
      "Central AC & Air Purifier",
      "Reserved Stilt Parking",
      "Elevator with Private Access"
    ],
    description: "An exclusive penthouse retreat in Pune's most distinguished residential enclave. Enjoy morning tea on your private terrace overlooking leafy parks and the Mula-Mutha river. Features Italian marble interiors and five-star luxury bedding.",
    host: {
      name: "Sneha & Aditya Mehta",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2018",
      rating: 4.99,
      reviews: 380,
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 3:00 PM",
      "Checkout: 11:30 AM",
      "Strictly no smoking",
      "Adults preferred"
    ],
    reviews: [
      {
        id: "rev-pune-6",
        author: "Deepak Somani",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        date: "October 2026",
        rating: 5,
        comment: "Unbelievable terrace views and absolute peace. Sneha’s home-cooked breakfast was delightful. Pune’s best luxury stay."
      }
    ]
  },
  {
    id: "pune-room-6",
    title: "Cultural Heritage Haven in Kothrud",
    tagline: "Serene private room with balcony near Paud Road & ARAI hills",
    category: "private-room",
    roomType: "Private Room with Balcony",
    city: "Kothrud",
    area: "Paud Road, Kothrud, Pune",
    country: "India",
    address: "Mayur Colony, Kothrud, Pune 411038",
    priceUSD: 14, // ~₹1,180 / night
    rating: 4.93,
    reviewCount: 79,
    isSuperhost: true,
    isFeatured: false,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 360,
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed WiFi",
      "Traditional Copper Water Vessel & Teas",
      "Private Balcony overlooking Tree Canopy",
      "Air Conditioning",
      "Attached Bathroom with Hot Geyser",
      "Morning Yoga Mat & Props",
      "Walking Distance to Pune Metro Station"
    ],
    description: "Immerse yourself in authentic Puneri culture in the heart of Kothrud. Located in peaceful Mayur Colony, 5 minutes from the Pune Metro. Great base for trekking up Vetal Tekdi and exploring iconic eateries like Bipin Snacks and Chitale Bandhu.",
    host: {
      name: "Ananya Shinde",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2021",
      rating: 4.95,
      reviews: 145,
      responseRate: "98%",
      responseTime: "within an hour",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 2:00 PM - 9:00 PM",
      "Checkout: 11:00 AM",
      "Shoe-free home",
      "Vegetarian kitchen"
    ],
    reviews: [
      {
        id: "rev-pune-7",
        author: "Sameer Joshi",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Felt like home! Ananya gave the best recommendations for local Maharashtrian breakfast spots. Very peaceful neighborhood."
      }
    ]
  },
  {
    id: "pune-room-7",
    title: "Nordic Minimalist Flatshare in Aundh",
    tagline: "Sleek bedroom near Westend Mall, Pune University & Parihar Chowk",
    category: "shared",
    roomType: "Private Room in Shared Flat",
    city: "Aundh",
    area: "Parihar Chowk, Aundh, Pune",
    country: "India",
    address: "DP Road, near Westend Mall, Aundh, Pune 411007",
    priceUSD: 18, // ~₹1,515 / night
    rating: 4.9,
    reviewCount: 92,
    isSuperhost: false,
    isFeatured: false,
    isInstantBook: true,
    guests: 1,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 310,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed WiFi (200 Mbps)",
      "Dedicated Study Table & Bookshelf",
      "Air Conditioning",
      "Shared Fully Loaded Kitchen",
      "Microwave & Refrigerator",
      "Washing Machine",
      "24/7 Security"
    ],
    description: "Clean lines and Scandinavian design in prestigious Aundh. Walking distance to organic bakeries, Westend Mall, and green parks. Ideal for academic visitors at Savitribai Phule Pune University and young corporate professionals.",
    host: {
      name: "Rohan Joshi",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2022",
      rating: 4.88,
      reviews: 82,
      responseRate: "96%",
      responseTime: "within 2 hours",
      isSuperhost: false
    },
    houseRules: [
      "Check-in: 3:00 PM",
      "Checkout: 11:00 AM",
      "Respect fellow flatmates' quiet hours"
    ],
    reviews: [
      {
        id: "rev-pune-8",
        author: "Devika Rao",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        date: "August 2026",
        rating: 5,
        comment: "Super quiet flat, very clean bathroom, and great location on DP Road. Rohan is very helpful and responsive."
      }
    ]
  },
  {
    id: "pune-room-8",
    title: "Cybercity Designer Loft in Magarpatta City",
    tagline: "Eco-friendly gated township living near Cybercity & Kharadi IT",
    category: "studio",
    roomType: "Entire Studio",
    city: "Magarpatta City",
    area: "Magarpatta Cybercity, Hadapsar, Pune",
    country: "India",
    address: "Cosmos & Roystonea, Magarpatta City, Pune 411028",
    priceUSD: 25, // ~₹2,100 / night
    rating: 4.95,
    reviewCount: 135,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 490,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Walk to Cybercity IT Park",
      "High-speed Fiber WiFi",
      "Aditi Garden & Walking Tracks Access",
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "Seasons Mall & Destination Centre Nearby",
      "24/7 Oxygen-rich Green Township",
      "Covered Car Parking"
    ],
    description: "Enjoy life inside Pune’s premier 430-acre green township. Safe, pedestrian-friendly streets where you can walk or bicycle to your tech office at Cybercity. Features serene garden views and total silence at night.",
    host: {
      name: "Aditya Gaikwad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2020",
      rating: 4.97,
      reviews: 210,
      responseRate: "100%",
      responseTime: "within 30 mins",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 2:00 PM",
      "Checkout: 11:00 AM",
      "Township vehicle entry rules apply"
    ],
    reviews: [
      {
        id: "rev-pune-9",
        author: "Tarun Bajaj",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Magarpatta is the best place to stay in East Pune. Walked to my office in 7 minutes every morning. Clean and serene!"
      }
    ]
  },
  {
    id: "pune-room-9",
    title: "Scenic Hillview Villa Room in Bavdhan",
    tagline: "Fresh hill breezes, tranquil valley views near Chandani Chowk",
    category: "villa",
    roomType: "Private Master Suite",
    city: "Bavdhan",
    area: "NDA Road, Bavdhan, Pune",
    country: "India",
    address: "Paud-Bavdhan Link Road, Bavdhan, Pune 411021",
    priceUSD: 30, // ~₹2,525 / night
    rating: 4.96,
    reviewCount: 88,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: false,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 580,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Panoramic NDA Hill Views",
      "Outdoor Valley Deck & Hammock",
      "High-speed WiFi",
      "Complimentary Maharashtrian Breakfast",
      "Air Conditioning",
      "Private Bathtub",
      "Free Parking for SUVs & Sedans"
    ],
    description: "Escape the city bustle while staying well-connected. Perched on the hill slopes of Bavdhan near Chandani Chowk. Enjoy cool evening valley breezes, birdsong, and breathtaking sunrise views.",
    host: {
      name: "Captain Dilip Rane",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2019",
      rating: 4.98,
      reviews: 180,
      responseRate: "100%",
      responseTime: "within an hour",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 2:00 PM",
      "Checkout: 11:00 AM",
      "Quiet natural environment"
    ],
    reviews: [
      {
        id: "rev-pune-10",
        author: "Shreya Ghoshal",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        date: "October 2026",
        rating: 5,
        comment: "The valley view is stunning! Captain Dilip was an exceptional host and the fresh breakfast poha was delicious."
      }
    ]
  },
  {
    id: "pune-room-10",
    title: "High-Rise Luxury Suite in Kharadi World Trade Center",
    tagline: "Upscale waterfront flat near EON Free Zone & WTC Pune",
    category: "penthouse",
    roomType: "Entire Guest Suite",
    city: "Kharadi",
    area: "EON IT Park, Kharadi, Pune",
    country: "India",
    address: "Kharadi Bypass Rd, next to WTC, Pune 411014",
    priceUSD: 32, // ~₹2,700 / night
    rating: 4.93,
    reviewCount: 112,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 540,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Riverfront & Skyline Views",
      "500 Mbps Fiber WiFi",
      "Central Air Conditioning",
      "Clubhouse Gym & Olympic Pool Access",
      "Smart 55\" OLED TV",
      "Modular Kitchen with Chimney",
      "24/7 Concierge & Security"
    ],
    description: "Experience modern high-rise living right opposite the World Trade Center (WTC) and EON Free Zone in Kharadi. High-speed elevators, top-floor skyline vistas, and walking distance to fine dining on the Kharadi riverfront.",
    host: {
      name: "Nikhil & Shruti Agarwal",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2020",
      rating: 4.95,
      reviews: 230,
      responseRate: "100%",
      responseTime: "within 20 mins",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 3:00 PM",
      "Checkout: 11:00 AM",
      "Keyless digital smart lock"
    ],
    reviews: [
      {
        id: "rev-pune-11",
        author: "Manish Tiwari",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        date: "September 2026",
        rating: 5,
        comment: "Great apartment right next to EON IT park. Saves 2 hours of Pune traffic daily! Beautiful pool and gym too."
      }
    ]
  },
  {
    id: "pune-room-11",
    title: "Urban Minimalist Studio in Wakad",
    tagline: "Fast expressway access, quiet society & close to Hinjawadi",
    category: "studio",
    roomType: "Entire Studio",
    city: "Wakad",
    area: "Dange Chowk / Datta Mandir, Wakad, Pune",
    country: "India",
    address: "Wakad-Hinjawadi Link Road, Wakad, Pune 411057",
    priceUSD: 17, // ~₹1,430 / night
    rating: 4.88,
    reviewCount: 94,
    isSuperhost: false,
    isFeatured: false,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 390,
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-speed WiFi",
      "Air Conditioning",
      "Kitchenette with Induction Cooktop",
      "RO Water Filter",
      "Balcony with Open Views",
      "Covered Parking",
      "Power Backup"
    ],
    description: "Located on the Hinjawadi-Wakad link corridor, ideal for professionals seeking a quiet, budget-friendly and well-connected private space near the Mumbai-Pune Expressway and Dange Chowk.",
    host: {
      name: "Siddharth Shinde",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2022",
      rating: 4.9,
      reviews: 75,
      responseRate: "97%",
      responseTime: "within an hour",
      isSuperhost: false
    },
    houseRules: [
      "Check-in: 2:00 PM",
      "Checkout: 11:00 AM",
      "No smoking in common areas"
    ],
    reviews: [
      {
        id: "rev-pune-12",
        author: "Gaurav Mane",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
        date: "August 2026",
        rating: 5,
        comment: "Value for money! Clean studio with fast WiFi, grocery stores right outside the society gate."
      }
    ]
  },
  {
    id: "pune-room-12",
    title: "Heritage Terrace Suite in Shivaji Nagar / FC Road",
    tagline: "Heart of Pune, tree-lined avenues near Fergusson College & JM Road",
    category: "private-room",
    roomType: "Private Terrace Suite",
    city: "Shivaji Nagar",
    area: "FC Road / Deccan, Pune",
    country: "India",
    address: "Fergusson College Road, Shivaji Nagar, Pune 411004",
    priceUSD: 22, // ~₹1,850 / night
    rating: 4.97,
    reviewCount: 154,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    sqft: 450,
    images: [
      "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab32f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Spacious Private Open Terrace",
      "High-speed WiFi",
      "Air Conditioning",
      "Tea & Filter Coffee Maker",
      "Walking Distance to FC Road Cafes & Metro",
      "Antique Teakwood Furniture",
      "Daily Cleaning Service"
    ],
    description: "Stay in Pune’s most vibrant cultural and student hub! Just off iconic Fergusson College Road (FC Road). Steps from Vaishali, Cafe Goodluck, and FC campus. Enjoy evening chai under starlit skies on your private rooftop terrace.",
    host: {
      name: "Dr. Vinayak Gokhale",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      joinedYear: "2018",
      rating: 4.99,
      reviews: 410,
      responseRate: "100%",
      responseTime: "within a few minutes",
      isSuperhost: true
    },
    houseRules: [
      "Check-in: 1:00 PM",
      "Checkout: 11:00 AM",
      "Quiet residential colony"
    ],
    reviews: [
      {
        id: "rev-pune-13",
        author: "Pranali Kamble",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        date: "October 2026",
        rating: 5,
        comment: "The location cannot be beaten. Loved having bun maska and chai at Goodluck and walking back to this charming terrace room."
      }
    ]
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Rooms in Pune", icon: "sparkles" },
  { id: "studio", name: "Modern Studios", icon: "home" },
  { id: "private-room", name: "Private Rooms", icon: "door-closed" },
  { id: "shared", name: "Shared Flats", icon: "users" },
  { id: "penthouse", name: "Penthouses & Suites", icon: "building" },
  { id: "villa", name: "Scenic Villas", icon: "palmtree" }
];

export const CITIES = [
  "All Localities (Pune)",
  "Koregaon Park",
  "Baner",
  "Viman Nagar",
  "Hinjawadi",
  "Kalyani Nagar",
  "Kothrud",
  "Aundh",
  "Magarpatta City",
  "Kharadi",
  "Wakad",
  "Bavdhan",
  "Shivaji Nagar"
];

export const CURRENCY_RATES = {
  INR: { symbol: "₹", rate: 84.2, name: "INR (₹)" },
  USD: { symbol: "$", rate: 1.0, name: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, name: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, name: "GBP (£)" }
};
