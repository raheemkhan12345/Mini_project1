import React from "react";

const Skills = () => {

  const skills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "GitHub", level: "Intermediate" },

  ];

  return (
    <section id="skills" className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  " >

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:scale-105 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-2">
                {skill.name}
              </h3>

              <p className="text-blue-400 text-sm">
                {skill.level}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;