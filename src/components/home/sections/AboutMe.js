import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Container>
        <Row>
          <Col sm={9}>
            <Card>
              <Card.Body className="well">
                <h2>About me</h2>

                <strong>Education:</strong>
                <p>
                  B.S. in Information and Computer Science at Monterrey
                  Institute of Technology and Higher Education
                </p>

                <strong>Experience:</strong>
                <p>
                  +3 years of experience in software industry. Mostly
                  experienced in programming languages such as Java EE, Spring,
                  JPA, JavaScript, and Oracle SQL for RDBMS. Projects I have
                  worked on:
                </p>

                <ul>
                  <li>Software Development</li>
                  <li>Data Analysis</li>
                  <li>Scripting</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card>
              <Card.Body className="well">
                <Card.Img src="/images/visa_logo_blu.png" />
              </Card.Body>
            </Card>

            <br />
            <Button type="button" variant="primary" size="lg" block disabled>
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
