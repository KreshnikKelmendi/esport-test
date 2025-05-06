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

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={countdownVariants}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl uppercase font-britanica-regular text-white mb-4">
          Countdown to <span className='text-3xl lg:text-6xl bg-clip-text text-transparent font-britanica bg-gradient-to-r from-[#FFB600] to-[#5E65EF]'>Championship</span>
        </h2>
        <p className="text-white text-sm lg:text-lg font-britanica-regular">
        The European Esports Championship begins on July 9 - 13, 2025 in Pristina
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div 
            key={unit}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl md:text-6xl font-britanica bg-clip-text text-transparent bg-gradient-to-r from-[#FFB600] to-[#3703FF] mb-2">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base uppercase font-britanica-regular tracking-wider text-white">
              {unit}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
     

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