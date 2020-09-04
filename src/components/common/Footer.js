import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <br />
      <Container>
        <hr />
        <Row>
          <Col sm={6}>
            <span>
              © {new Date().getFullYear()} JorgeSaldivar.com. All rights
              reserved.
            </span>
          </Col>

          <Col sm={6} className="footer text-right">
            <a
              href="https://github.com/jorgesaldivar"
              target="_blank"
              rel="external"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>

            <span>&nbsp;</span>

            <a
              href="https://www.linkedin.com/in/jorgesaldivar1"
              target="_blank"
              rel="external"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </a>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default Footer;
