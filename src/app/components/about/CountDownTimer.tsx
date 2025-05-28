'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('2025-07-09T00:00:00'); // July 9, 2025
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8"
    >
      <div className="text-sm uppercase tracking-widest text-neutral-400 mb-4 font-britanica-regular">
        Countdown to Championship
      </div>
      
      <div className="flex justify-center gap-3 sm:gap-5">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-lg ">
              <span className="text-2xl sm:text-3xl font-bold font-britanica">
                {value.toString().padStart(2, '0')}
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[6px] opacity-70" />
            </div>
            <span className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-britanica-regular">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;