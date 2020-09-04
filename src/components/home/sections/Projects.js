import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Container>
      <h2 class="text-center">Projects</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>
              <a
                href="https://hubbledouble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                My open source libraries
              </a>
            </Card.Header>
            <Card.Body>
              <Link to="https://hubbledouble.com" target="_blank">
                <Image src="/images/hubbledouble.png" thumbnail />
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header>
              <Link
                to="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
              >
                Udemy Instructor
              </Link>
            </Card.Header>
            <Card.Body>
              <Link
                to="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
              >
                <Image src="/images/spring-udemy-logo.png" thumbnail />
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
