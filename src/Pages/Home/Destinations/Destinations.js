/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Destinations.css";

const Destinations = () => {
  return (
    <div>
      <Container className="py-5">
        <h2 className="destination-heading">Top Destinations</h2>
        <Row>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2014/11/cali_5-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>CALIFORNIA</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/los_angeles_3-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>LOS ANGELES</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2015/02/san_francisco-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>MIAMI</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2015/02/cheapest-car-insurance-in-new-jersey-nj-story-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW JERSEY</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/united-270x335.jpg"
                alt="image"
              />
              <figcaption>SAN FRANCISCO</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW YORK</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/nevaga_2-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>NEVADA</figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/11/gallary_6-1-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW ORLEANS</figcaption>
            </figure>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;
