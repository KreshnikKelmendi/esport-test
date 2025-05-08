import React, { useEffect } from 'react'
import Header from '../header/Header'
import Image from 'next/image'
import Footer from '../footer/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Pristina = () => {
    const attractions = [
        {
            id: 1,
            name: "Newborn Monument",
            description: "The iconic Newborn Monument symbolizes Kosovo's independence, unveiled on February 17, 2008. Annually repainted with fresh themes, this living monument evolves with the nation—a vibrant centerpiece of Pristina's urban landscape.",
            highlight: "Visit during Independence Day to witness the annual repainting ceremony",
            image: "/assets/pristina/newborn.png",
            alt: "Colorful Newborn Monument in Pristina"
        },
        {
            id: 2,
            name: "National Library",
            description: "An architectural marvel with its 99 domes and futuristic metal mesh exterior. This cultural beacon houses over two million treasures, including rare Albanological collections that tell Kosovo's intellectual story.",
            highlight: "Free guided tours reveal the fascinating design controversies",
            image: "/assets/pristina/bibloteka.png",
            alt: "Unique architecture of National Library of Kosovo"
        },
        {
            id: 3,
            name: "Xhamia e Madhe (Great Mosque)",
            description: "The majestic Great Mosque stands as one of Pristina's most significant Ottoman landmarks. With its towering minaret and elegant dome, this architectural gem showcases classic Islamic design elements.",
            highlight: "Visit outside prayer times to admire the architecture",
            image: "/assets/pristina/mosque.png",
            alt: "Xhamia e Madhe (Great Mosque) in Pristina"
        },
        {
            id: 4,
            name: "Mother Teresa Cathedral",
            description: "Soaring 70 meters above the city, this modernist masterpiece honors the Albanian-Indian saint. Its luminous stained glass transforms sunlight into kaleidoscopic patterns across the marble interior.",
            highlight: "Sunset paints the interior with magical colored light",
            image: "/assets/pristina/cathedral.png",
            alt: "Modern Mother Teresa Cathedral in Pristina"
        },
        {
            id: 5,
            name: "Ethnological Museum",
            description: "Step into an 18th-century Ottoman time capsule. This meticulously preserved complex showcases Kosovo's rich heritage through traditional crafts, textiles, and domestic life exhibits.",
            highlight: "The tranquil courtyard garden offers a serene escape",
            image: "/assets/pristina/MUZEU.png",
            alt: "Ottoman-style Ethnological Museum building"
        }
    ];

    // Animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Header />

            {/* Animated Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#0a0829] to-[#050219] overflow-hidden">
                <motion.div
                    className="relative z-10 text-center px-4 max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-britanica text-white mb-6"
                        variants={titleVariants}
                    >
                        Discover Pristina
                    </motion.h1>

                    <motion.div
                        className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
                        variants={lineVariants}
                    />

                    <motion.p
                        className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-britanica-regular max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        A city where ancient traditions meet contemporary energy
                    </motion.p>
                </motion.div>

                <motion.div
                    className="absolute bottom-10 left-0 right-0 flex justify-center"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="mx-auto px-4 sm:px-10 py-16">
                {/* Attractions Section */}
                <section className="mb-24" ref={ref}>
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={controls}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-britanica text-gray-800 mb-4">
                            Essential Experiences
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-britanica-regular">
                            Five landmarks that define Pristina&apos;s character.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-20"
                        initial="hidden"
                        animate={controls}
                        variants={staggerContainer}
                    >
                        {attractions.map((attraction, index) => (
                            <motion.div
                                key={attraction.id}
                                className="group"
                                variants={fadeInUp}
                            >
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <motion.div
                                            className="relative h-80 lg:h-[55vh] w-full overflow-hidden rounded-lg"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={attraction.image}
                                                alt={attraction.alt}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-400 text-sm font-mono mr-4">0{index + 1}</span>
                                            <h3 className="text-2xl font-britanica text-black">
                                                {attraction.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 mb-6 leading-relaxed font-britanica-regular">
                                            {attraction.description}
                                        </p>
                                        <div className="flex items-center font-britanica-regular text-sm text-[#3703FF]">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            {attraction.highlight}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Practical Info Section */}
                <section className="mb-24">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={controls}
                        variants={staggerContainer}
                    >
                        <motion.div className="lg:col-span-2" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-britanica text-black mb-8">
                                Visiting Pristina
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-xl font-britanica text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                        Getting Around
                                    </h3>
                                    <ul className="space-y-3 font-britanica-regular">
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">Compact walkable city center</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">Taxis: €2-5 for most trips</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">Use registered metered cabs</span>
                                        </li>
                                    </ul>
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-xl font-britanica text-black mb-4 pb-2 border-b border-gray-200">
                                        Good to Know
                                    </h3>
                                    <ul className="space-y-3 font-britanica-regular">
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">English widely spoken</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">Currency: Euro (€)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gray-400 mr-3">•</span>
                                            <span className="text-gray-600">10% tipping customary</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-gray-50 p-8 rounded-lg"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-britanica text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                When to Visit
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-britanica text-gray-700">Best Seasons</h4>
                                    <p className="text-gray-500 text-sm font-britanica-regular">April-June & September-October</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-700 font-britanica">Climate</h4>
                                    <p className="text-gray-500 text-sm font-britanica-regular">Hot summers, cold winters</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-700 font-britanica">Special Events</h4>
                                    <p className="text-gray-500 text-sm font-britanica-regular">February 17: Independence Day</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Pristina