/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import styles from "./JumboTron.module.css";
import { useTranslation } from "react-i18next";

const JumboTron = ({ jumboTron }) => {
  const [, i18n] = useTranslation("common");
  return (
    <Jumbotron className={styles.main}>
      <Container>
        <div className="text-right">
          <Col className="d-block d-sm-none">
            <br />
          </Col>
          <a
            className="link-buttons"
            href=""
            onClick={(event) => {
              event.preventDefault();
              i18n.changeLanguage("en");
            }}
          >
            English
          </a>{" "}
          /{" "}
          <a
            className="link-buttons"
            href=""
            onClick={(event) => {
              event.preventDefault();
              i18n.changeLanguage("es");
            }}
          >
            Español
          </a>
        </div>
        <br />
        <br />
        <div className="text-center">
          <h1 className={styles.title}>Jorge Saldivar</h1>
          <h6>{jumboTron.title}</h6>
        </div>
        <br />
        <Row className="d-block d-sm-none">
          <Col> &nbsp;</Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default JumboTron;
