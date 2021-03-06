import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="sticky-top">
      <div className="header-top">
        <Container className="pt-2">
          <Row className="justify-content-between">
            <Col className="d-flex justify-content-start">
              <a href="/#" target="_blank">
                <i className="fab fa-facebook-square header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-twitter-square header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-instagram header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin header-left-icon"></i>
              </a>
            </Col>
            <Col className="d-flex header-top-container justify-content-end">
              {user.email ? (
                <Link to="login">
                  <button
                    type="button"
                    className="top-small-button"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <div>
                  <Link className="top-small-button" to="login">
                    Log In
                  </Link>

                  <Link className="top-small-button" to="register">
                    Register
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-container">
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand as={Link} to="/home">
              <img src="https://i.ibb.co/b619SzF/toor-logo.png" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link
                as={NavLink}
                to="/home"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Contact Us
              </Nav.Link>
              {user.email && (
                <Nav.Link
                  as={NavLink}
                  to="/mybookings"
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#419DE2",
                  }}
                >
                  My Booking
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link
                  as={NavLink}
                  to="/manageusers"
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#419DE2",
                  }}
                >
                  Manage Users
                </Nav.Link>
              )}
              {user.email && (
                <Navbar.Text>
                  <a href="/home">{user?.displayName}</a>
                  <img
                    className="mx-3 nav-user-img"
                    src={user.photoURL}
                    alt=""
                  />
                </Navbar.Text>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
