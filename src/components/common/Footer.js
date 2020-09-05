import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = ({ footer }) => {
  return (
    <>
      <br />
      <Container>
        <hr />
        <Row>
          <Col sm={6}>
            <span>
              © {new Date().getFullYear()} JorgeSaldivar.com.{" "}
              {footer.copyrights}
            </span>
          </Col>

          <Col sm={6} className="footer text-right">
            <a
              href="https://github.com/jorgesaldivar"
              target="_blank"
              rel="external noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="3x"
                className={styles.icons}
              />
            </a>

            <span>&nbsp;</span>

            <a
              href="https://www.linkedin.com/in/jorgesaldivar1"
              target="_blank"
              rel="external noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="3x"
                className={styles.icons}
              />
            </a>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default Footer;
