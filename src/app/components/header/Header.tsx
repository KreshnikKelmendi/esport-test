'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTwitch, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { 
      id: 'about', 
      label: 'About', 
      href: '#',
      subItems: [
        { id: 'about-event', label: 'About Event', href: '/about-event' },
        { id: 'about-fesk', label: 'About FESK', href: '/about-fesk' },
      ]
    },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'sponsors', label: 'Sponsors', href: '/sponsors' }
  ];

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      {/* Header Background */}
      <div className={`
          sticky w-full 
          ${pathname === '/about-fesk' || pathname === '/blog' || pathname === '/what-to-visit-in-Pristina' || pathname === '/sponsors' || pathname === '/about-event' || pathname.startsWith('/blog/')
            ? 'bg-gradient-to-r font-britanica-regular from-[#0a0829] to-[#050219]'
            : isSticky
            ? 'bg-gradient-to-r from-[#0a0829] to-[#4e5bfc] shadow-2xl'
            : 'bg-transparent'
          }
          transition-all duration-300
        `}>
        <div className="px-5 lg:px-10 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-50">
              <motion.img
                src="/assets/logo/ESPORTS-LOGO.png"
                alt="Logo"
                className="h-12 object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all
                          ${activeDropdown === item.id ? 'bg-white/10 text-white' : 'text-white/90 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        <span className="font-britanica-regular">{item.label}</span>
                        <motion.span
                          animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="text-sm ml-2" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl z-50 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={subItem.href}
                                className="block px-4 py-3 text-gray-800 font-britanica-regular hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0"
                                onClick={closeAllDropdowns}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg font-britanica-regular transition-all
                        ${pathname === item.href ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-5">
            <motion.a 
                href="https://www.twitch.tv/federataesportskosova?fbclid=PAZXh0bgNhZW0CMTEAAacbit6j6osapE4iI2CnymY9ddfmLLejOq4J73wDaL18RtkiKXdoCf2iWeVfLA_aem_WFgJiAsdpmVFQfjW04Ht_Q2g" 
                className="text-white/80 hover:text-purple-500 transition-colors"
                rel='noopener noreferrer'
                target='_blank' 
                whileHover={{ y: -2 }}
              >
                <FaTwitch size={18} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/federataesportskosova/" 
                rel='noopener noreferrer'
                target='_blank' 
                className="text-white/80 hover:text-pink-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/feSKosova"
                rel='noopener noreferrer'
                target='_blank' 
                className="text-white/80 hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaFacebookF size={18} />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden text-white focus:outline-none z-50"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBars size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
              onClick={closeAllDropdowns}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-r from-[#0a0829] to-[#050219] shadow-xl z-40 overflow-y-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <Link href="/" onClick={closeAllDropdowns}>
                  <Image
                    src="/assets/logo/ESPORTS-LOGO.png"
                    alt="Logo"
                    className=" object-cover"
                    width={'100'}
                    height={'100'}
                  />
                </Link>
                <button
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={closeAllDropdowns}
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <nav className="px-4 py-16">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      {item.subItems ? (
                        <div className="mb-2">
                          <button
                            onClick={() => toggleDropdown(item.id)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors
                              ${activeDropdown === item.id ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/5'}
                            `}
                          >
                            <span className="font-britanica text-2xl">{item.label}</span>
                            <motion.span
                              animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronDown />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.id && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-6"
                              >
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.id} className="my-1">
                                    <Link
                                      href={subItem.href}
                                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg font-britanica transition-colors"
                                      onClick={closeAllDropdowns}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 text-2xl rounded-lg font-britanica transition-colors
                            ${pathname === item.href ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/5'}
                          `}
                          onClick={closeAllDropdowns}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-white/10">
                <div className="flex justify-center items-end h-fit space-x-8 pt-16">
                  <motion.a 
                    href="#" 
                    className="text-white/80 hover:text-blue-400 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <FaFacebookF size={24} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-white/80 hover:text-pink-500 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <FaInstagram size={24} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-white/80 hover:text-purple-500 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <FaTwitch size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;