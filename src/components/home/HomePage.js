import React, { useState, useEffect } from "react";
import "./HomePage.module.css";
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
  const [t] = useTranslation("common");
  const [navHeader, setNavHeader] = useState({});
  const [jumboTron, setJumboTron] = useState({});
  const [aboutMe, setAboutMe] = useState({});
  const [preview, setPreview] = useState({});
  const [certifications, setCertifications] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavHeader({
      home: t("NavHeader.home"),
      contact: t("NavHeader.contact"),
      source: t("NavHeader.source"),
    });
    setJumboTron({ title: t("JumboTron.title") });
    setAboutMe({
      about: t("AboutMe.about"),
      educationTitle: t("AboutMe.educationTitle"),
      education: t("AboutMe.education"),
      experienceTitle: t("AboutMe.experienceTitle"),
      experience: t("AboutMe.experience", {
        years: new Date().getFullYear() - new Date(2013, 6, 1).getFullYear(),
      }),
      experienceOne: t("AboutMe.experienceOne"),
      experienceTwo: t("AboutMe.experienceTwo"),
      experienceThree: t("AboutMe.experienceThree"),
      resume: t("AboutMe.resume"),
    });
    setPreview({
      title: t("Preview.title"),
      firstItem: t("Preview.firstItem"),
      secondItem: t("Preview.secondItem"),
    });
    setCertifications({ title: t("Certifications.title") });
    setSkills({ title: t("Skills.title") });
    setProjects({
      title: t("Projects.title"),
      firstItem: t("Projects.firstItem"),
      secondItem: t("Projects.secondItem"),
    });
    setFooter({ copyrights: t("Footer.copyrights") });
  }, [t]);

  return (
    <>
      <NavHeader navHeader={navHeader} />
      <JumboTron jumboTron={jumboTron} />
      <AboutMe aboutMe={aboutMe} />
      <Preview preview={preview} />
      <div className="back-pattern">
        <br />
        <br />
        <Projects projects={projects} />
        <br />
        <hr />
        <br />
        <Certifications certifications={certifications} />
        <br />
        <hr />
        <br />
        <Skills skills={skills} />
      </div>
      <Footer footer={footer} />
    </>
  );
};

export default HomePage;
