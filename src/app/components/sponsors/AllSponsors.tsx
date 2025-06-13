'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Sponsor = {
    name: string;
    logo: string;
    url?: string;
};

interface SponsorCategoryProps {
    category: string;
    sponsors: Sponsor[];
    delay: number;
}

const sponsorsData: Record<string, Sponsor[]> = {
    'In Partnership With': [
        { name: 'Tech Giant Inc', logo: '/assets/sponsors/iesf-1.png', url: '#' },
        { name: 'Global Solutions', logo: '/assets/sponsors/esf.png', url: '#' },
        { name: 'Global Solutions', logo: '/assets/sponsors/FESK-1.png', url: '#' },
    ],
    'Gold Sponsors': [
        { name: 'Innovate Corp', logo: '/assets/sponsors/trekuartista-logo.png', url: '#' },
        { name: 'Future Labs', logo: '/assets/sponsors/dea-2.png', url: '#' },
        { name: 'Digital Horizon', logo: '/assets/sponsors/trekuartista-logo.png', url: '#' },
    ],
    'Silver Sponsors': [
        { name: 'Web Masters', logo: '/images/silver1.png', url: '#' },
        { name: 'Cloud Partners', logo: '/images/silver2.png', url: '#' },
        { name: 'Data Systems', logo: '/images/silver3.png', url: '#' },
        { name: 'Code Factory', logo: '/images/silver4.png', url: '#' },
    ],
    'Media Partners': [
        { name: 'Dev Community', logo: '/images/partner1.png', url: '#' },
        { name: 'Open Source Org', logo: '/images/partner2.png', url: '#' },
    ],
};

const AllSponsors: React.FC = () => {
    return (
        <div className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-[#0a0829] to-[#050219] text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-britanica mb-4">
                        {' '}
                        <motion.span
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                ease: 'linear',
                                repeat: Infinity,
                            }}
                            className="inline-block text-transparent font-britanica bg-clip-text text-[5vh] lg:text-[16vh] bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%]"
                        >
                            Sponsors
                        </motion.span>
                    </h2>
                    <p className="text-base lg:text-lg text-gray-300 font-britanica-regular max-w-2xl mx-auto">
                        We&apos;re grateful to these organizations for their support and partnership.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {Object.entries(sponsorsData).map(([category, sponsors], index) => (
                        <SponsorCategory
                            key={category}
                            category={category}
                            sponsors={sponsors}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SponsorCategory: React.FC<SponsorCategoryProps> = ({ category, sponsors, delay }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const getGridClass = () => {
        if (sponsors.length === 1) return 'grid-cols-1 max-w-xs mx-auto';
        if (sponsors.length === 2) return 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-12';
        if (sponsors.length === 3) return 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-10';
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8';
    };

    const getSponsorSize = () => {
        if (category.includes('In Partnership')) return 'h-36 p-16';
        if (category.includes('Gold')) return 'h-36 p-10';
        if (category.includes('Silver')) return 'h-32 p-5';
        if (category.includes('Media')) return 'h-24 p-4';
        return 'h-24 p-4';
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="relative"
        >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">
                <div className="w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <h3 className="text-xl md:text-2xl font-britanica mb-12 text-center">
                <span className="relative inline-block">
                    <span className="relative z-10 px-4 py-2 text-white">
                        {category}
                    </span>
                    <motion.span
                        className="absolute left-0 w-full h-[2px] bottom-[-10px] bg-gradient-to-r from-[#050219] via-[#5E65EF] to-[#FFB600]"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ delay: delay + 0.2, duration: 0.8 }}
                    />
                </span>
            </h3>

            <div className={`grid ${getGridClass()} items-center`}>
                {sponsors.map((sponsor, idx) => (
                    <motion.a
                        key={sponsor.name}
                        href={sponsor.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: delay + idx * 0.15,
                            type: 'spring',
                            stiffness: 100
                        }}
                        whileHover={{
                            y: -8,
                            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)'
                        }}
                        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[#050219] to-blue-950/70 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all ${getSponsorSize()} hover:bg-white/10`}
                    >
                        {sponsor.logo ? (
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={300}
                                height={150}
                                className={`object-contain w-full h-auto transition-transform p-2 duration-300 hover:scale-105 ${category.includes('In Partnership') ? 'max-h-20 lg:max-h-32' :
                                        category.includes('Gold') ? 'max-h-20 lg:max-h-32' :
                                            category.includes('Media') ? 'max-h-20 lg:max-h-32' : 'max-h-20 lg:max-h-32'
                                    }`}
                            />
                        ) : (
                            <span className="text-white/70">{sponsor.name}</span>
                        )}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default AllSponsors;