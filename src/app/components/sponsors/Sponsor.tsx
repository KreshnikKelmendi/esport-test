// components/Sponsor.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Sponsor = () => {
  const mainPartners = [
    "/assets/sponsors/iesf-1.png",
    "/assets/sponsors/esf.png",
    "/assets/sponsors/FESK-1.png",
  ];

  const firstRowLogos = [
    "/assets/sponsors/sponsor-4.png",
    "/assets/sponsors/trekuartista-logo.png",
    "/assets/sponsors/iesf-1.png",
    "/assets/sponsors/esf.png",
    "/assets/sponsors/sponsor-1.png",
  ];

  const secondRowLogos = [
   "/assets/sponsors/sponsor-2.png",
    "/assets/sponsors/trekuartista-logo.png",
    "/assets/sponsors/iesf-1.png",
    "/assets/sponsors/esf.png",
    "/assets/sponsors/exfis.png",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const duplicatedFirstRow = [...firstRowLogos, ...firstRowLogos];
  const duplicatedSecondRow = [...secondRowLogos, ...secondRowLogos];
  const duration = isMobile ? 10 : 15;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="w-full relative pt-6 pb-12 md:pt-24 md:pb-24 overflow-hidden mt-16 lg:mt-32 bg-[#050219]"
    >
      <div className="mx-auto relative z-10">
        {/* "In Partnership With" section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-6">
            <span className="text-[11px] lg:text-sm font-britanica tracking-widest text-white">IN PARTNERSHIP WITH</span>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-2"></div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="flex justify-center items-center gap-8 md:gap-24 flex-col md:flex-row mt-6"
          >
            {mainPartners.map((logo, index) => (
              <motion.div 
                key={`main-${index}`}
                variants={itemVariants}
                className="relative h-24 w-24 md:h-32 md:w-32"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt="Main partner logo"
                  className="w-full h-full object-contain object-center p-2"
                  draggable="false"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* First Carousel (left to right) - First set of logos */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={carouselVariants}
          className="relative w-full overflow-hidden group mb-8"
        >
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedFirstRow.map((logo, index) => (
              <div
                key={`first-row-${logo}-${index}`}
                className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                style={{ width: `${100 / (isMobile ? firstRowLogos.length / 1.5 : firstRowLogos.length)}%` }}
              >
                <motion.div 
                  className="relative h-16 w-32 md:h-24 md:w-[250px]"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full p-2 lg:p-4 border border-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Sponsor logo"
                      className="w-full h-full object-contain object-center"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Second Carousel (right to left) - Second set of logos */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={carouselVariants}
          className="relative w-full overflow-hidden group"
        >
          <motion.div
            className="flex"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedSecondRow.map((logo, index) => (
              <div
                key={`second-row-${logo}-${index}`}
                className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                style={{ width: `${100 / (isMobile ? secondRowLogos.length / 1.5 : secondRowLogos.length)}%` }}
              >
                <motion.div 
                  className="relative h-16 w-32 md:h-24 md:w-[250px]"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full p-2 lg:p-4 border border-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Sponsor logo"
                      className="w-full h-full object-contain object-center"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;