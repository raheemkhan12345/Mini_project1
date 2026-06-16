import React from "react";
import {
  FiCloudSnow,
  FiDollarSign,
  FiMessageSquare,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiCalendar,
  FiLayers,
} from "react-icons/fi";

const About = () => {
  // Major Production-Ready Systems
  const coreProjects = [
    {
      title: "Crown Elite - Wedding Hall Management System",
      description:
        "An enterprise-grade management platform featuring real-time booking schedules, visual calendar modules, customized invoice generation, and full administrative control over event pipelines.",
      tech: ["React", "React Router", "Context API"],
      icon: (
        <FiCalendar className="text-amber-600 transition-colors duration-300 group-hover:text-white text-3xl" />
      ),
      themeColor: "group-hover:bg-amber-600 border-amber-100 bg-amber-50/50",
      type: "Enterprise System",
    },
    {
      title: "School Learning Management System (LMS)",
      description:
        "A comprehensive institutional portal engineered to stream student performance analytics, distribute assignments, track academic fee ledgers, and manage classroom structures efficiently.",
      tech: ["React", "React Router", "Context API"],
      icon: (
        <FiLayers className="text-indigo-600 transition-colors duration-300 group-hover:text-white text-3xl" />
      ),
      themeColor: "group-hover:bg-indigo-600 border-indigo-100 bg-indigo-50/50",
      type: "Management Portal",
    },
  ];

  // Utility Micro-Apps
  const miniProjects = [
    {
      title: "Weather App",
      description:
        "A dynamic weather application tracking real-time global atmospheric conditions with seamless REST API integration.",
      tech: ["React", "REST API", "Tailwind CSS"],
      icon: (
        <FiCloudSnow className="text-blue-600 transition-colors duration-300 group-hover:text-white text-2xl" />
      ),
      themeColor: "group-hover:bg-blue-600",
    },
    {
      title: "Currency Converter",
      description:
        "A precise financial tool providing instant currency exchange computations using live-updating transactional feeds.",
      tech: ["React", "Live Exchange API"],
      icon: (
        <FiDollarSign className="text-violet-600 transition-colors duration-300 group-hover:text-white text-2xl" />
      ),
      themeColor: "group-hover:bg-violet-600",
    },
    {
      title: "School Chatbot",
      description:
        "An automated educational assistant engineered with Dialogflow to intelligently resolve inquiries regarding student metrics.",
      tech: ["Dialogflow", "NLP Integration"],
      icon: (
        <FiMessageSquare className="text-emerald-600 transition-colors duration-300 group-hover:text-white text-2xl" />
      ),
      themeColor: "group-hover:bg-emerald-600",
    },
  ];

  return (
    <div
      id="about"
      className="w-full bg-[#f8fafc] text-slate-800 py-28 border-t border-slate-200/60 relative overflow-hidden"
    >
      {/* Premium Ambient Light Background Glows */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-b from-indigo-100/40 via-blue-50/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-t from-slate-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
            Professional Profile
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-3 mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full md:mx-0 mx-auto"></div>
        </div>

        {/* Executive Split-Layout Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
          {/* Left Side: Professional Bio */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed">
              Hello! I am{" "}
              <span className="text-slate-900 font-semibold">Abdul Rahim</span>,
              a dedicated Software Engineer graduated from the{" "}
              <span className="text-slate-900 font-medium border-b-2 border-indigo-100 pb-0.5">
                Sarhad University of Science and Information Technology,
                Peshawar
              </span>
              . I specialize in architecting modern, high-performance web user
              interfaces.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              My engineering approach centers on writing clean, modular code and
              solving complex responsiveness puzzles. I bridge the gap between
              creative design concepts and robust digital architecture, striving
              to build tools that provide exceptional user experiences.
            </p>
          </div>

          {/* Right Side: Quick Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-5 bg-white border border-slate-200/60 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-start gap-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                <FiBookOpen size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">Education</h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  BS Software Engineering
                </p>
              </div>
            </div>
            <div className="p-5 bg-white border border-slate-200/60 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-start gap-4">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <FiCode size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">Tech Stack</h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  React & Tailwind CSS
                </p>
              </div>
            </div>
            <div className="p-5 bg-white border border-slate-200/60 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-start gap-4 sm:col-span-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <FiCpu size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">Philosophy</h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  Writing scalable, decoupled, and easily maintainable clean
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 1: CORE FEATURED SYSTEMS ================= */}
        <div className="mb-20">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              Featured Core Systems
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Full-scale applications architecture built with complex state
              management and clean layout constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl border transition-all duration-300 ${project.themeColor}`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-100">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-3 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CATEGORY 2: HIGHLIGHTED MICRO-APPS ================= */}
        <div>
          <div className="text-center md:text-left mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Highlighted Micro-Apps
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Core utility instances engineered during my development track
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200/70 rounded-2xl p-6 hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-3 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 ${project.themeColor}`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100/70 px-2.5 py-1 rounded-md border border-slate-200/30">
                      Micro Project
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
