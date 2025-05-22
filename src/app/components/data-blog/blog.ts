// Define the BlogPost type interface
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    category: string;
    imageUrl: string;
    content: string[];
    accentColor: string;
    flags?: string[];
}

// Define the blogPosts array with the BlogPost type
export const blogPosts: BlogPost[] = [
  {
    id: "13",
    title: "Qualified Nations for DOTA2 European Championship Revealed!",
    date: "May 20, 2025",
    category: "Tournament Updates",
    imageUrl: "/assets/blog/dota-2.jpg",
    content: [
      "The European Esports Championship 2025 is shaping up to be the most competitive DOTA2 tournament in European history! After months of intense qualifiers, we're excited to reveal the 12 nations that will battle for continental supremacy in Pristina this July.",
      "Here are the qualified nations:",
      "Kosovo",
      "Ukraine",
      "Georgia",
      "Romania",
      "Turkey",
      "Belarus",
      "North Macedonia",
      "Moldova",
      "Bulgaria",
      "Hungary",
      "France",
      "Serbia",
    ],
    flags: [
      "https://flagcdn.com/w320/xk.png", // Kosovo
      "https://flagcdn.com/w320/ua.png", // Ukraine
      "https://flagcdn.com/w320/ge.png", // Georgia
      "https://flagcdn.com/w320/ro.png", // Romania
      "https://flagcdn.com/w320/tr.png", // Turkey
      "https://flagcdn.com/w320/by.png", // Belarus
      "https://flagcdn.com/w320/mk.png", // North Macedonia
      "https://flagcdn.com/w320/md.png", // Moldova
      "https://flagcdn.com/w320/bg.png", // Bulgaria
      "https://flagcdn.com/w320/hu.png", // Hungary
      "https://flagcdn.com/w320/fr.png", // France
      "https://flagcdn.com/w320/rs.png", // Serbia
    ],
    accentColor: "from-[#3703FF] to-[#FFB600]"
},
    {
        id: "12",
        title: "Kosovo’s Dota 2 Team: Ready to Conquer the Global Esports Arena!",
        date: "May 6, 2025",
        category: "Team Announcement",
        imageUrl: "/assets/blog/fesk-blog-7.jpg",
        content: [
          "Our team of 5 players is ready to represent Kosovo in the esports arena – not just to show up, but to leave a mark! 🎮🔥",
          "From July 9-13, these guys will face the best in the world. Presenting the team that represents Kosovo in Dota 2 – built with strategy, passion, and a single objective: to dominate the esports arena! 🏆",
          "👾 Drini “cpirra” Idrizi",
          "👾 Albert “Sadpk” Bahtiri",
          "👾 Florian “Fll0” Sedolli",
          "👾 Lir “weatherbeaten” Nurboja",
          "👾 Zahir “zak” Delijaj",
          "4 of these guys made history back in 2021 – when they won the first medal for Kosovo in the World Championship in EILAT, Israel. 🥇"
        ],
        accentColor: "from-[#050219] to-[#3703FF]"
      }
,      
    {
        id: "1",
        title: "CS2: Kosovo vs Lithuania – BO1 Friendly Match! 🎮",
        date: "April 29, 2025",
        category: "Event Announcements",
        imageUrl: "/assets/blog/fesk-blog-6.jpg",
        content: [
          "Another exciting showdown! Kosovo and Lithuania face off in a BO1 friendly match. Are you ready?",
          "📅 April 29, 2025",
          "⏱ 20:00",
          "Livestream on Twitch 👉 twitch.tv/federataesportskosova"
        ],
        accentColor: "from-[#050219] to-[#3703FF]"
      }
,      
    {
        id: "2",
        title: "CS2: Kosovo vs Turkey – BO1 Friendly Match! 🎮",
        date: "April 29, 2025",
        category: "Event Announcements",
        imageUrl: "/assets/blog/fesk-blog-5.jpg",
        content: [
          "Kosovo and Turkey will face off in a BO1 friendly match! What are your expectations for this showdown?",
          "📅 April 29, 2025",
          "⏱ 17:00",
          "Livestream on Twitch 👉 twitch.tv/federataesportskosova"
        ],
        accentColor: "from-[#050219] to-[#3703FF]"
      }
,      
    {
        id: "3",
        title: "Kosovo Signs Co-Organization Agreement for the European Esports Championship",
        date: "April 15, 2025",
        category: "Event Announcements",
        imageUrl: "/assets/blog/blog-3.png",
        content: [
          "Esports Federation of Kosovo, International Esports Federation (IESF), and European Esports Federation (EEF) have signed a co-organization agreement for the European Esports Championship, which will be held from July 9 to 13 in Pristina.",
          "Additionally, on Tuesday, a Memorandum of Financial Support was signed between the Esports Federation of Kosovo and the Ministry of Culture, Youth, and Sports (MCYS), marking the second phase of the project’s implementation.",
          "The agreements were signed during a meeting held by the Deputy Minister of MCYS, Daulina Osmani, with the President of the Esports Federation of Kosovo, Altin Preniqi, the President of the European Esports Federation, Karol Cagan, the Secretary General of the International Esports Federation, Boban Totovski, and the Secretary General Lukasz Klimczyk.",
          "The European Championship for the popular electronic games 'Counter-Strike 2' and 'Dota 2' will be a grand event and will also serve as a promotion for Kosovo."
        ],
        accentColor: "from-[#3703FF] to-[#5E65EF]"
      }
,      
    {
        id: "8",
        title: "President Ismet Krasniqi Meets with Esports Leaders",
        date: "May 12, 2025",
        category: "Official Visits",
        imageUrl: "/assets/blog/fesk-blog-4.jpg",
        content: [
          "President Ismet Krasniqi today welcomed key leaders of the electronic sports (Esports) world, including the Secretary General of the International Esports Federation (IESF), Boban Totovski, and the leaders of the European Esports Federation (EEF), President Karol Cagan and Secretary General Lukasz Klimczyk.",
          "The delegation was accompanied by the leadership of the Esports Federation of Kosovo, headed by President Altin Preniqi.",
          "Their visit to Kosovo is connected to the organization of the European Esports Championship, which will be held in Pristina from July 9 to 13, 2025.",
          "All parties expressed their willingness and commitment to deepen cooperation, aiming to make Kosovo a model for organizing this major sporting event at the European level.",
          "Esports enjoys a vast global audience, and thanks to this championship, electronic sports are expected to gain even more momentum in Kosovo."
        ],
        accentColor: "from-[#00035d] to-[#3703FF]"
      }
,      
    {
        id: "5",
        title: "Kosovo vs North Macedonia – BO3 Friendly Match!",
        date: "April 12, 2025",
        category: "Friendly Match",
        imageUrl: "/assets/blog/fesk-blog-3.jpg",
        content: [
            "Kosovo and North Macedonia meet in a thrilling Best-of-3 (BO3) friendly match. Are you ready for the excitement this game brings?",
            "🎧 Commentary by Xhoci – with style and passion that takes the game to the next level.",
            "📅 Date: April 12, 2025",
            "⏱ Time: 20:00",
            "⏩ Livestream on Twitch 👉 twitch.tv/federataesportskosova",
          ],
        accentColor: "from-[#FFB600] to-[#050219]"
    },
    {
        id: "6",
        title: "Kosovo's National Esports Team Ready for the Global Challenge",
        date: "April 11, 2025",
        category: "Event Coverage",
        imageUrl: "/assets/blog/blog-2.png",
        content: [
            "🇽🇰 Kosovo's legendary CS2 team, made up of four undisputed stars from Bad News Eagles and one of the world’s top talents currently with NAVI Jr., is ready to represent Kosovo on one of the biggest stages in Esports.",
            "From July 9–13, these five legendary players will represent Kosovo in the international Esports arena.",
            "🎮 Team Lineup:\n- Flatron “juanflatroo” Halimi\n- Dionis “sinnopsyy” Budeci\n- Genc “gxx” Kolgeci\n- Sener “SENER1” Mahmuti\n- Drin “Makazze” Shaqiri",
            "This lineup is more than just a team — it's a call for pride, courage, and victory."
        ],
        accentColor: "from-[#050219] to-[#3703FF]"
    },

    {
        id: "7",
        title: "Kosovo to host the 2025 European Esports Championship.",
        date: "February 6, 2025",
        category: "Championship News",
        imageUrl: "/assets/blog/fesk-blog-1.jpg",
        content: [
            "The International Esports Federation (IESF) has entrusted Kosovo with hosting the European Esports Championship, which will take place on July 8 in Pristina.",
            "The European Championship was officially announced on Thursday, with a memorandum signed between the Esports Federation of Kosovo and the Ministry of Culture, Youth, and Sports (MCYS).",
            "The official ceremony was held at Tech Park Prishtina and was attended by Prime Minister Albin Kurti, Deputy Minister Daulina Osmani, IESF Secretary General Boban Totovski, and President of the Esports Federation of Kosovo, Altin Preniqi.",
            "Preniqi expressed gratitude for the opportunity and emphasized Kosovo’s readiness to host such a major event, highlighting values like hospitality, passion, and love for gaming.",
            "Prime Minister Kurti stated that this event marks a new chapter for electronic sports in Kosovo and praised the youth and innovation that led to this achievement.",
            "The championship will feature games like Counter-Strike 2 and Dota 2, bringing over 250 competitors from 45 countries to Pristina.",
            "This will be a major event that not only showcases elite esports talent but also promotes Kosovo internationally.",
            "A total of 46 European countries are expected to participate, and the event will serve as a qualifier for the World Championship, adding to its significance."
        ],
        accentColor: "from-[#3703FF] to-[#5E65EF]"
    }

];
