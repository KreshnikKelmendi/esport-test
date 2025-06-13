"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Visit = () => {
  const imagePaths = [
    '/assets/pristina/pristina-1.png',
    '/assets/pristina/newborn.png',
    '/assets/pristina/pristina-3.png',
    '/assets/pristina/pristina-4.png',
    '/assets/pristina/prishtina-5.png',
    '/assets/pristina/pristina-6.png',
    '/assets/pristina/pristina-7.png',
    '/assets/pristina/pristina-8.png',
    '/assets/pristina/pristina-9.png',
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
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
    <section className="mx-auto relative px-5 lg:px-10 py-12 md:py-20 bg-gradient-to-r from-[#0a0829] to-[#050219]">
        <div className="absolute inset-0 overflow-hidden">
                {generateStars()}

                {/* Aurora Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-full opacity-30">
                        {/* <div
                            className="absolute top-1/4 left-1/4 w-96 h-screen rounded-full bg-blue-600 blur-[100px]"
                            style={{ animation: "float 15s infinite ease-in-out" }}
                        /> */}
                        <div
                            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-[90px]"
                            style={{ animation: "float 18s infinite ease-in-out 2s" }}
                        />
                        <div
                            className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-[80px]"
                            style={{ animation: "float 12s infinite ease-in-out 4s" }}
                        />
                    </div>
                </div>
            </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left side - Animated Text */}
        <div ref={ref} className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-4xl font-britanica-regular font-bold mb-6 text-white"
          >
            Discover Our Beautiful <br />
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="inline-block text-transparent bg-clip-text text-[8vh] lg:text-[16vh] bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%]"
            >
              Pristina
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-base mb-6 font-britanica-regular text-white"
          >
            Experience the perfect blend of nature and comfort in our stunning location. 
            Whether you&apos;re looking for adventure or relaxation, we&apos;ve got something for everyone.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base text-white md:text-base font-britanica-regular mb-8"
          >
            Our facilities are designed to provide you with an unforgettable experience,
            surrounded by breathtaking views and exceptional service.
          </motion.p>

        <Link href="/what-to-visit-in-Pristina" className="w-full z-50 cursor-pointer">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block cursor-pointer px-8 py-3 z-50 md:px-10 md:py-4 text-lg font-britanica outline text-white rounded-lg bg-gradient-to-r from-blue-700 to-yellow-500 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 hover:text-white w-fit"
          >
            Discover More
          </motion.button>
          </Link>
        </div>

        {/* Right side - Image Grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid lg:grid-cols-2 gap-4">
              {imagePaths.slice(0, 2).map((src, i) => (
                <div key={i} className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                  <Image src={src} alt={`Visit location ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {imagePaths.slice(2, 6).map((src, i) => (
                <div key={i + 2} className="relative h-48 2xl:h-80 rounded-xl overflow-hidden">
                  <Image src={src} alt={`Visit location ${i + 3}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {imagePaths.slice(6, 9).map((src, i) => (
                <div key={i + 6} className="relative h-48 rounded-xl overflow-hidden">
                  <Image src={src} alt={`Visit location ${i + 7}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
