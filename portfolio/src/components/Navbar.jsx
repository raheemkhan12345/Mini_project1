import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">Rahim</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 text-center py-4 space-y-4">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;