import React, { useEffect, useState } from 'react'
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
            id: 7,
            name: "Sheshi i Prishtinës (Pristina Square)",
            description: "The heart of the city, Pristina's main square is a lively hub for locals and tourists alike. Surrounded by cafes, shops, and cultural landmarks, it's the perfect place to experience the city's vibrant energy, attend open-air events, or simply people-watch.",
            highlight: "Enjoy a coffee at a terrace and watch the city go by",
            image: "/assets/pristina/visit-pristina-kosova-51.png",
            alt: "Sheshi i Prishtinës, the main city square"
        },
        {
            id: 6,
            name: "Germia Park",
            description: "Germia is Pristina's beloved green oasis—a vast park and nature reserve on the city's edge. Locals and visitors flock here for hiking, cycling, picnics, and the region's largest outdoor swimming pool. The rolling hills and pine forests offer a peaceful escape from urban life.",
            highlight: "Don't miss a summer swim in the iconic Germia pool",
            image: "/assets/pristina/Parku_Nacional_i_Gërmisë_Prishtinë.png",
            alt: "Germia Park in Pristina"
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
        },
        {
            id: 8,
            name: "Prishtina Mall",
            description: "Prishtina Mall is the largest shopping center in Kosova, located on the outskirts of Pristina. It offers international brands, restaurants, entertainment, and family spaces.",
            highlight: "A modern destination for shopping and entertainment.",
            image: "/assets/pristina/FocalPM_PrishtinaMall_01b.png",
            alt: "Pristina Mall in Pristina"
        },
    ];

    // Animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Floating stars for background
    type StarStyle = { width: string; height: string; left: string; top: string; opacity: number; animationDelay: string };
    const [starStyles, setStarStyles] = useState<StarStyle[]>([]);
    useEffect(() => {
        setStarStyles(
            Array.from({ length: 80 }).map(() => {
                const width = Math.random() * 3 + 'px';
                const height = Math.random() * 3 + 'px';
                const left = Math.random() * 100 + '%';
                const top = Math.random() * 100 + '%';
                const opacity = Math.random();
                const animationDelay = Math.random() * 2 + 's';
                return { width, height, left, top, opacity, animationDelay };
            })
        );
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Animation variants
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

    const fadeInUp = itemVariants;

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
            {/* Starry/Aurora Animated Background */}
            <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#0a0829] to-[#050219]">
                {/* Floating Stars */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {starStyles.map((style, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white animate-pulse"
                            style={{ ...style }}
                        />
                    ))}
                    {/* Aurora Effect */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-screen rounded-full bg-blue-600 blur-[100px] opacity-30 animate-aurora1" />
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600 blur-[90px] opacity-30 animate-aurora2" />
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-[80px] opacity-30 animate-aurora3" />
                </div>
                {/* Hero Section */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] pt-24 pb-10 text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-britanica font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5E65EF] to-[#FFB600]  drop-shadow-lg mb-6 animate-gradient-move"
                        initial="hidden"
                        animate="visible"
                        variants={titleVariants}
                    >
                        Discover Pristina
                    </motion.h1>
                    <motion.div
                        className="w-28 h-1 bg-gradient-to-r from-[#FFB600] to-[#5E65EF] mx-auto mb-8 rounded-full"
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                    />
                    <motion.p
                        className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-britanica-regular max-w-2xl mx-auto drop-shadow"
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                    >
                        A city where ancient traditions meet contemporary energy
                    </motion.p>
                </div>
                {/* Content Container */}
                <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-10 py-20 max-w-7xl">
                    {/* Attractions Section */}
                    <section className="mb-32" ref={ref}>
                        <motion.div
                            className="text-center mb-20"
                            initial="hidden"
                            animate={controls}
                            variants={fadeInUp}
                        >
                            <h2 className="text-4xl md:text-5xl font-britanica font-bold text-white mb-4 drop-shadow-lg">Essential Experiences</h2>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                            initial="hidden"
                            animate={controls}
                            variants={staggerContainer}
                        >
                            {attractions.map((attraction, index) => (
                                <motion.div
                                    key={attraction.id}
                                    className="group relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#5E65EF]/40 bg-[#0a0829]/80 hover:border-[#FFB600] transition-all duration-300"
                                    variants={fadeInUp}
                                >
                                    {/* Image with overlay */}
                                    <div className="relative h-72 w-full overflow-hidden">
                                        <Image
                                            src={attraction.image}
                                            alt={attraction.alt}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="transition-transform duration-500 group-hover:scale-105 opacity-80"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0829]/90 via-transparent to-transparent" />
                                    </div>
                                    {/* Content */}
                                    <div className="p-8 flex flex-col gap-4">
                                        <h3 className="text-2xl font-britanica font-bold text-white mb-2 drop-shadow">{attraction.name}</h3>
                                        <p className="text-white/80 mb-2 font-britanica-regular text-base leading-relaxed">{attraction.description}</p>
                                        <div className="flex items-center font-britanica-regular text-base text-[#FFB600]">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="font-semibold">{attraction.highlight}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                    {/* Practical Info Section */}
                    <section className="mb-24">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                            initial="hidden"
                            animate={controls}
                            variants={staggerContainer}
                        >
                            {/* Info Cards */}
                            <motion.div className="lg:col-span-2 flex flex-col gap-8" variants={fadeInUp}>
                                <h2 className="text-3xl md:text-4xl font-britanica font-bold text-white mb-8 drop-shadow">Visiting Pristina</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <motion.div variants={fadeInUp} className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-8 shadow-lg">
                                        <h3 className="text-xl font-britanica text-[#5E65EF] mb-4 pb-2 border-b border-[#5E65EF]/30">Getting Around</h3>
                                        <ul className="space-y-3 font-britanica-regular text-white/80">
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>Compact walkable city center</li>
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>Taxis: €2-5 for most trips</li>
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>Use registered metered cabs</li>
                                        </ul>
                                    </motion.div>
                                    <motion.div variants={fadeInUp} className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-8 shadow-lg">
                                        <h3 className="text-xl font-britanica text-[#5E65EF] mb-4 pb-2 border-b border-[#5E65EF]/30">Good to Know</h3>
                                        <ul className="space-y-3 font-britanica-regular text-white/80">
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>English widely spoken</li>
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>Currency: Euro (€)</li>
                                            <li className="flex items-start"><span className="text-[#FFB600] mr-3">•</span>10% tipping customary</li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                            {/* When to Visit Card */}
                            <motion.div
                                className="bg-gradient-to-br from-[#FFB600]/20 to-[#5E65EF]/10 p-10 rounded-2xl border-2 border-[#FFB600] shadow-xl flex flex-col gap-4 justify-center"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-britanica font-bold text-white mb-4 pb-2 border-b border-[#FFB600]/30">When to Visit</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-britanica text-[#5E65EF]">Best Seasons</h4>
                                        <p className="text-white/80 text-base font-britanica-regular">April-June & September-October</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#5E65EF] font-britanica">Climate</h4>
                                        <p className="text-white/80 text-base font-britanica-regular">Hot summers, cold winters</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#5E65EF] font-britanica">Special Events</h4>
                                        <p className="text-white/80 text-base font-britanica-regular">February 17: Independence Day</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Emergency Contacts & Services */}
                    <section className="mb-24">
                        <motion.div
                            className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#FFB600]/40 p-10 shadow-xl max-w-3xl mx-auto"
                            initial="hidden"
                            animate={controls}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-britanica font-bold text-white mb-6 drop-shadow flex items-center gap-3">
                                <svg className="w-7 h-7 text-[#FFB600] inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Emergency Contacts & Services
                            </h2>
                            <ul className="space-y-4 text-white/90 font-britanica-regular text-lg">
                                <li className="flex items-center gap-3"><span className="text-[#FFB600] font-bold">Police:</span> 192</li>
                                <li className="flex items-center gap-3"><span className="text-[#FFB600] font-bold">Ambulance:</span> 194</li>
                                <li className="flex items-center gap-3"><span className="text-[#FFB600] font-bold">Fire Brigade:</span> 193</li>
                                <li className="flex items-center gap-3"><span className="text-[#FFB600] font-bold">EU/US Embassy:</span> +383 38 5959 3000</li>
                            </ul>
                            <p className="mt-6 text-white/70 text-base">For emergencies, dial the numbers above. English is spoken by most operators.</p>
                        </motion.div>
                    </section>

                    {/* Traditional Food Section */}
                    <section className="mb-24">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            animate={controls}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-britanica font-bold text-white mb-4 drop-shadow">Traditional Food</h2>
                            <p className="text-white/70 max-w-2xl mx-auto font-britanica-regular text-lg">Kosovo&apos;s cuisine is a delicious blend of Balkan and Mediterranean flavors. You can find these delicious dishes in restaurants and bakeries all across the city. Don&apos;t miss these local favorites!</p>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
                            initial="hidden"
                            animate={controls}
                            variants={staggerContainer}
                        >
                            {/* Flija */}
                            <motion.div className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-6 shadow-lg flex flex-col items-center" variants={fadeInUp}>
                                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                                    <Image src="/assets/pristina/Kosovar Food 1.png" alt="Flija" fill style={{ objectFit: 'cover' }} className="object-cover" />
                                </div>
                                <h3 className="text-xl font-britanica text-white mb-2">Flija</h3>
                                <p className="text-white/80 text-base font-britanica-regular">A layered pastry made with crepe-like batter, baked slowly over an open flame. Served with yogurt or honey.</p>
                            </motion.div>
                            {/* Pite */}
                            <motion.div className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-6 shadow-lg flex flex-col items-center" variants={fadeInUp}>
                                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                                    <Image src="/assets/pristina/l-intro-1741792163.png" alt="Pite" fill style={{ objectFit: 'cover' }} className="object-cover" />
                                </div>
                                <h3 className="text-xl font-britanica text-white mb-2">Pite</h3>
                                <p className="text-white/80 text-base font-britanica-regular">A savory pie filled with cheese, spinach, or meat. A staple of every Kosovar table, perfect for breakfast or lunch.</p>
                            </motion.div>
                            {/* Tava e Prizrenit */}
                            <motion.div className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-6 shadow-lg flex flex-col items-center" variants={fadeInUp}>
                                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                                    <Image src="/assets/pristina/tave-dheu1.png" alt="Tava e Prizrenit" fill style={{ objectFit: 'cover' }} className="object-cover" />
                                </div>
                                <h3 className="text-xl font-britanica text-white mb-2">Tavë</h3>
                                <p className="text-white/80 text-base font-britanica-regular">A rich baked casserole of meat, peppers, and tomatoes, slow-cooked for deep flavor. A must-try for food lovers.</p>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Language & Communication Section */}
                    <section className="mb-24">
                        <motion.div
                            className="rounded-2xl bg-[#1a1b3a]/80 border-2 border-[#5E65EF]/40 p-10 shadow-xl max-w-3xl mx-auto"
                            initial="hidden"
                            animate={controls}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-britanica font-bold text-white mb-6 drop-shadow flex items-center gap-3">
                                <svg className="w-7 h-7 text-[#5E65EF] inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" /></svg>
                                Language & Communication
                            </h2>
                            <ul className="space-y-4 text-white/90 font-britanica-regular text-lg">
                                <li><span className="text-[#5E65EF] font-bold">Official Language:</span> Albanian</li>
                                <li><span className="text-[#5E65EF] font-bold">Other Languages:</span> English, Turkish</li>
                                <li><span className="text-[#5E65EF] font-bold">English:</span> Widely spoken in hotels, restaurants, and by young people</li>
                            </ul>
                            <div className="mt-6 text-white/80 text-base">
                                <p className="mb-2 font-britanica-regular">Useful phrases:</p>
                                <ul className="space-y-1">
                                    <li><span className="text-[#FFB600]">Përshëndetje</span> – Hello</li>
                                    <li><span className="text-[#FFB600]">Faleminderit</span> – Thank you</li>
                                    <li><span className="text-[#FFB600]">Sa kushton?</span> – How much is it?</li>
                                    <li><span className="text-[#FFB600]">A flisni anglisht?</span> – Do you speak English?</li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                </div>
                <Footer />
            </div>
            {/* Aurora Animations */}
            <style jsx global>{`
                @keyframes aurora1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(10%, 5%); }
                }
                @keyframes aurora2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-5%, 10%); }
                }
                @keyframes aurora3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(5%, -10%); }
                }
            `}</style>
        </>
    )
}

export default Pristina