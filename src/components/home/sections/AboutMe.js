import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./AboutMe.module.css";

const AboutMe = ({ aboutMe }) => {
  return (
    <div className={styles.aboutMeContainer}>
      <Container>
        <Row>
          <Col sm={9}>
            <Card>
              <Card.Body className={styles.well}>
                <h2>{aboutMe.about}</h2>

                <strong>{aboutMe.educationTitle}</strong>
                <p>{aboutMe.education}</p>

                <strong>{aboutMe.experienceTitle}</strong>
                <p>{aboutMe.experience}</p>

                <ul>
                  <li>{aboutMe.experienceOne}</li>
                  <li>{aboutMe.experienceTwo}</li>
                  <li>{aboutMe.experienceThree}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card>
              <Card.Body className={styles.well}>
                <Card.Img src="images/visa_logo_blu.png" />
              </Card.Body>
            </Card>

            <br />
            <Button type="button" variant="primary" size="lg" block disabled>
              {aboutMe.resume}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
