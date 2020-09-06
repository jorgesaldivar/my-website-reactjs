import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "./Certifications.module.css";

const Certifications = ({ certifications }) => {
  return (
    <Container>
      <h2 className="text-center">{certifications.title}</h2>

      <br />

      <Row>
        <Col sm={4}>
          <Card>
            <Card.Header>ITIL Foundation - 2013</Card.Header>
            <Card.Body>
              <Image src="images/itil.png" fluid className={styles.card} />
            </Card.Body>
          </Card>
        </Col>

        <Row className="d-block d-sm-none">
          <Col> &nbsp;</Col>
        </Row>

        <Col sm={4}>
          <Card>
            <Card.Header>OCA Java SE 7 - 2014</Card.Header>
            <Card.Body>
              <Image src="images/oca_java.png" fluid className={styles.card} />
            </Card.Body>
          </Card>
        </Col>

        <Row className="d-block d-sm-none">
          <Col> &nbsp;</Col>
        </Row>

        <Col sm={4}>
          <Card>
            <Card.Header>OCE SQL Expert - 2016</Card.Header>
            <Card.Body>
              <Image src="images/oce_sql.png" fluid className={styles.card} />
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
              <Image src="images/OCP.png" fluid className={styles.card} />
            </Card.Body>
          </Card>
        </Col>

        <Row className="d-block d-sm-none">
          <Col> &nbsp;</Col>
        </Row>

        <Col sm={4}>
          <Card>
            <Card.Header>OCP Java Professional - 2018</Card.Header>
            <Card.Body>
              <Image src="images/OCP-8.png" fluid className={styles.card} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Certifications;
