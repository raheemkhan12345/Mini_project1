import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-purple-200 via-gray-500 to-blue-300 text-transparent bg-clip-text ">
          A&R
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition-all duration-300 ${
                  active === item.toLowerCase()
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
                onClick={() => setActive(item.toLowerCase())}
              >
                {item}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-transform duration-300 hover:scale-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/30 backdrop-blur-xl transition-all duration-500 overflow-hidden  ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg font-semibold  ">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition-all duration-300 ${
                  active === item.toLowerCase()
                    ? "text-blue-400 scale-105"
                    : "text-gray-200 hover:text-blue-400 hover:scale-105"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActive(item.toLowerCase());
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
