import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const ProfileData = () => {
  return (
    <Jumbotron>
      <Container>
        <h3>Words that Describe Myself</h3>

        <div
          id="myCarousel"
          class="carousel slide text-center"
          data-ride="carousel"
        >
          <div class="container">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <h5>"Study! Study! Study! - Kintaro Oe"</h5>
              </div>

              <div class="item">
                <h5>"Thinking outside the box"</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default ProfileData;
