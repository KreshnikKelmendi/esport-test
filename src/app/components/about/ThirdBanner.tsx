'use client'
import { motion } from 'framer-motion';
import React from 'react'
import Header from '../header/Header';
import Countdown from '../hero/CountDown';


const ThirdBanner = () => {

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
        <div className="min-h-screen bg-gradient-to-r from-[#0a0829] to-[#050219] text-white ">
            {/* Enhanced Hero Section */}
            <Header />
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
                            EUROPEAN ESPORTS CHAMPIONSHIP <br />2025
                        </motion.span><br />
                    </motion.h1>

                    <Countdown />
                </motion.div>
            </section>
        </div>
    )
}

export default ThirdBanner