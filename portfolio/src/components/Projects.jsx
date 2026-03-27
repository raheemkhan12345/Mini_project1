import React from "react";
import { FaCloudSun, FaDollarSign, FaRobot, FaShoppingCart } from "react-icons/fa"; 
const Projects = () => {

  const projectData = [
    {
      title: "Weather App",
      description:
        "A weather application that shows real-time weather information using an API.",
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/weather%20app",
      icon: <FaCloudSun className="text-6xl text-blue-400 mx-auto my-4" />
    },
    {
      title: "Currency Converter",
      description:
        "A currency converter that converts different currencies using live exchange rates.",
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/06CurrencyConvertor",
      icon: <FaDollarSign className="text-6xl text-green-400 mx-auto my-4" />
    },
    {
      title: "School Chatbot",
      description:
        "A chatbot integrated using Dialogflow that answers school related questions.",
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/SchoolChatbot",
      icon: <FaRobot className="text-6xl text-purple-400 mx-auto my-4" />
    },
    {
      title : "Watch Store E-commerce website",
      description : "A responsive and modern frontend for Watch-Store, an e-commerce website showcasing watches with smooth user interactions.",
      github : "https://github.com/raheemkhan12345/Mini_project1/tree/main/ecommerce-project",
      icon : <FaShoppingCart className="text-xl text-purple-400 mx-auto my-4" />
    }
  ];

  return (
    <section id="projects" className="w-full bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              {/* Project Icon */}
              <div className="flex justify-center items-center h-48 bg-gray-800">
                {project.icon}
              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3 text-center">
                  {project.description}
                </p>

                <p className="text-blue-400 text-sm mb-4 text-center">
                  {project.tech}
                </p>

                {/* Buttons */}
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-blue-600 border-solid transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;