'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaGamepad, FaUsers } from 'react-icons/fa';
import { SiCounterstrike, SiDota2 } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

const SecondBanner: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-50px 0px',
    });

    const images = [
        "/assets/banner/Ushtari.png",
        "/assets/banner/ushtari2.png",
    ];

    const games = [
        {
            name: "CS2",
            icon: <SiCounterstrike className="text-xl" />,
            teams: "Top 16 teams",
            color: "text-blue-600"
        },
        {
            name: "Dota 2",
            icon: <SiDota2 className="text-xl" />,
            teams: "Top 12 teams",
            color: "text-red-700"
        },
        {
            name: "CS2 Women",
            icon: <SiCounterstrike className="text-xl" />,
            teams: "Top 8 teams",
            color: "text-purple-600"
        }
    ];

    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [inView, images.length]);


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

    const imageVariants: Variants = {
        enter: { opacity: 0, scale: 0.95 },
        center: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
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
        <section
            ref={ref}
            className="relative w-full min-h-screen bg-gradient-to-r from-[#0a0829] to-[#050219] overflow-hidden items-center"
        >
            {/* Starry Background */}
            <div className="absolute inset-0 overflow-hidden">
                {generateStars()}
                {/* Aurora Effect */}
                {/* <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-full opacity-30">
                        <div
                            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-[90px]"
                            style={{ animation: "float 18s infinite ease-in-out 2s" }}
                        />
                        <div
                            className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-[80px]"
                            style={{ animation: "float 12s infinite ease-in-out 4s" }}
                        />
                    </div>
                </div> */}
            </div>

            {/* Content */}
            <div className="w-full mx-auto px-6 sm:px-6 lg:px-10 relative z-10 pt-24">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                        <motion.h6
                            className="text-base md:text-xl text-white tracking-[1.5px] font-britanica"
                            variants={itemVariants}
                        >
                            Pristina, Kosovo <br /> 
                            <motion.span
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    ease: 'linear',
                                    repeat: Infinity,
                                }}
                                className="inline-block text-transparent bg-clip-text text-2xl bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%]"
                            >
                                09 - 13 July 2025
                            </motion.span>
                        </motion.h6>

                        {/* Star logos */}
                        <div className="absolute top-24 right-16 ">
                            <Image src="/assets/banner/STAR.png" alt="Logo" className="w-[8ch] animate-pulse" width={'100'} height={'100'} />
                        </div>
                        <div className="absolute top-60 lg:top-44 left-1/2 lg:left-16 opacity-25">
                            <Image src="/assets/banner/STAR.png" alt="Logo" className="w-[8ch] animate-pulse" width={'100'} height={'100'} />
                        </div>
                        <div className="absolute lg:top-1/2 bottom-[55vh] lg:bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                            <Image src="/assets/banner/STAR.png" alt="Logo" className="w-[14ch] animate-pulse" width={'100'} height={'100'} />
                        </div>

                        <motion.p
                            className="text-2xl lg:text-3xl font-britanica font-bold uppercase tracking-[3px] text-white"
                            variants={itemVariants}
                        >
                            European Esports <br />Championship 2025
                        </motion.p>

                        <motion.p
                            className="text-sm md:text-lg text-white leading-[22px] font-britanica-regular max-w-[600px]"
                            variants={itemVariants}
                        >
                            Step into the spotlight at one of the most electrifying esports events of the decade. Experience intense competition,
                            global talent, and state-of-the-art gaming in a city that&apos;s ready to make history.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-1 gap-1 pt-4"
                            variants={itemVariants}
                        >
                            <div className="flex items-center backdrop-blur-sm p-3 rounded-lg">
                                <FaMapMarkerAlt className="text-white text-xl mr-3" />
                                <div>
                                    <p className="text-xs font-britanica-regular text-white">VENUE</p>
                                    <p className="text-[12px] text-white tracking-[1px] font-britanica">Pristina Olympic Stadium</p>
                                </div>
                            </div>

                            <div className="flex items-center backdrop-blur-sm p-3 rounded-lg">
                                <FaCalendarAlt className="text-white text-xl mr-3" />
                                <div>
                                    <p className="text-xs font-britanica-regular text-white">DATE</p>
                                    <p className="text-[12px] text-white tracking-[1px] font-britanica">July 09 – 13, 2025</p>
                                </div>
                            </div>

                            {/* <div className="flex items-center backdrop-blur-sm p-3 rounded-lg">
                                <FaTrophy className="text-[#FFB600] text-xl mr-3" />
                                <div>
                                    <p className="text-xs font-britanica-regular text-[#050219]">PRIZE POOL</p>
                                    <p className="text-[12px] tracking-[1px] font-britanica">$500,000</p>
                                </div>
                            </div> */}

                            <div className="flex items-start backdrop-blur-sm p-3 rounded-lg">
                                <FaGamepad className="text-white text-xl mr-3 mt-1" />
                                <div className="w-full">
                                    <p className="text-xs font-britanica-regular text-white">TOURNAMENTS</p>
                                    <div className="grid grid-cols-1 gap-3 mt-2">
                                        {games.map((game, index) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <span className={`${game.color}`}>{game.icon}</span>
                                                    <span className="text-[12px] text-white tracking-[1px] font-britanica">
                                                        {game.name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-black/10 px-3 py-1 rounded-full">
                                                    <FaUsers className="text-xs text-white" />
                                                    <span className="text-[11px] text-white tracking-[0.5px] w-28 flex justify-center items-center font-britanica-regular">
                                                        {game.teams}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="pt-4" variants={itemVariants}>
                            <Link
                                href="/about-event"
                                className="inline-block px-8 py-3 md:px-10 md:py-4 text-lg font-britanica outline text-white rounded-lg bg-gradient-to-r from-blue-700 to-yellow-500 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 hover:text-white"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 h-[400px] md:h-screen relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[currentImage]}
                                src={images[currentImage]}
                                alt="Esports Visual"
                                className="absolute inset-0 w-full h-full object-contain"
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.8 }}
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondBanner;
