import { Container } from "react-bootstrap";
import "./MyBookings.css";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const [services, setServices] = useState([]);
  const [hotels, setHotels] = useState([]);

  // load booked services
  useEffect(() => {
    fetch("http://localhost:5000/bookedservice")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // load booked hotels
  useEffect(() => {
    fetch("http://localhost:5000/bookedhotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <div>
      <Container>
        <h2>My booked confirm Services</h2>
        <h3>{services.email}</h3>
        <button>Delete Service</button>
        <h2>My Booked confirm Hotels</h2>
        <h3>{hotels.email}</h3>
        <button>Delete Hotel</button>
      </Container>
    </div>
  );
};

export default MyBookings;
