/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Jumbotron, Container, Col, Button } from "react-bootstrap";
import "./JumboTron.css";
import { useTranslation } from "react-i18next";

const JumboTron = () => {
  const [t, i18n] = useTranslation("common");
  return (
    <Jumbotron>
      <Container>
        <div className="text-right">
          <a
            className="link-buttons"
            href="#"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </a>{" "}
          /{" "}
          <a href="#" onClick={() => i18n.changeLanguage("es")}>
            Español
          </a>
        </div>
        <div className="text-center">
          <h1>Jorge Saldivar</h1>
          <h6>- Passionate Software Guru -</h6>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default JumboTron;
