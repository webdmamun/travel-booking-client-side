import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Hotel from "./Hotel/Hotel";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div className="full-hotel-area">
      <Container>
        <Row className="py-5">
          <Col>
            <h2 className="services-heading">Recommended Hotels</h2>
          </Col>
          <Col className="search-box">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search where you want to live?"
                aria-label="Search where you want to live?"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-secondary">Search</button>
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
  );
};

export default Hotels;
