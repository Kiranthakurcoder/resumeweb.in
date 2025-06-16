import React from "react";

import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 px-6  py-12 md:px-24 lg:px-32">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">About Me</h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Bio Section */}
          <div>
            <p className="text-lg leading-7 mb-4">
              Hi! I'm{" "}
              <span className="font-semibold text-orange-500">
                Kiran Thakur
              </span>
              , a dedicated Front-End Developer with a love for clean design and
              interactive web experiences. I specialize in <strong>HTML</strong>
              , <strong>CSS</strong>, and <strong>JavaScript</strong> — and I’ve
              recently started mastering <strong>React.js</strong> 🚀
            </p>

            <p className="text-lg leading-7 mb-4">
              Here are some projects I've built with passion and purpose:
              <ul className="list-disc list-inside mt-2 space-y-2 text-base text-gray-700">
                <li>
                  <strong>E-commerce App:</strong> Built using <em>React.js</em>
                  , <em>Redux</em>, <em>React Router</em>, and{" "}
                  <em>Express.js (Backend)</em>. Implemented product listings,
                  cart functionality, and dynamic routing with API data
                  fetching.
                </li>
                <li>
                  <strong>Resume Website:</strong> A modern and fully responsive
                  resume website built using <em>React.js</em> on the frontend
                  and <em>Node.js/Express.js</em> on the backend. Includes
                  dynamic routing, protected pages, user registration/login, and
                  form data submission with database connectivity. Designed to
                  showcase my portfolio, skills, and personal brand with smooth
                  UI interactions.
                </li>

                <li>
                  <strong>Weather App:</strong> Created using pure <em>HTML</em>
                  , <em>CSS</em>, and <em>JavaScript</em>, with real-time
                  weather data fetched from the <em>OpenWeather API</em>.
                </li>
                <li>
                  <strong>Tic Tac Toe Game:</strong> A classic 2-player game
                  using <em>JavaScript DOM logic</em> with a clean, responsive
                  interface.
                </li>
                <li>
                  <strong>Stone Paper Scissors:</strong> A fun logic-based game
                  powered by <em>JavaScript condition handling</em> and event
                  listeners.
                </li>
                <li>
                  <strong>To-Do List:</strong> Simple and intuitive task manager
                  with <em>add</em>, <em>delete</em>, and <em>complete</em>{" "}
                  features built in HTML, CSS, and JS.
                </li>
              </ul>
            </p>

            <p className="text-lg leading-7 mb-4">
              I'm a self-driven learner — even though my formal degree is still
              in progress, my passion and practical skills speak louder. I
              follow the wisdom of <span className="italic">“Karma Yoga”</span>{" "}
              from the Bhagavad Gita:{" "}
              <em>Do your duty without attachment to the results</em>. That’s
              how I grow every day.
            </p>

            <p className="text-lg leading-7">
              I'm actively seeking a Front-End Developer role in{" "}
              <strong>Hyderabad</strong>. I believe in building beautiful,
              useful, and accessible web experiences. Let’s connect and create
              something amazing together! ✨
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
