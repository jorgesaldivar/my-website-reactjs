import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Projects = ({ projects }) => {
  return (
    <Container>
      <h2 className="text-center">{projects.title}</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>
              <a
                href="https://hubbledouble.com"
                target="_blank"
                rel="external noopener noreferrer"
              >
                {projects.firstItem}
              </a>
            </Card.Header>
            <Card.Body>
              <a
                href="https://hubbledouble.com"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <Image
                  src="/my-website-reactjs/images/hubbledouble.png"
                  thumbnail
                />
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Row className="d-block d-sm-none">
          <Col> &nbsp;</Col>
        </Row>

        <Col sm={4}>
          <Card>
            <Card.Header>
              <a
                href="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
                rel="external noopener noreferrer"
              >
                {projects.secondItem}
              </a>
            </Card.Header>
            <Card.Body>
              <a
                href="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <Image
                  src="/my-website-reactjs/images/spring-udemy-logo.png"
                  thumbnail
                />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
