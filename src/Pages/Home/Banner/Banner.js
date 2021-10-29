import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="banner-image"
            src="https://i.ibb.co/kgt7gJX/flight-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Let's Discover the <br />
              world together!
            </h3>
            <p className="slide-sub-title">Over 100 Airlines</p>
            <p className="slide-sub-title">More than 5,000 places</p>
            <p className="slide-sub-title">Best Price Guarantee</p>
            <p className="slide-sub-title">Customer Care</p>
            <Link to="/register">
              <button className="btn btn-lg btn-info slide-button">
                FIND OUT MORE
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-image"
            src="https://i.ibb.co/VJzgXGH/hotel-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Finest Luxury <br />
              in Moritz!{" "}
            </h3>
            <p className="slide-sub-title">Over 1000 Hotels</p>
            <p className="slide-sub-title">More than 50,000 places</p>
            <p className="slide-sub-title">Best Price Hotels</p>
            <p className="slide-sub-title">Customer Care 24 hours</p>
            <Link to="/register">
              <button className="btn btn-lg btn-info slide-button">
                FIND OUT MORE
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-image"
            src="https://i.ibb.co/P91fhG1/car-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Upto 25% off on <br /> first booking Car <br />
              through your app!!{" "}
            </h3>
            <p className="slide-sub-title">Best Price Guaranteed</p>
            <p className="slide-sub-title">Home Pickups</p>
            <p className="slide-sub-title">Easy Bookings</p>
            <p className="slide-sub-title">24/7 Customer Care</p>
            <Link to="/register">
              <button className="btn btn-lg btn-info slide-button">
                FIND OUT MORE
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
