import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutFesk = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const achievements = [
    { 
      year: "2020", 
      title: "Foundation of FESK",
      text: "The Esports Federation of Kosovo was officially established with 6 founding clubs under the visionary leadership of President Altin Preniqi. This marked the beginning of organized esports in Kosovo, creating a structured platform for competitive gaming.",
      icon: "🏛️"
    },
    { 
      year: "2021", 
      title: "Olympic Recognition",
      text: "FESK was accepted as a full member by the Olympic Committee of Kosovo, granting esports official recognition as a competitive activity. This milestone validated esports as a legitimate sport in our country.",
      icon: "⚽"
    },
    { 
      year: "2021", 
      title: "International Expansion",
      text: "In June, FESK became part of the International Esports Federation (IESF), followed by joining the European Esports Federation (EEF) in December. These memberships opened doors for Kosovar players to compete globally.",
      icon: "🌍"
    },
    { 
      year: "2023", 
      title: "Official Sport Status",
      text: "The Ministry of Culture, Youth and Sports granted FESK an official sport license, cementing esports' position in Kosovo's sporting landscape. This recognition came with increased support and opportunities.",
      icon: "📜"
    },
    { 
      year: "2023", 
      title: "World Championship Success",
      text: "Kosovo's national team won the bronze medal in Dota 2 at the IESF World Championship in Israel, marking our first major international trophy. Our CS:GO team also achieved a remarkable 5th place finish.",
      icon: "🏆"
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-[#0a0829] to-[#050219] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-0 w-64 h-64 bg-[#FFB600] rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3703FF] rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-10 py-6 relative z-10">
        {/* Header with logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative w-32 lg:h-48 lg:w-48 h-32 mb-6">
            <Image
              src="/assets/sponsors/FESK-1.png"
              alt="FESK Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl upp font-britanica text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFB600] to-[#5E65EF]">
            Esports Federation of Kosovo
          </h1>
          <p className="text-gray-400 font-britanica-regular mt-4 max-w-2xl text-center">
            Pioneering the esports revolution in Kosovo since 2020, fostering talent, organizing competitions,
            and putting Kosovo on the global esports map through dedication and remarkable achievements.
          </p>
        </motion.div>

        {/* Timeline section */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          className="mb-24 container mx-auto"
        >
          <p className="text-xl md:text-2xl font-britanica mb-12 text-center text-white">
            Our Journey Through The Years
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-[2px] bg-gradient-to-b from-[#FFB600] to-[#050219] -translate-x-1/2"></div>
            
            <div className="space-y-10 lg:space-y-1">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 p-6 rounded-2xl backdrop-blur-sm ${index % 2 === 0 ? 'mr-auto' : ' ml-auto'} border-[3px] lg:border-none border-gray-800 `}>
                    {/* <div className={`absolute top-6 w-4 h-4 rounded-full ${index % 2 === 0 ? '-right-2 md:right-[25%]' : '-left-2 md:left-[25%]'} bg-purple-400`}></div> */}
                    <div className="flex items-start gap-3 mb-3">
                      {/* <span className="text-2xl">{achievement.icon}</span> */}
                      <div>
                        <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB600] to-[#5E65EF] lg:text-5xl font-britanica">{achievement.year}</p>
                        <h3 className="text-xl font-britanica text-white mt-1">{achievement.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-base font-britanica-regular">{achievement.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission section with image grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-britanica text-white">
              Our Mission and Vision
            </h2>
            <p className="text-gray-300 font-britanica-regular">
              The Esports Federation of Kosovo serves as the governing body for electronic sports in our country. 
              We are dedicated to creating a sustainable ecosystem that nurtures talent from grassroots to professional levels.
            </p>
            <p className="text-gray-300 font-britanica-regular">
              Through our comprehensive programs, we organize national tournaments, provide training facilities, 
              and establish partnerships with educational institutions to develop esports curricula. Our vision is to 
              make Kosovo a recognized force in international esports competitions.
            </p>
            <p className="text-gray-300 font-britanica-regular">
              We actively work to change perceptions about gaming, highlighting its potential as a legitimate career 
              path that combines skill, strategy, and teamwork. Our community outreach programs introduce esports to 
              new audiences while promoting healthy gaming habits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-48 lg:h-80 rounded-xl overflow-hidden group">
              <Image
                src="/assets/about/about-fesk-1.png"
                alt="FESK Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
           
            </div>
            <div className="relative h-48 lg:h-80 rounded-xl overflow-hidden group mt-8">
              <Image
                src="/assets/about/about-fesk-2.png"
                alt="Esports Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            
            </div>
            <div className="relative h-48 lg:h-80 rounded-xl overflow-hidden group">
              <Image
                src="/assets/about/about-fesk-3.png"
                alt="Player Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
             
            </div>
            <div className="relative h-48 lg:h-80 rounded-xl overflow-hidden group mt-8">
              <Image
                src="/assets/about/about-fesk-4.jpg"
                alt="Winning Trophy"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
             
            </div>
          </motion.div>
        </div>


        {/* Additional description section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-24 bg-[#050219] h-full lg:h-[50ch] flex flex-col items-center justify-center rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-britanica text-center mb-8 text-white">
            Building Kosovo's Esports Future
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl text-[#FFB600] mb-4 font-britanica">Youth Development Programs</h4>
              <p className="text-gray-300 font-britanica-regular">
                We've established training academies across Kosovo to identify and nurture young talent. 
                Our curriculum focuses not just on gaming skills but also on mental resilience, teamwork, 
                and strategic thinking - qualities that benefit players both in-game and in life.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-britanica text-[#FFB600] mb-4">Community Building</h4>
              <p className="text-gray-300 font-britanica-regular">
                Beyond competition, we organize regular community events, streaming sessions, and educational 
                workshops. These initiatives help grow Kosovo's esports culture while promoting responsible 
                gaming practices and digital wellbeing among participants.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFesk;