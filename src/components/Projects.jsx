import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce",
    description:
      "Full-stack E-commerce app using React.js, Express.js, Redux, and React Router.",
    liveLink: "https://dulcet-chimera-a0098f.netlify.app/",
    github: "https://github.com/Kiranthakurcoder/E-commerce.com",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A simple and fun Tic Tac Toe game built using HTML, CSS, and JavaScript.",
    liveLink: "https://kiranthakurcoder.github.io/Tic-Tac-Toe.in/",
    github: "https://github.com/Kiranthakurcoder/Tic-Tac-Toe.in",
  },
  {
    title: "Stone Paper Scissors",
    description:
      "A classic game recreated with clean UI and responsive design.",
    liveLink: "https://kiranthakurcoder.github.io/stone-paper-scissors/",
    github: "https://github.com/Kiranthakurcoder/stone-paper-scissors",
  },
  {
    title: "Weather App",
    description:
      "Check real-time weather using OpenWeather API. Built with HTML, CSS, JS.",
    liveLink: "https://kiranthakurcoder.github.io/WeatherApp.com/",
    github: "https://github.com/Kiranthakurcoder/WeatherApp.com",
  },
  {
    title: "ToDo-List",
    description: "A To-Do app with task add, delete, and complete features.",
    liveLink: "https://kiranthakurcoder.github.io/Todo-List/",
    github: "https://github.com/Kiranthakurcoder/Todo-List",
  },
];

const Projects = () => {
  const colorClasses = [
    "from-orange-500 to-pink-500",
    "from-purple-600 to-pink-400",
    "from-blue-500 to-sky-400",
    "from-green-500 to-lime-400",
    "from-indigo-600 to-violet-500",
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-br from-white to-orange-50"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl text-white bg-gradient-to-br ${
              colorClasses[index % colorClasses.length]
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-6">{project.description}</p>
            <div className="flex items-center justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold underline"
              >
                Live <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold underline"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
