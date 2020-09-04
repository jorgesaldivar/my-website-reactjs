import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Projects = (props) => {
  return (
    <Container>
      <h2 class="text-center">{props.title}</h2>

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
                {props.firstItem}
              </a>
            </Card.Header>
            <Card.Body>
              <a
                href="https://hubbledouble.com"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <Image src="/images/hubbledouble.png" thumbnail />
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header>
              <a
                href="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
                rel="external noopener noreferrer"
              >
                {props.secondItem}
              </a>
            </Card.Header>
            <Card.Body>
              <a
                href="https://www.udemy.com/course/curso-completo-de-spring-web-mvc-y-spring-webflux-reactive/?referralCode=BEC9DEE4C57BE89F23E4"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <Image src="/images/spring-udemy-logo.png" thumbnail />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
