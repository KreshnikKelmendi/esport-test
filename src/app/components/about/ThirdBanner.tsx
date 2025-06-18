'use client'

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import Countdown from '../hero/CountDown';

const ThirdBanner = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    // Fix hydration: generate floating particle styles on client only
    const [particleStyles, setParticleStyles] = useState<{width: string, height: string, left: string, top: string, xAnim: number[], duration: number}[]>([]);
    useEffect(() => {
        setParticleStyles(
            Array.from({ length: 15 }).map(() => {
                const width = Math.random() * 10 + 5 + 'px';
                const height = Math.random() * 10 + 5 + 'px';
                const left = Math.random() * 100 + '%';
                const top = Math.random() * 100 + '%';
                const xAnim = Math.random() > 0.5 ? [0, 10] : [0, -10];
                const duration = Math.random() * 10 + 10;
                return { width, height, left, top, xAnim, duration };
            })
        );
    }, []);

    return (
        <div 
            className="min-h-screen bg-gradient-to-r from-[#0a0829] to-[#050219] text-white relative overflow-hidden"
        >
            <Header />
            
            {/* 3D Animated Background */}
            <motion.div
                className="absolute firstServiceImage inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-30"
                animate={{
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}
            />

            {/* Helmet as background for mobile */}
            <div className="absolute inset-0 w-full h-full block md:hidden z-0">
                <img 
                    src="/assets/banner/helmet.png" 
                    alt="Esports Helmet Background" 
                    className="w-full h-full object-cover object-center "
                />
                {/* Optional: dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0829] to-[#050219] opacity-90" />
            </div>

            {/* Content */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-10 mx-auto min-h-screen flex flex-col items-center justify-center text-center pt-8 sm:pt-10 md:pt-[15vh] lg:pt-[5vh] md:block md:min-h-0 md:text-left md:items-start md:justify-start"
            >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16 w-full">
                    {/* Text Content - Left Side */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/2 pt-4 sm:pt-8 md:pt-0 lg:pt-20">
                        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                            <span className="inline-block text-lg sm:text-2xl md:text-sm tracking-widest text-neutral-200 font-britanica-regular">
                                JULY <b className='text-2xl sm:text-4xl md:text-2xl'>9 - 13</b>, 2025 <br /> PRISTINA
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold font-britanica mb-8 sm:mb-10 leading-tight drop-shadow-lg"
                        >
                            <motion.span
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    ease: 'linear',
                                    repeat: Infinity,
                                }}
                                className="inline-block bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%] font-britanica font-extrabold tracking-[1px] text-3xl sm:text-5xl md:text-6xl leading-tight text-transparent bg-clip-text"
                            >
                                EUROPEAN ESPORTS CHAMPIONSHIP <br />2025
                            </motion.span>
                        </motion.h1>

                        <div className="mt-8 sm:mt-10 text-2xl sm:text-4xl">
                            <Countdown />
                        </div>
                    </motion.div>

                    {/* Helmet Image - Right Side (desktop only) */}
                    <motion.div 
                        variants={itemVariants} 
                        className="w-full lg:w-1/2 justify-center items-center mt-6 sm:mt-8 lg:mt-0 lg:h-screen h-full hidden md:flex"
                    >
                        <motion.div
                            className="relative w-40 sm:w-64 md:w-full max-w-xs sm:max-w-md lg:w-full lg:h-screen flex items-center justify-center mx-auto"
                            animate={{
                                rotateY: [0, 15, 0, -15, 0],
                                rotateX: [0, 8, 0, -8, 0],
                                x: [-20, 20, -20],
                                y: [0, -15, 0, 15, 0],
                                scale: [1, 1.05, 1, 1.05, 1],
                            }}
                            transition={{
                                duration: 12,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: 1200,
                            }}
                        >
                            <img 
                                src="/assets/banner/helmet.png" 
                                alt="Esports Helmet" 
                                className="w-full h-full lg:h-screen object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Particles */}
            {particleStyles.map((style, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-500/20"
                    style={{
                        width: style.width,
                        height: style.height,
                        left: style.left,
                        top: style.top,
                    }}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0, 0.5, 0],
                        x: style.xAnim
                    }}
                    transition={{
                        duration: style.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    )
}

export default ThirdBanner