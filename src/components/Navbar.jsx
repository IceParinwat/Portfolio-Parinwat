import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
      <div className="py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 pl-10">
            <a href="#hero">
              <h1 className="text-xl font-bold text-neutral-100">
                Ice Parinwat
              </h1>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block lg:hidden text-neutral-300 hover:text-neutral-100 pr-10"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`
              ${isMenuOpen ? "flex" : "hidden"} 
              lg:flex
              backdrop-blur-sm
              bg-neutral-950
              absolute top-full right-0 
              lg:relative lg:top-auto lg:left-auto lg:right-10
              flex-col lg:flex-row 
              items-center            
              gap-4 lg:gap-8
              lg:w-auto
              lg:bg-transparent
              pl-24 pr-24 pt-10 lg:p-0
              lg:h-0
              h-screen
              mt-4 lg:mt-0
              
            `}
          >
            <a
              href="#about"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              About Me
            </a>
            <a
              href="#experience"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#project"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
