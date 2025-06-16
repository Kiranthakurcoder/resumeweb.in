import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center gap-10 px-10 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold uppercase text-gray-800 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Crafting the Code
      </motion.h1>

      {/* Images */}
      <div className="w-full h-full flex gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-1/2"
        >
          <img
            src={work1}
            alt="Work Image"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-1/2"
        >
          <img
            src={work2}
            alt="Work Image"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
