import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <Container className="text-center">
      <h2 class="text-center">SKILLS</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <br />

            <FontAwesomeIcon icon={faCoffee} />

            <h4>JAVA</h4>
            <p>Back-End</p>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <br />
            <span class="glyphicon glyphicon-heart logo-small"></span>
            <h4>JAVASCRIPT</h4>
            <p>Front-End</p>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-code fa-lg"></span>
            <h4>PYTHON</h4>
            <p>Back-End</p>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-leaf fa-lg"></span>
            <h4>Spring Framework</h4>
            <p>Java Framework</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-book fa-lg"></span>
            <h4>JQUERY</h4>
            <p>JavaScript Library</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-pencil-square-o fa-lg"></span>
            <h4>ReactJS</h4>
            <p>JavaScript Library</p>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-cube fa-lg"></span>
            <h4>Hibernate</h4>
            <p>ORM Framework</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-database fa-lg"></span>
            <h4>SQL/NoSQL</h4>
            <p>DBS</p>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <br />
            <span class="fa fa-linux fa-lg"></span>
            <h4>UNIX</h4>
            <p>Scripting</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
