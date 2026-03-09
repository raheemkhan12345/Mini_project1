import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Hello! I'm <span className="font-semibold">Abdul Rahim</span>, a passionate
          frontend developer who enjoys building modern and responsive web
          applications using React and Tailwind CSS. I love solving problems
          and creating useful web applications.
        </p>

        {/* Mini Projects Section */}
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          My Mini Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Weather App */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h4 className="text-xl font-bold mb-3">Weather App</h4>
            <p className="text-gray-600 mb-4">
              A responsive weather application built using React that allows
              users to check real-time weather conditions of any city.
            </p>
            <span className="text-blue-600 font-medium">
              Tech: React, API
            </span>
          </div>

          {/* Currency Converter */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h4 className="text-xl font-bold mb-3">Currency Converter</h4>
            <p className="text-gray-600 mb-4">
              A currency converter application that converts different
              currencies using live exchange rate APIs.
            </p>
            <span className="text-blue-600 font-medium">
              Tech: React, API
            </span>
          </div>

          {/* School Chatbot */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h4 className="text-xl font-bold mb-3">School Chatbot</h4>
            <p className="text-gray-600 mb-4">
              A smart chatbot integrated with Dialogflow that helps students
              get school-related information automatically.
            </p>
            <span className="text-blue-600 font-medium">
              Tech: Dialogflow
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;