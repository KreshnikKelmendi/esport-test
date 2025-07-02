"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopArrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 cursor-pointer right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#5E65EF] to-[#FFB600] shadow-lg transition-opacity duration-300 hover:scale-110 hover:shadow-xl text-white ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: "opacity 0.3s" }}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopArrow; 