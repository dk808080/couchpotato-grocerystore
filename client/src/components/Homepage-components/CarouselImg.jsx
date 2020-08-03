import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function CarouselImg() {
  return (
    <Container className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.bigbasket.com/media/uploads/banner_images/2007005_medicinal-herbs_460.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.bigbasket.com/media/uploads/banner_images/2007010_hk-essentials_460_2nd.jpg"
            alt="Second  slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.bigbasket.com/media/uploads/banner_images/2007247_the-beauty-bar_460.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselImg;
