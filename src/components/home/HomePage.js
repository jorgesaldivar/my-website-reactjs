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
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [t, i18n] = useTranslation("common");
  return (
    <>
      <NavHeader
        home={t("NavHeader.home")}
        contact={t("NavHeader.contact")}
        source={t("NavHeader.source")}
      />
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
