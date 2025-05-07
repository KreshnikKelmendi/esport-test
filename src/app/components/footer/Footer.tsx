"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaTwitch,
      url: "https://twitch.tv/yourbrand",


    },
    {
      icon: FaFacebook,
      url: "https://facebook.com/yourbrand",


    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/yourbrand",
    },
    {
      icon: FaX,
      url: "https://x.com/FESKEsports"
    }
  ];

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Tournaments", path: "/tournaments" },
    { label: "Teams", path: "/teams" },
    { label: "Schedule", path: "/schedule" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#050219] text-white pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-[100px]"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full bg-blue-600 filter blur-[100px]"></div>
        </div>
      </div>



      <div className="relative z-10 mx-5 lg:mx-10">
        {/* Divider */}
        <div className="flex my-12 relative">
          <div className="w-full">
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="inline-block bg-gradient-to-r from-[#5E65EF] via-[#FFB600] to-[#050219] bg-[length:200%_200%] bg-[position:0%_50%] font-britanica font-extrabold tracking-[1px] text-2xl lg:text-[12vh] leading-tight text-transparent bg-clip-text"
            >
              EUROPEAN ESPORTS CHAMPIONSHIP 2025
            </motion.span></div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative group">
              <Image
                src="/assets/logo/ESPORTS-LOGO.png"
                alt="Esports Logo"
                className="w-[30vh] transition-all duration-700 group-hover:brightness-110"
                width={'300'}
                height={'300'}

              />
              <div className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-[#050219] to-[#5E65EF] w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>

            <p className="text-gray-300 text-base max-w-md font-britanica-regular">
              The pinnacle of competitive gaming in Europe. Join us for the ultimate esports experience in 2025.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
                  aria-label={`Visit our ${social.icon.name.replace('Fa', '')} page`}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-2xl font-britanica bg-clip-text text-transparent bg-gradient-to-r from-[#FFB600] to-[#3703FF]">
              Navigation
            </p>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center text-lg group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-[#FFB600] to-[#3703FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="relative font-britanica-regular before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-gradient-to-r before:from-[#FFB600] before:to-[#3703FF] before:transition-all before:duration-300 hover:before:w-full">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-2xl font-britanica bg-clip-text text-transparent bg-gradient-to-r from-[#FFB600] to-[#3703FF]">
              Contact Us
            </p>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start">
                <div className="p-3 rounded-lg mr-4 backdrop-blur-sm">
                  <HiLocationMarker size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-britanica">Our Office</p>
                  <p className="text-gray-400 text-sm font-britanica-regular">
                    Rr. Eqrem Çabej 31, Prishtinë,
                    <br />
                    10000 Republika e Kosovës
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="p-3 rounded-lg mr-4 backdrop-blur-sm">
                  <FiPhoneCall size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-britanica">Phone</p>
                  <p className="text-gray-400 font-britanica-regular">+383 44 190 190</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="p-3 rounded-lg mr-4 backdrop-blur-sm">
                  <IoMdMail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-britanica">Email</p>
                  <p className="text-gray-400 font-britanica-regular">info@fesk.com</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}

        </div>



        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-britanica-regular">
            &copy; {currentYear} FESK. All rights reserved.
          </p>
          <div className="lg:flex space-x-6 font-britanica-regular hidden">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-all duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-all duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-all duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;