'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header/Header';
import Link from 'next/link';
import { FaArrowCircleDown } from 'react-icons/fa';
import Countdown from './CountDown';


const Banner: React.FC = () => {
    const [currentTitle, setCurrentTitle] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-50px 0px',
    });

    const titles = [
        "Global Esports Showdown",
        "European Esports Championship 2025"
    ];

    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [inView]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    const textSlideUpVariants: Variants = {
        hidden: {
            y: 80,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            }
        },
        exit: {
            y: -80,
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: "easeIn"
            }
        }
    };

    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < 100; i++) {
            const style = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random(),
                animationDelay: `${Math.random() * 2}s`
            };
            stars.push(<div key={i} className="absolute rounded-full bg-white animate-pulse" style={style} />);
        }
        return stars;
    };

    return (
        <>
            <section
                ref={ref}
                className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0829] via-[#1a1b3a] to-[#2a0b42] items-center"
            >
                {/* Starry Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {generateStars()}

                    {/* Aurora Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <Header />
                        <div className="absolute top-0 left-0 right-0 h-full opacity-30">
                            <div
                                className="absolute top-1/4 left-1/4 w-96 h-screen rounded-full bg-blue-600 blur-[100px]"
                                style={{ animation: "float 15s infinite ease-in-out" }}
                            />
                            <div
                                className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-[90px]"
                                style={{ animation: "float 18s infinite ease-in-out 2s" }}
                            />
                            <div
                                className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-[80px]"
                                style={{ animation: "float 12s infinite ease-in-out 4s" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full mx-auto px-6 sm:px-6 lg:px-8 relative z-10 pt-16">
                    <motion.div
                        className="flex w-full items-center justify-center h-screen text-center gap-8 lg:gap-12 py-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Text Section */}
                        <div className="w-full lg:w-full space-y-6 md:space-y-8">
                            <div className="absolute top-24 right-16 ">
                                <img src="/assets/banner/STAR.png" alt="Logo" className="w-[8ch] animate-pulse" />
                            </div>

                            <div className="absolute top-60 lg:top-44 left-1/2 lg:left-16 opacity-25">
                                <img src="/assets/banner/STAR.png" alt="Logo" className="w-[8ch] animate-pulse" />
                            </div>

                            <div className="absolute lg:top-1/2 bottom-[55vh] lg:bottom-[40px] right-1/2 transform translate-x-1/2">
                                <img src="/assets/banner/STAR.png" alt="Logo" className="w-[14ch] lg:w-[20ch] animate-pulse" />
                            </div>

                            <div className="absolute lg:top-1/2 top-[15vh] lg:bottom-1/2">
                                <img src="/assets/banner/DOTA-2.png" alt="Logo" className="w-[20ch] lg:w-[28ch] animate-pulse" />
                            </div>

                            <div className="absolute lg:top-40 bottom-[5vh] lg:bottom-1/2 right-7">
                                <img src="/assets/banner/CS2.png" alt="Logo" className="w-[24ch] lg:w-[32ch] animate-pulse" />
                            </div>

                            <div className="flex items-center justify-center min-h-[200px] px-4">
                                <AnimatePresence mode="wait">
                                    {/* <motion.div
                                        key={currentTitle}
                                        className="relative"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={textSlideUpVariants}
                                    >
                                        <motion.p
                                            className="text-2xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl font-britanica z-50 font-bold uppercase tracking-[6px] text-blue-600 leading-tight"
                                        >
                                            {titles[currentTitle].split(" ").map((word, index) => (
                                                <span key={index} className="block">
                                                    {word}
                                                </span>
                                            ))}
                                        </motion.p>
                                      
                                    </motion.div> */}
                                      <Countdown />
                                </AnimatePresence>
                            
                            </div>
                          
                            <motion.div className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2"  variants={itemVariants}>
                                <a
                                    href="/#"
                                    className="inline-block animate-bounce px-8 py-3 md:px-10 md:py-4 text-lg font-britanica text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 hover:shadow-blue-500/30"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7341 0.459351L21.2594 0.470141L18.5376 0.482509L16.4179 0.486053L13.1045 0.49721L9.503 0.510197L6.44686 0.519714L4.00296 0.530307L2.03241 0.537887L0.000119504 0.54586L11.8225 12.0052L23.7341 0.459351Z" fill="white" />
                                    </svg>

                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Animation */}
                <style jsx global>{`
                    @keyframes float {
                        0%, 100% { transform: translate(0, 0); }
                        25% { transform: translate(10%, 5%); }
                        50% { transform: translate(5%, 10%); }
                        75% { transform: translate(-5%, 5%); }
                    }
                `}</style>
            </section>
        </>
    );
};

export default Banner;
