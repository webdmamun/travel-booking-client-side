import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="full-services-area">
      <Container>
        <Row className="py-5">
          <Col>
            <h2 className="services-heading">Top Trending Activities!!!</h2>
          </Col>
          <Col></Col>
        </Row>
        {services.length === 0 ? (
          <Spinner className="loading-spinner" animation="grow" />
        ) : (
          <div className="row gy-3">
            {services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Services;
