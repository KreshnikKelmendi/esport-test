"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            id: 1,
            title: "HOST CITY & DATES",
            content: "IESF European Esports Championship 2025 will be hosted in Pristina, Kosovo, from 9–13 July."
        },
        {
            id: 2,
            title: "ATHLETES & PARTICIPATION",
            content: "This tournament will bring together 180 esports athletes from across Europe, competing in some of the world’s most popular game titles."
        },
        {
            id: 3,
            title: "FEATURED GAMES",
            content: "The championship will feature:\n– Counter Strike 2 – Top 16 teams\n– Counter Strike 2 Women – Top 8 teams\n– Dota 2 – Top 12 teams"
        },
        {
            id: 4,
            title: "ROAD TO PRISTINA",
            content: "The road to Pristina begins with an intense online qualification stage, taking place from 16 May to 1 June. The top-performing teams from this stage will earn their spot at the European Esports Championship."
        },
        {
            id: 5,
            title: "BROADCAST & STREAMING",
            content: "All matches will be broadcast live on Twitch, and partnered TV channels across World."
        },
        {
            id: 6,
            title: "COMPETITION GOAL",
            content: "Teams will battle for national glory in front of a passionate esports audience."
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

            <div className="mb-16 relative ml-0 lg:ml-24">
                <h3 className="text-3xl text-[#050219] lg:text-5xl font-britanica mb-4">Tournament Details</h3>
                <p className="text-lg lg:text-xl text-gray-700 font-britanica-regular max-w-2xl">
                    Everything you need to know about the 2025 European Esports Championship
                </p>


                <motion.div
                    className="absolute lg:left-[-50px] top-16 -translate-y-1/2  origin-left z-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 0.20, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-[120px] text-stroke xl:text-[180px] font-britanica uppercase tracking-widest text-[#5E65EF] whitespace-nowrap pointer-events-none">
                        FAQ
                    </h2>
                </motion.div>
            </div>


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