"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-07-09T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={countdownVariants}
    >
      <motion.p 
        className='font-britanica-regular text-white/80 text-sm lg:text-base mb-6 tracking-wider'
        variants={itemVariants}
      >
        COUNTDOWN TO CHAMPIONSHIP
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div
            key={unit}
            className="relative group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0  backdrop-blur-sm rounded-2xl transition-all duration-300" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 transition-opacity duration-300 blur-sm" />
            
            <div className="relative p-3 md:p-4 lg:p-6 text-center">
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-britanica font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFB600] via-[#FFD700] to-[#FFA500] mb-1 md:mb-2"
                variants={numberVariants}
                key={value} // Force re-animation when value changes
                initial="hidden"
                animate="visible"
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base uppercase font-britanica-regular tracking-wider text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {unit}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .countdown-item {
          perspective: 1000px;
        }
        .countdown-value {
          transform-style: preserve-3d;
        }
      `}</style>
    </motion.div>
  );
};

export default Countdown;