import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import "./Services.css";
import Service from "./Service/Service";
import Hotel from "./Hotel/Hotel";

const Services = () => {
  // Load Services
  const [services, setServices] = useState([]);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Load Hotels
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <div className="full-services-area">
        <Container>
          <Row className="py-5">
            <Col>
              <h2 className="services-heading">
                Enjoy Specialized Care Through <br />
                Precision, Artistry, and Experience
              </h2>
            </Col>
            <Col className="search-box">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter your Email..."
                  aria-label="What do you want to learn?"
                  aria-describedby="basic-addon2"
                />
                <button className="btn btn-secondary">Subscribe</button>
              </InputGroup>
            </Col>
          </Row>
          <div className="row gy-3">
            {services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        </Container>
        <Container>
          <Row className="py-5">
            <Col>
              <h2 className="services-heading">
                Enjoy Specialized Care Through <br />
                Precision, Artistry, and Experience
              </h2>
            </Col>
            <Col className="search-box">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter your Email..."
                  aria-label="What do you want to learn?"
                  aria-describedby="basic-addon2"
                />
                <button className="btn btn-secondary">Subscribe</button>
              </InputGroup>
            </Col>
          </Row>
          <div className="row gy-3">
            {hotels.map((hotel) => (
              <Hotel hotel={hotel} key={hotel._id}></Hotel>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
