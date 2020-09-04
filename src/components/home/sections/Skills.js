import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  return (
    <Container className="text-center skills">
      <h2 class="text-center">Skills</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "java"]} size="2x" />
            <span>&nbsp;</span>

            <h4>JAVA</h4>
            <p>Back-End</p>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "js-square"]} size="2x" />
            <span>&nbsp;</span>

            <h4>JAVASCRIPT</h4>
            <p>Front-End</p>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "python"]} size="2x" />
            <span>&nbsp;</span>
            <h4>PYTHON</h4>
            <p>Back-End</p>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={faLeaf} size="2x" />
            <span>&nbsp;</span>
            <h4>Spring Framework</h4>
            <p>Java Framework</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            <span>&nbsp;</span>
            <h4>Git</h4>
            <p>Version control</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
            <span>&nbsp;</span>
            <h4>ReactJS</h4>
            <p>JavaScript Library</p>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "docker"]} size="2x" />
            <span>&nbsp;</span>
            <h4>Docker</h4>
            <p>Containerization</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <span>&nbsp;</span>
            <h4>SQL/NoSQL</h4>
            <p>Databases</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <span>&nbsp;</span>
            <FontAwesomeIcon icon={["fab", "linux"]} size="2x" />
            <span>&nbsp;</span>
            <h4>UNIX</h4>
            <p>Scripting</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
