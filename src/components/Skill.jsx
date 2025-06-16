import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiMysql, SiMongodb } from "react-icons/si";

const Skill = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "92%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: "85%",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400" />,
      level: "80%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: "56%",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500" />,
      level: "75%",
    },
    {
      name: "Tailwind CSS",
      icon: <span className="text-sky-500 text-4xl font-bold">T</span>,
      level: "80%",
    },
    { name: "SQL", icon: <SiMysql className="text-blue-700" />, level: "60%" },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "55%",
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen px-4 sm:px-6 py-16 bg-white text-gray-800 overflow-x-hidden"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl sm:text-4xl">{skill.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                {skill.name}
              </h3>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="mt-2 text-right font-medium text-gray-600">
              {skill.level}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
