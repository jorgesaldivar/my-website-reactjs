import React from "react";
import "./HomePage.css";
import NavHeader from "../common/NavHeader";
import JumboTron from "./sections/JumboTron";
import AboutMe from "./sections/AboutMe";
import Preview from "./sections/Preview";
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
      <Preview />
      <div className="back-pattern">
        <br />
        <br />
        <Certifications />
        <br />
        <hr />
        <br />
        <Skills />
        <br />
        <hr />
        <br />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
