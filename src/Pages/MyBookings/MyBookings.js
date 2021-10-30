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

  // Delete a Service
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/bookedservice/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remainingServices = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };

  // Delete a hotel
  const handleDeleteHotel = (id) => {
    const url = `http://localhost:5000/bookedhotel/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then();
  };

  return (
    <div>
      <Container>
        <h2>My booked confirm Services</h2>
        <h3>{services.length}</h3>

        <div>
          {services.map((service) => (
            <div key={service._id}>
              <h2>name : {service.name}</h2>
              <p>{service.email}</p>
              <p>{service.address}</p>
              <p>{service.city}</p>
              <p>{service.phone}</p>
              <button onClick={() => handleDeleteService(service._id)}>
                Delete Service
              </button>
            </div>
          ))}
        </div>

        <h2>My Booked confirm Hotels</h2>
        <h3>{hotels.length}</h3>
        <div>
          {hotels.map((hotel) => (
            <div key={hotel._id}>
              <h2>name : {hotel.name}</h2>
              <p>{hotel.email}</p>
              <p>{hotel.address}</p>
              <p>{hotel.city}</p>
              <p>{hotel.phone}</p>
              <button onClick={() => handleDeleteHotel(hotel._id)}>
                Delete Hotel
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
