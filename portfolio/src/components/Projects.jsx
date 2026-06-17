import React from "react";
import {
  FaCloudSun,
  FaDollarSign,
  FaRobot,
  FaShoppingCart,
  FaGithub,
  FaCalendarAlt,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "Crown Elite - Wedding Hall Management System",
      description:
        "An enterprise-grade platform featuring real-time booking schedules, customized invoice generation, and full administrative control over event pipelines.",
      github: "https://github.com/engrmasad-Developer/Elite-wedding-hall",
      icon: <FaCalendarAlt className="text-4xl text-amber-600" />,
      featured: true,
      badge: "Featured System",
    },
    {
      title: "School Learning Management System (LMS)",
      description:
        "A comprehensive institutional portal engineered to track student analytics, manage assignments, and control academic fee ledgers.",
      github: "https://github.com/raheemkhan12345/school-management-lms",
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      featured: true,
      badge: "Institutional Portal",
    },
    {
      title: "Weather App",
      description:
        "A weather application that shows real-time global atmospheric information using seamless API integration.",
      github:
        "https://github.com/raheemkhan12345/Mini_project1/tree/main/weather%20app",
      icon: <FaCloudSun className="text-3xl text-blue-500" />,
      featured: false,
      badge: "Micro App",
    },
    {
      title: "Currency Converter",
      description:
        "A precise financial tool providing instant currency exchange computations using live-updating transactional feeds.",
      github:
        "https://github.com/raheemkhan12345/Mini_project1/tree/main/06CurrencyConvertor",
      icon: <FaDollarSign className="text-3xl text-emerald-600" />,
      featured: false,
      badge: "Utility Tool",
    },
    {
      title: "School Chatbot",
      description:
        "An automated educational assistant engineered with Dialogflow to intelligently resolve inquiries regarding student metrics.",
      github:
        "https://github.com/raheemkhan12345/Mini_project1/tree/main/SchoolChatbot",
      icon: <FaRobot className="text-3xl text-purple-600" />,
      featured: false,
      badge: "AI Assistant",
    },
    {
      title: "Watch Store E-commerce",
      description:
        "A responsive and modern frontend interface showcasing premium watches with smooth cart interactions.",
      github:
        "https://github.com/raheemkhan12345/Mini_project1/tree/main/ecommerce-project",
      icon: <FaShoppingCart className="text-3xl text-rose-600" />,
      featured: false,
      badge: "E-Commerce Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#f8fafc] text-slate-800 py-20 md:py-32 relative overflow-hidden border-t border-slate-200"
    >
      {/* Soft Blueprint Grid Pattern & Soft Light Glows for Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full inline-block">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-4 mb-4">
            Recent Work
          </h2>
          <div className="w-16 h-0.75 bg-linear-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] ${
                project.featured
                  ? "lg:col-span-3 md:col-span-2"
                  : "lg:col-span-2 md:col-span-1"
              }`}
            >
              <div>
                {/* Card Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all duration-300 shrink-0">
                    {project.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border shrink-0 ${
                      project.featured
                        ? "text-indigo-600 bg-indigo-50 border-indigo-100"
                        : "text-slate-500 bg-slate-100 border-slate-200/60"
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Card Footer row (Clean Repository CTA Button Only) */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 border border-slate-200/70 hover:bg-slate-900 hover:border-transparent text-slate-700 hover:text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 group/btn shadow-xs"
                >
                  <FaGithub
                    size={16}
                    className="text-slate-500 group-hover/btn:text-white transition-colors"
                  />
                  <span>View Repository</span>
                  <FaExternalLinkAlt
                    size={10}
                    className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
