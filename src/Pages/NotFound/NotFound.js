import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Container className="notfound-container">
        <img
          className="error-image"
          src="https://themepure.net/template/educal/educal/assets/img/error/error.png"
          alt=""
        />
        <h1 className="text-center fw-bold">Page Not Found!</h1>
        <p className="text-center fw-bold">
          Please try searching for some other page.
        </p>
        <div className="text-center">
          <button className="btn btn-primary">
            <Link to="/home" className="back-home-btn">
              Back To Home
            </Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
