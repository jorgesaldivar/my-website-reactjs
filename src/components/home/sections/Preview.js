import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Preview.css";

const Preview = () => {
  return (
    <div className="well">
      <Container className="carousel text-center">
        <br />
        <h3>Words that Describe Myself</h3>
        <br />

        <Carousel controls={true} interval={3000}>
          <Carousel.Item>
            <img alt="Study! Study! Study! - Kintaro Oe" />
          </Carousel.Item>
          <Carousel.Item>
            <img alt="Thinking outside the box" />
          </Carousel.Item>
        </Carousel>

        <br />
      </Container>
    </div>
  );
};

export default Preview;
