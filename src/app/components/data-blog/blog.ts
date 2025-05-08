// Define the BlogPost type interface
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    imageUrl: string;
    content: string[];
    accentColor: string;
  }
  
  // Define the blogPosts array with the BlogPost type
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "2025 European Esports Championship: The Ultimate Showdown",
      date: "April 15, 2025",
      category: "Tournament News",
      imageUrl: "/assets/blog/blog-1.png",
      content: [
        "The 2023 European Esports Championship concluded last weekend in Berlin with record-breaking attendance and viewership numbers across all major titles.",
        "Team Phoenix Rising claimed the overall championship title with dominant performances in three categories, marking their third consecutive year as European champions.",
        "This year's championship introduced revolutionary AR spectator technology and the first-ever women's invitational tournament."
      ],
      accentColor: "from-[#050219] to-[#5E65EF]"
    },
    {
      id: "2",
      title: "Rising Stars: Breakout Performers of the Championship",
      date: "April 12, 2025",
      category: "Player Spotlight",
      imageUrl: "/assets/blog/blog-2.png",
      content: [
        "18-year-old Polish prodigy 'CyberWolf' stunned the Counter-Strike 2 community with a tournament-leading 92% headshot percentage.",
        "Valkyrie Esports made history as the first all-female team to reach the Valorant quarterfinals, defeating two top-10 ranked teams.",
        "Analysts are calling this the most competitive championship in history with six nations represented in finals."
      ],
      accentColor: "from-[#FFB600] to-[#3703FF]"
    },
    {
      id: "3",
      title: "Berlin Sets New Standard for Esports Events",
      date: "April 10, 2025",
      category: "Event Coverage",
      imageUrl: "/assets/blog/blog-3.png",
      content: [
        "The Mercedes-Benz Arena transformed into a digital colosseum with cutting-edge 360-degree LED displays and immersive fan experiences.",
        "Over 45,000 live attendees enjoyed the three-day spectacle, with thousands more at the surrounding fan festival.",
        "Berlin announced ambitious plans to become Europe's esports capital with new training facilities and a dedicated arena by 2025."
      ],
      accentColor: "from-[#5E65EF] to-[#FFB600]"
    },
    {
      id: "4",
      title: "Meta Shifts: How Patch Updates Changed the Tournament Landscape",
      date: "April 8, 2025",
      category: "Game Analysis",
      imageUrl: "/assets/blog/blog-4.png",
      content: [
        "The pre-tournament balance patches dramatically altered team strategies across multiple titles.",
        "League of Legends saw a 40% increase in unique champion picks compared to last year's championship.",
        "Experts analyze how the meta evolved throughout the tournament and what it means for upcoming events."
      ],
      accentColor: "from-[#3703FF] to-[#5E65EF]"
    },
    {
      id: "5",
      title: "Behind the Scenes: The Tech Powering the Championship",
      date: "April 5, 2025",
      category: "Technology",
      imageUrl: "/assets/blog/blog-2.png",
      content: [
        "A look at the cutting-edge technology stack that powered Europe's largest esports event.",
        "From 8K broadcasting to real-time analytics, discover how the tournament pushed technical boundaries.",
        "The production team reveals how they handled over 2PB of data during the three-day event."
      ],
      accentColor: "from-[#FFB600] to-[#050219]"
    },
    {
      id: "6",
      title: "Fan Experience: More Than Just Watching Games",
      date: "April 3, 2025",
      category: "Event Coverage",
      imageUrl: "/assets/blog/blog-3.png",
      content: [
        "The championship offered fans unprecedented access to players and exclusive content.",
        "Virtual meet-and-greets, AR photo ops, and interactive exhibits kept attendees engaged between matches.",
        "Organizers share how they created a festival atmosphere that appealed to both hardcore and casual fans."
      ],
      accentColor: "from-[#050219] to-[#3703FF]"
    },
    {
      id: "7",
      title: "Fan Experience: More Than Just Watching Games",
      date: "April 3, 2025",
      category: "Event Coverage",
      imageUrl: "/assets/blog/blog-3.png",
      content: [
        "The championship offered fans unprecedented access to players and exclusive content.",
        "Virtual meet-and-greets, AR photo ops, and interactive exhibits kept attendees engaged between matches.",
        "Organizers share how they created a festival atmosphere that appealed to both hardcore and casual fans."
      ],
      accentColor: "from-[#3703FF] to-[#5E65EF]"
    }
  ];
  