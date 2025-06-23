import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import heroImage from "../assets/image.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero-container overflow-hidden w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24 md:pt-0 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-[#495057] text-2xl tracking-tight">
          hell<span className="text-pink-500">o</span>, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-2 font-extrabold text-[#495057] tracking-tight font-poppins">
          Thakur Kiran
        </h1>

        <span className="text-purple-500 text-3xl md:text-5xl font-bold block mt-2">
          <Typewriter
            words={["HTML", "CSS", "JavaScript", "React.JS", "& Node.js"]}
            loop={Infinity}
            cursor
            cursorStyle="!"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="bg-[#ff7a57] text-white font-semibold uppercase px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer">
            Hire Me
          </h2>

          <a
            href="/Kiran-Thakur-resume.pdf"
            download
            className="bg-[#343a40] text-white font-semibold uppercase px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 justify-center md:justify-start text-3xl mt-6 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-pink-400" />
          </a>
          <a
            href="https://wa.me/919912018462"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-pink-400" />
          </a>

          <a href="mailto:kiranthakur1407@gmail.com">
            <MdEmail className="hover:text-pink-400" />
          </a>
          <a
            href="https://github.com/kiranthakurcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-pink-400" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={heroImage}
          alt="hero"
          className="h-64 sm:h-80 md:h-[500px] w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
