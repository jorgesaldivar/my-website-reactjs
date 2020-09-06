import React from "react";
import { Container, Carousel } from "react-bootstrap";
import styles from "./Preview.module.css";

const Preview = ({ preview }) => {
  return (
    <div className={styles.well}>
      <Container className="text-center">
        <br />

        <Carousel controls={false} interval={3000} prevIcon="" nextIcon="">
          <Carousel.Item>{preview.firstItem}</Carousel.Item>
          <Carousel.Item>{preview.secondItem}</Carousel.Item>
        </Carousel>

        <br />
      </Container>
    </div>
  );
};

export default Preview;
