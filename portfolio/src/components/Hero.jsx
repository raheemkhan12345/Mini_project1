import React from "react";
import profileImage from "../assets/images/profile.jpg";
import myResume from "../assets/images/resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-linear-to-b from-gray-900 via-gray-850 to-gray-800 text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-linear-to-r from-white via-gray-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
            Abdul Rahim
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 ">
            Frontend Developer | React & Tailwind CSS
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-md text-white font-medium shadow-lg"
            >
              Hire Me
            </a>
            <a
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-md font-medium shadow-md"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-6 text-3xl">
            <a
              href="https://github.com/raheemkhan12345/Mini_project1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content (Profile Image) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            <img
              src={profileImage}
              alt="Profile"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-300 shadow-blue-200 object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-2xl"
            />
            {/* Optional hover glow */}
            <div className="absolute inset-0 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;