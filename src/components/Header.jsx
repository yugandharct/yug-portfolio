import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ openContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold tracking-tight 
              text-white drop-shadow-lg
              hover:text-purple-300 transition"
          >
            Yugandhar T
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">

            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-200 font-semibold tracking-wide
                hover:text-purple-300 transition"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-200 font-semibold tracking-wide
                hover:text-purple-300 transition"
            >
              Projects
            </button>

            <button
              onClick={openContact}
              className="text-gray-200 font-semibold tracking-wide
                hover:text-purple-300 transition"
            >
              Contact
            </button>

          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <button id="contact-btn-trigger" onClick={openContact} className="hidden"></button>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-3 mt-2 rounded-xl
            backdrop-blur-lg bg-black/50
            shadow-xl border border-white/10">

            <button
              onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }}
              className="block w-full text-left px-2 py-3 rounded-lg
                text-gray-200 hover:bg-white/10 transition"
            >
              About
            </button>

            <button
              onClick={() => { scrollToSection("projects"); setIsMenuOpen(false); }}
              className="block w-full text-left px-2 py-3 rounded-lg
                text-gray-200 hover:bg-white/10 transition"
            >
              Projects
            </button>

            <button
              onClick={() => { openContact(); setIsMenuOpen(false); }}
              className="block w-full text-left px-2 py-3 rounded-lg
                text-gray-200 hover:bg-white/10 transition"
            >
              Contact
            </button>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
