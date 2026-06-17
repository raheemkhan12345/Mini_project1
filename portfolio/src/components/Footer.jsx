import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// HiOutlineArrowUpRight ki jagah FiArrowUpRight aur HiOutlineTerminal ki jagah FiTerminal use kiya hai
import { FiArrowUpRight, FiTerminal } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c263b] text-slate-400 pt-20 pb-8 relative overflow-hidden border-t border-slate-800/60">
      {/* Soft Ambient Mesh Lights - Balanced Contrast */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[150px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Column (5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-[11px] font-mono tracking-wider text-indigo-400">
              <FiTerminal className="text-sm animate-pulse" />
              <span>Engineered to Perform</span>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-white tracking-tight">
                Abdul Rahim<span className="text-indigo-500">.</span>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
                Software Engineer specialized in constructing high-performance user interfaces and responsive web ecosystems using React, Tailwind CSS, and cutting-edge frontend architectures.
              </p>
            </div>
          </div>

          {/* Navigation Links Column (3 Columns) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-[0.15em] border-l-2 border-indigo-500 pl-2.5">
              Navigation
            </h4>
            <div className="space-y-3 text-sm">
              {["home", "about", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block text-slate-400 hover:text-white transition-colors duration-200 capitalize font-medium group"
                >
                  <span className="relative pb-1">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles Column (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-[0.15em] border-l-2 border-cyan-500 pl-2.5">
              Digital Outlets
            </h4>
            <div className="space-y-2.5">
              {/* GitHub Link row */}
              <a
                href="https://github.com/raheemkhan12345/Mini_project1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-800/30 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-slate-700/80 hover:bg-slate-800/60 transition-all duration-200 text-xs font-semibold group"
              >
                <div className="flex items-center gap-2.5">
                  <FaGithub size={16} className="text-slate-4  00 group-hover:text-white" />
                  <span>GitHub Repository</span>
                </div>
                <FiArrowUpRight size={14} className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Link row */}
              <a
                href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-800/30 border border-slate-800 rounded-xl text-slate-300 hover:text-indigo-400 hover:border-slate-700/80 hover:bg-slate-800/60 transition-all duration-200 text-xs font-semibold group"
              >
                <div className="flex items-center gap-2.5">
                  <FaLinkedinIn size={14} className="text-slate-400 group-hover:text-indigo-400" />
                  <span>LinkedIn Network</span>
                </div>
                <FiArrowUpRight size={14} className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Ledger Section */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide text-slate-500">
          <p>© {currentYear} ABDUL RAHIM. All Rights Reserved.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-600">
            <span>SPEC v2.4</span>
            <span className="text-slate-800">|</span>
            <span>PROD_READY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;