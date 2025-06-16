import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, label: "HTML", color: "#E34F26" },
  { icon: <FaCss3Alt />, label: "CSS", color: "#1572B6" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A" },
  { icon: <FaDatabase />, label: "MongoDB", color: "#47A248" },
];

const FullStackDeveloper = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-pink-50 to-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#a100f2] mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I build scalable, secure, and beautiful web applications using modern
          frontend and backend technologies.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-10 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FullStackDeveloper;
