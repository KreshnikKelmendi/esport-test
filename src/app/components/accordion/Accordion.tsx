"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      id: 1,
      title: "CHAMPIONSHIP LOCATION",
      content: "The 2025 European Esports Championship will be held in Pristina, Kosovo, at the Pristina Olympic Stadium."
    },
    {
      id: 2,
      title: "PARTICIPATING TEAMS",
      content: "32 top European teams will compete across 5 game titles including League of Legends, CS2, Dota 2, Valorant, and Rocket League."
    },
    {
      id: 3,
      title: "PRIZE POOL",
      content: "The total prize pool for the championship is €2.5 million, with €1 million allocated to the League of Legends tournament."
    },
    {
      id: 4,
      title: "TOURNAMENT SCHEDULE",
      content: "The championship will run from June 15-30, 2025, with group stages in the first week and playoffs in the second week."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.6
      }
    }
  };



  return (
    <motion.div 
      ref={ref}
      className="mx-auto mt-16 lg:mt-24 px-5 lg:px-10"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {/* <motion.p 
        ref={textRef}
        className='lg:w-1/2 2xl:w-[37%] tracking-[1px] font-britanica-regular text-base pb-12 lg:pb-20'
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        Pristina, Kosovo hosts the continent's premier esports event from June 9-13, 2025. 
        Thirty-two national teams will battle across five game titles at the Pristina Olympic Stadium 
        for a €2.5 million prize pool. <br /> <br/><b>Below you'll find key details about the tournament.</b>
      </motion.p> */}
      
      {items.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="mb-1"
          variants={itemVariants}
        >
          <button
            className={`flex items-center cursor-pointer w-full pb-6 text-left border-t border-[#050219] ${activeIndex === index ? '' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="lg:text-4xl font-britanica-regular lg:w-40 lg:h-24 flex justify-center items-center text-white bg-[#050219] rounded-br-2xl p-2 font-bold text-right mr-8">
              {String(item.id).padStart(2, '0')}
            </span>
            <span className="lg:text-3xl tracking-[1px] font-britanica-regular flex-1">
              {item.title}
            </span>
            <span className="lg:text-4xl font-light ml-4">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto',
                  opacity: 1,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.04, 0.62, 0.23, 0.98] 
                  }
                }}
                exit={{ 
                  height: 0,
                  opacity: 0,
                  transition: { 
                    duration: 0.3, 
                    ease: [0.04, 0.62, 0.23, 0.98] 
                  }
                }}
                className="overflow-hidden"
              >
                <div className="p-6 pb-8">
                  <p className="text-base lg:text-xl text-black font-britanica-regular pl-5 lg:pl-24">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Accordion;