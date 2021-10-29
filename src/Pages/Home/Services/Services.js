import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
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
    </div>
  );
};

export default Services;