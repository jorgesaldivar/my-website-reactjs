import React from "react";
import { Jumbotron, Container, Col } from "react-bootstrap";
import "./JumboTron.css";

const JumboTron = () => {
  return (
    <Jumbotron>
      <Container>
        <div className="text-right">
          <a href="?lang=en">English</a> / <a href="?lang=es">Español</a>
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
