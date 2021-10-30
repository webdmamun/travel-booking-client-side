import { Container, Nav } from "react-bootstrap";
import "./MyBookings.css";
import { NavLink } from "react-router-dom";

const MyBookings = () => {
  return (
    <div>
      <Container>
        <Nav.Link
          as={NavLink}
          to="/bookedhotel"
          className="nav-item"
          activeStyle={{
            fontWeight: "bold",
            color: "#419DE2",
          }}
        >
          Booked Hotel
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/bookedservice"
          className="nav-item"
          activeStyle={{
            fontWeight: "bold",
            color: "#419DE2",
          }}
        >
          Booked Services
        </Nav.Link>
      </Container>
    </div>
  );
};

export default MyBookings;
