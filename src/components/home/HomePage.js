import React from "react";
import "./HomePage.css";
import NavHeader from "../common/NavHeader";
import JumboTron from "./sections/JumboTron";
import AboutMe from "./sections/AboutMe";
import ProfileData from "./sections/ProfileData";
import Certifications from "./sections/Certifications";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <>
      <NavHeader />
      <JumboTron />
      <AboutMe />
      <ProfileData />
      <div className="back-pattern">
        <Certifications />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
