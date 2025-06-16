import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center text-black px-20 py-3 font-sans  bg-white/30 ">
        {/* Logo Section */}
        <div className="logo-container flex items-center">
          <h1 className="text-3xl tracking-tight font-bold text-orange-400">
            Kiran Thakur
          </h1>
        </div>

        {/* Link Section */}
        <ul className="flex gap-6 items-center">
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <a href="#skills">
            <li className="hover:text-pink-400 cursor-pointer">Skills</li>
          </a>
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/project">Projects</Link>
          </li>
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-pink-400 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <a href="https://github.com/Kiranthakurcoder/resumeweb.in">
            <li className="bg-orange-400 w-24 rounded-3xl border-amber-400 p-2 text-center hover:bg-pink-400">
              GitHub
            </li>
          </a>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md px-6 py-3 flex justify-between items-center font-sans text-black">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-400">Kiran Thakur</div>

        {/* Hamburger Icon */}
        <div
          onClick={toggleMenu}
          className="text-2xl text-pink-500 cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <ul className="md:hidden fixed top-16 left-0 w-full bg-white text-black backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-6 z-40">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleMenu}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li
            className="bg-orange-400 w-32 text-white text-center py-2 rounded-3xl hover:bg-pink-400 transition"
            onClick={toggleMenu}
          >
            Components
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
