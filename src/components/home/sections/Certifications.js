import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Certifications = () => {
  return (
    <Container>
      <h2 class="text-center">Certifications</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>ITIL Foundation - 2013</Card.Header>
            <Card.Body>
              <Image src="/images/itil.png" thumbnail />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header>OCA Java SE 7 - 2014</Card.Header>
            <Card.Body>
              <Image src="/images/oca_java.png" thumbnail />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header>OCE SQL Expert - 2016</Card.Header>
            <Card.Body>
              <Image src="/images/oce_sql.png" thumbnail />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>OCP Java Professional - 2017</Card.Header>
            <Card.Body>
              <Image src="/images/OCP.png" thumbnail />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Header>OCP Java Professional - 2018</Card.Header>
            <Card.Body>
              <Image src="/images/OCP-8.png" thumbnail />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Certifications;
