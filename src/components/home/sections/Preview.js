import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Preview.css";

const Preview = (props) => {
  return (
    <div className="well">
      <Container className="carousel text-center">
        <br />
        <h3>{props.title}</h3>
        <br />

        <Carousel controls={true} interval={3000}>
          <Carousel.Item>
            <img alt={props.firstItem} />
          </Carousel.Item>
          <Carousel.Item>
            <img alt={props.secondItem} />
          </Carousel.Item>
        </Carousel>

        <br />
      </Container>
    </div>
  );
};

export default Preview;
