import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import skills from "./AboutMe.module.css";

const AboutMe = (props) => {
  return (
    <div className={skills.aboutMeContainer}>
      <Container>
        <Row>
          <Col sm={9}>
            <Card>
              <Card.Body className={skills.well}>
                <h2>{props.about}</h2>

                <strong>{props.educationTitle}</strong>
                <p>{props.education}</p>

                <strong>{props.experienceTitle}</strong>
                <p>{props.experience}</p>

                <ul>
                  <li>{props.experienceOne}</li>
                  <li>{props.experienceTwo}</li>
                  <li>{props.experienceThree}</li>
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
              {props.resume}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
