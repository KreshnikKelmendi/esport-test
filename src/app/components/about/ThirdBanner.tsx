'use client'

import { motion, useMotionValue, useTransform, useSpring, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import Header from '../header/Header';
import Countdown from '../hero/CountDown';

const ThirdBanner = () => {
    // Mouse position state
    const [isHovered, setIsHovered] = useState(false);
    // The following line is not needed and can be removed to fix the ESLint warning:
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const glowControls = useAnimation();

    // Motion values for smooth animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Transform mouse position to rotation values
    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    // Spring animation for smoother movement
    const springConfig = { damping: 20, stiffness: 100 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    // Handle mouse movement with smooth dragging effect
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the element
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        // Removed: setMousePosition({ x: clientX - left, y: clientY - top });
        mouseX.set(x);
        mouseY.set(y);

        // Animate glow with smooth dragging effect
        glowControls.start({
            x: clientX - left - 250,
            y: clientY - top - 250,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                mass: 1,
                velocity: 0.5
            }
        });
    };

    // Reset position when mouse leaves
    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
        glowControls.start({
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        });
    };

    // Handle mouse enter
    const handleMouseEnter = () => {
        setIsHovered(true);
        glowControls.start({
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        });
    };

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

    return (
        <div 
            className="min-h-screen bg-gradient-to-r from-[#0a0829] to-[#050219] text-white relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Header />
            
            {/* Smooth Dragging Glow Effect */}
            <motion.div
                className="pointer-events-none fixed w-[600px] h-[600px] rounded-full"
                animate={glowControls}
                initial={{ scale: 0, opacity: 0 }}
                style={{
                    zIndex: 1,
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* 3D Animated Background */}
            <motion.div
                className="absolute firstServiceImage inset-0 bg-[url('/assets/banner/Ushtari.png')] bg-cover bg-center opacity-30"
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                }}
                animate={{
                    scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                }}
            />

            {/* Additional Glow Effects */}
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
                variants={containerVariants}
                className="relative z-10 text-center px-6 mx-auto pt-[20vh] md:pt-[45vh] lg:pt-[10vh]"
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-block text-sm tracking-widest text-neutral-400 font-britanica-regular">
                        JULY <b className='text-2xl'>9 - 13</b>, 2025 <br /> PRISTINA
                    </span>
                </motion.div>
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-7xl font-bold font-britanica mb-12 leading-tight"
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
                    </motion.span>
                </motion.h1>

                <div className="mt-12">
                    <Countdown />
                </div>
            </motion.div>
        </div>
    )
}

export default ThirdBanner