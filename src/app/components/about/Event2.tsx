"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Event2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gradient-to-r from-[#0a0829] to-[#050219] pt-16 ">
      <div className="mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" backdrop-blur-lg rounded-2xl overflow-hidden"
        >
          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-britanica text-white mb-4 pb-2">
                  About the Event
                </h2>
                <p className="text-gray-300 leading-relaxed font-britanica-regular">
                  The IESF European Esports Championship 2025 will be hosted in
                  Pristina, Kosovo, from 9-13 July. This tournament will bring
                  together 180 esports athletes from across Europe, competing in
                  some of the world's most popular game titles.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-britanica text-white mb-4 pb-2">
                  Tournament Structure
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg border-l-4 border-[#5E65EF]">
                    <h3 className="text-lg font-britanica-regular text-white">
                      Counter Strike 2
                    </h3>
                    <p className="text-gray-300 font-britanica">Top 16 teams</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg border-l-4 border-[#FFB600]">
                    <h3 className="text-lg font-britanica-regular text-white">
                      Counter Strike 2 Women
                    </h3>
                    <p className="text-gray-300 font-britanica">Top 8 teams</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg border-l-4 border-[#3703FF]">
                    <h3 className="text-lg font-britanica-regular text-white">
                      Dota 2
                    </h3>
                    <p className="text-gray-300 font-britanica">Top 12 teams</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-britanica text-white mb-4 pb-2">
                  Qualification
                </h2>
                <p className="text-gray-300 leading-relaxed font-britanica-regular">
                  The road to Pristina begins with an intense online
                  qualification stage, taking place from 16 May to 1 June. The
                  top-performing teams from this stage will earn their spot at
                  the European Esports Championship, where they will battle for
                  national glory in front of a passionate esports audience.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-britanica text-white mb-4 pb-2">
                  Key Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg">
                    <h3 className="text-sm font-britanica text-[#FFB600] uppercase tracking-wider">
                      Date
                    </h3>
                    <p className="text-white font-britanica-regular">July 9-13, 2025</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg">
                    <h3 className="text-sm font-britanica text-[#FFB600] uppercase tracking-wider">
                      Location
                    </h3>
                    <p className="text-white font-britanica-regular">Pristina, Kosovo</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg">
                    <h3 className="text-sm font-britanica text-[#FFB600] uppercase tracking-wider">
                      Participants
                    </h3>
                    <p className="text-white font-britanica-regular">180 esports athletes</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 rounded-lg">
                    <h3 className="text-sm font-britanica text-[#FFB600] uppercase tracking-wider">
                      Qualifiers
                    </h3>
                    <p className="text-white font-britanica-regular">May 16 - June 1, 2025</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Event2;