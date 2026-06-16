import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  // Jab user scroll karega toh navbar ka background mazeed dark/solid ho jayega sleek look ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-black/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo with Premium Glow effect */}
        <h1 className="text-3xl font-black bg-linear-to-r from-violet-400 via-indigo-200 to-cyan-400 text-transparent bg-clip-text tracking-wider hover:scale-105 transition-transform duration-300 cursor-pointer">
          A&R
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm tracking-widest uppercase font-medium">
          {navItems.map((item) => {
            const isLinkActive = active === item.toLowerCase();
            return (
              <li key={item} className="relative group cursor-pointer py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 block ${
                    isLinkActive
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActive(item.toLowerCase())}
                >
                  {item}
                </a>
                {/* Underline Indicator */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-violet-500 to-cyan-400 transition-all duration-300 ${
                    isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Modern Side-Drawer Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-black/90 backdrop-blur-2xl border-l border-white/10 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-1 mt-6 px-4">
          {navItems.map((item) => {
            const isLinkActive = active === item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`flex items-center px-6 py-4 rounded-xl text-md font-medium tracking-wide transition-all duration-300 ${
                    isLinkActive
                      ? "bg-linear-to-r from-violet-600/20 to-cyan-600/20 text-cyan-400 border-l-4 border-cyan-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
