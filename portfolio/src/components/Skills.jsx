import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: "Intermediate",
      icon: <FaReact />,
      colorClass: "text-cyan-400",
      bgHover: "hover:bg-cyan-500/10",
      borderHover:
        "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      icon: <SiTailwindcss />,
      colorClass: "text-sky-400",
      bgHover: "hover:bg-sky-500/10",
      borderHover:
        "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: <FaJsSquare />,
      colorClass: "text-yellow-400",
      bgHover: "hover:bg-yellow-500/10",
      borderHover:
        "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]",
    },
    {
      name: "HTML",
      level: "Experienced",
      icon: <FaHtml5 />,
      colorClass: "text-orange-500",
      bgHover: "hover:bg-orange-500/10",
      borderHover:
        "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    },
    {
      name: "CSS",
      level: "Intermediate",
      icon: <FaCss3Alt />,
      colorClass: "text-blue-500",
      bgHover: "hover:bg-blue-500/10",
      borderHover:
        "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <FaGitAlt />,
      colorClass: "text-orange-600",
      bgHover: "hover:bg-orange-600/10",
      borderHover:
        "hover:border-orange-600/50 hover:shadow-[0_0_20px_rgba(234,88,12,0.15)]",
    },
    {
      name: "GitHub",
      level: "Intermediate",
      icon: <FaGithub />,
      colorClass: "text-slate-200",
      bgHover: "hover:bg-slate-200/10",
      borderHover:
        "hover:border-slate-200/40 hover:shadow-[0_0_20px_rgba(241,245,249,0.1)]",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#0b0f19] text-slate-100 py-20 md:py-32 relative overflow-hidden"
    >
      {/* High-End Background Cyber Glow Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-4 mb-4">
            Technical Stack
          </h2>
          <div className="w-16 h-0.75 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Brand-Specific Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 flex items-center gap-4 transition-all duration-300 ease-out hover:-translate-y-1 backdrop-blur-sm ${skill.bgHover} ${skill.borderHover}`}
            >
              {/* Left Side: Dynamic Glowing Icon Container */}
              <div
                className={`p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 group-hover:border-transparent transition-all duration-300 text-3xl shrink-0 ${skill.colorClass}`}
              >
                {skill.icon}
              </div>

              {/* Right Side: Clean Typography Layout */}
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-bold text-slate-200 group-hover:text-white transition-colors duration-200 truncate">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 block truncate group-hover:text-slate-400 transition-colors duration-200">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;