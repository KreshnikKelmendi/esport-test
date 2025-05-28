'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Event2 from './Event2';


const Event = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
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

    return (
        <>
        <div className="min-h-screen bg-gradient-to-r from-[#0a0829] to-[#050219] text-white">
            {/* Enhanced Hero Section */}
            <section className="relative mx-4 lg:mx-10 h-screen max-h-[900px] flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    className="absolute firstServiceImage inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                />

                {/* Glow Effects */}
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                >
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[100px]"
                        animate={{
                            x: [-100, 100, -100],
                            y: [-50, 50, -50],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-purple-500/20 blur-[80px]"
                        animate={{
                            x: [0, 150, 0],
                            y: [0, -100, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 2
                        }}
                    />
                </motion.div>

                {/* Floating Particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500/20"
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        initial={{
                            y: 0,
                            opacity: 0
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 0.5, 0],
                            x: Math.random() > 0.5 ? [0, 10] : [0, -10]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Content */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={container}
                    className="relative z-10 text-center px-6 mx-auto"
                >
                    <motion.div variants={item}>
                        <span className="inline-block text-sm tracking-widest text-neutral-400 mb-6 font-britanica-regular">JULY <b className='text-2xl'>9 - 13</b>, 2025 <br /> PRISTINA</span>
                    </motion.div>
                    <motion.h1
                        variants={item}
                        className="text-5xl md:text-7xl lg:text-7xl font-bold font-britanica mb-6 leading-tight"
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
                            className="inline-block bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%] font-britanica font-extrabold tracking-[1px] text-xl lg:text-[10vh] leading-tight text-transparent bg-clip-text"
                        >
                            EUROPEAN ESPORTS CHAMPIONSHIP <br/>2025
                        </motion.span><br />
                    </motion.h1>
                    <motion.p
                        variants={item}
                        className="text-xl font-britanica-regular text-neutral-300 max-w-2xl mx-auto mb-10"
                    >
                        The pinnacle of competitive gaming comes to Kosovo with $500,000 in prizes
                    </motion.p>

                </motion.div>
            </section>
            <Event2 />
            {/* Event Details */}
            <motion.section
                ref={ref}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={container}
                className="pt-24 pb-10 px-4 lg:px-10 mx-auto"
            >
                <div className="grid md:grid-cols-12 gap-8 mb-24">
                    {/* Venue */}
                    <motion.div
                        variants={item}
                        className="md:col-span-7 lg:col-span-12"
                    >
                        <span className="text-base text-neutral-400 mb-4 block font-britanica-regular">VENUE</span>
                        <h2 className="text-3xl md:text-4xl font-britanica mb-6">Pristina Olympic Stadium</h2>

                        {/* Bento Grid Container - Responsive adjustments */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-3">
                            {/* Main Image Cell - Full width on mobile */}
                            <motion.div
                                className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-xl overflow-hidden relative group"
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/assets/about/arena2.jpg"
                                    alt="Stadium"
                                    className="w-full h-full object-cover"
                                    width={'1000'}
                                    height={'1000'}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="text-xs sm:text-sm font-britanica-regular">1 Tetori Hale, Pristina, Kosovo</span>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Schedule Cell - Full width on mobile, half on sm, normal on lg */}
                            <motion.div
                                className="col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1 rounded-xl bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 flex flex-col justify-between"
                                whileHover={{ y: -3 }}
                            >
                                <div className="flex-1 flex flex-col justify-center items-center text-center py-6">

                                    <div className="text-base font-britanica-regular text-white mb-4">5 Competition Days</div>
                                    <div className="text-[#FFB600] font-britanica-regular">
                                        <div className="text-5xl 2xl:text-7xl font-bold font-britanica mb-1">9 – 13</div>
                                        <div className="text-xl text-white font-britanica-regular">July 2025</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-px bg-purple-900/50 my-2"></div>
                                    <div className="text-[12px] text-left text-white font-britanica-regular">
                                        Including opening/closing ceremonies and exhibition matches featuring legendary players.
                                    </div>
                                </div>
                            </motion.div>


                            {/* Capacity Cell - Full width on mobile, half on sm, normal on lg */}
                            <motion.div
                                className="col-span-1 sm:col-span-1 h-[30vh] lg:h-full lg:col-span-1 lg:row-span-1 text-center rounded-xl bg-gradient-to-br from-[#050219] to-blue-950/70 p-4 flex flex-col justify-between"
                                whileHover={{ y: -3 }}
                            >
                                <div className="text-white text-base font-britanica-regular">STADIUM CAPACITY</div>
                                <div className="text-5xl text-[#FFB600] sm:text-5xl 2xl:text-7xl font-bold font-britanica">5,000+</div>

                                <div className="text-[12px] text-white text-left border-t border-blue-900/50 py-2 font-britanica-regular">
                                    Expandable for special events with 360° seating providing optimal viewing angles from every position.
                                </div>
                            </motion.div>


                            {/* <motion.div
                                className="col-span-1 sm:col-span-1 lg:col-span-1 h-[30vh] lg:h-full flex justify-center items-center lg:row-span-1 rounded-xl bg-gradient-to-br from-[#050219] via-[] to-blue-950/70 p-4 text-white"
                                whileHover={{ y: -3 }}
                            >

                                <div className="text-xs sm:text-base flex justify-center items-center font-britanica-regular space-y-2">
                                    <p>
                                        The road to Pristina begins with an intense online qualification stage,
                                        taking place from 16 May to 1 June. <br /> <br />The top-performing teams from this stage will earn their spot at the European Esports Championship, where they will battle for national glory in front of a passionate esports audience.
                                    </p>
                                </div>
                            </motion.div> */}


                            {/* Gallery Cell - Full width on mobile, normal on larger screens */}
                            <motion.div
                                className="col-span-1 sm:col-span-2 h-[30vh] lg:h-full lg:col-span-1 row-span-12 lg:row-span-1 rounded-xl bg-[#050219] p-4 relative overflow-hidden group"
                                whileHover={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>

                            </motion.div>
                            <motion.div
                                className="col-span-1 sm:col-span-2 h-[30vh] lg:h-full lg:col-span-2 row-span-12 lg:row-span-1 rounded-xl bg-[#050219] p-4 relative overflow-hidden group"
                                whileHover={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>

                            </motion.div>
                            <motion.div
                                className="col-span-1 sm:col-span-2 h-[30vh] lg:h-full lg:col-span-1 row-span-12 lg:row-span-1 rounded-xl bg-[#050219] p-4 relative overflow-hidden group"
                                whileHover={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>

                            </motion.div>
                        </div>


                    </motion.div>
                </div>
            </motion.section>
        </div>
        </>
    );
};

export default Event;