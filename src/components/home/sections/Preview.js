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

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <Carousel controls={true} interval={3000}>
          <Carousel.Item>
            <img alt="Study! Study! Study! - Kintaro Oe" />
          </Carousel.Item>
          <Carousel.Item>
            <img alt="Thinking outside the box" />
          </Carousel.Item>
        </Carousel> */}

        <br />
      </Container>
    </div>
  );
};

export default Preview;
