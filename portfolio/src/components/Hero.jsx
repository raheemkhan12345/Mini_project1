import React from "react";
import profileImage from "../assets/images/profile.jpg"; // apni profile image path
import myResume from "../assets/images/resume.pdf"; // apni resume file path


const Hero = () => {
  return (
    <div id="home" className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Abdul Rahim
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6">
            Frontend Developer | React & Tailwind Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={'#contact'}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md text-white font-medium"
            >
              Hire Me
            </a>
            <a
              href={myResume}
              className="border border-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-md font-medium"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-6 text-2xl">
            <a href="https://github.com/raheemkhan12345/Mini_project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abdul-rahim-07224824a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Content (Profile Image) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profile"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-600 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;