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
      <JumboTron title={t("JumboTron.title")} />
      <AboutMe
        about={t("AboutMe.about")}
        educationTitle={t("AboutMe.educationTitle")}
        education={t("AboutMe.education")}
        experienceTitle={t("AboutMe.experienceTitle")}
        experience={t("AboutMe.experience", {
          years: new Date().getFullYear() - new Date(2013, 6, 1).getFullYear(),
        })}
        experienceOne={t("AboutMe.experienceOne")}
        experienceTwo={t("AboutMe.experienceTwo")}
        experienceThree={t("AboutMe.experienceThree")}
        resume={t("AboutMe.resume")}
      />
      <Preview
        title={t("Preview.title")}
        firstItem={t("Preview.firstItem")}
        secondItem={t("Preview.secondItem")}
      />
      <div className="back-pattern">
        <br />
        <br />
        <Certifications title={t("Certifications.title")} />
        <br />
        <hr />
        <br />
        <Skills title={t("Skills.title")} />
        <br />
        <hr />
        <br />
        <Projects
          title={t("Projects.title")}
          firstItem={t("Projects.firstItem")}
          secondItem={t("Projects.secondItem")}
        />
      </div>
      <Footer copyrights={t("Footer.copyrights")} />
    </>
  );
};

export default HomePage;
