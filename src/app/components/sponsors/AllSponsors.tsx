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
        { name: 'IESF', logo: '/assets/sponsors/iesf-1.png', url: '#' },
        { name: 'ESF', logo: '/assets/sponsors/esf.png', url: '#' },
        { name: 'FESK', logo: '/assets/sponsors/FESK-1.png', url: '#' },
        { name: 'MKRS', logo: '/assets/sponsors/mkrs.png', url: '#' },

    ],
    'Gold Sponsor': [
        { name: 'Raiffeisen Bank', logo: '/assets/sponsors/gold-08.png', url: '#' },
    ],
    'Sponsors': [
        { name: 'RedBull', logo: '/assets/sponsors/redbull.png', url: '#' },
        { name: 'Emerald hotel', logo: '/assets/sponsors/emerald-hotel.png', url: '#' },
        { name: 'Gjirafa50', logo: '/assets/sponsors/gjirafa.png', url: '#' },
        { name: 'EvroTarget', logo: '/assets/sponsors/evrotarget.png', url: '#' },
        { name: 'KIKxxl', logo: '/assets/sponsors/xxl.png', url: '#' },
        { name: 'telkos', logo: '/assets/sponsors/telkos.png', url: '#' },
    ],
    // 'Media Partners': [
    //     { name: 'Dev Community', logo: '/images/partner1.png', url: '#' },
    //     { name: 'Open Source Org', logo: '/images/partner2.png', url: '#' },
    // ],
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
        if (sponsors.length === 1) return 'grid-cols-1 max-w-md mx-auto';
        if (sponsors.length === 2) return 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-16';
        if (sponsors.length === 3) return 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-14';
        return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12';
    };

    const getSponsorSize = () => {
        if (category.includes('In Partnership')) return 'h-52 p-2 lg:p-10';
        if (category.includes('Gold')) return 'h-48 lg:p-8';
        if (category.includes('Silver')) return 'h-44 p-7';
        if (category.includes('Media')) return 'h-40 p-6';
        return 'h-40 lg:p-6';
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

            <h3 className="text-lg md:text-xl font-britanica mb-10 text-center tracking-wide uppercase">
                <span className="relative inline-block">
                    <span className="relative z-10 px-2 py-1 text-white">
                        {category}
                    </span>
                    <motion.span
                        className="absolute left-0 w-full h-[2px] bottom-[-6px] bg-gradient-to-r from-[#050219] via-[#5E65EF] to-[#FFB600] rounded-full"
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
                            y: -12,
                            scale: 1.07,
                            boxShadow: '0 16px 40px -8px rgba(99, 102, 241, 0.25)'
                        }}
                        className={`flex items-center justify-center rounded-2xl backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all ${getSponsorSize()}`}
                    >
                        {sponsor.logo ? (
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={500}
                                height={250}
                                className={`object-contain w-full h-auto transition-transform p-2 duration-300 hover:scale-110 ${category.includes('In Partnership') ? 'max-h-40 lg:max-h-52' :
                                        category.includes('Gold') ? 'max-h-36 lg:max-h-48' :
                                            category.includes('Media') ? 'max-h-32 lg:max-h-40' : 'max-h-32 lg:max-h-40'
                                    }`}
                            />
                        ) : (
                            <span className="text-gray-700 text-xl font-semibold">{sponsor.name}</span>
                        )}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default AllSponsors;