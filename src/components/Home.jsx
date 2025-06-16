import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skill from "./Skill";
import Footer from "./Footer";
import Work from "./Work";
import FullStackDeveloper from "./FullStackDeveloper";

import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <FullStackDeveloper />
      <Skill />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
