import React from "react";
import aboutImage from "../assets/images/profile.jpg"; // apni image ka path

const About = () => {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={aboutImage}
              alt="About"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hello! I'm <span className="font-semibold">Abdul Rahim</span>, a passionate
              frontend developer who loves building modern and responsive web
              applications. I have experience in HTML, CSS, JavaScript and I
              enjoy working with modern frameworks like React.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I focus on creating clean UI designs, improving user experience,
              and writing maintainable code. I am always learning new
              technologies to improve my development skills.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
              <p><span className="font-semibold">Name:</span> Abdul Rahim</p>
              <p><span className="font-semibold">Email:</span> raheemkhan.rk12345@gmail.com</p>
              <p><span className="font-semibold">Location:</span> Pakistan</p>
              <p><span className="font-semibold">Availability:</span> Freelance</p>
            </div>

            {/* Button */}
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
            >
              View My Projects
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;