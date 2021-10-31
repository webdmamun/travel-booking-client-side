import { Container } from "react-bootstrap";
import "./MyBookings.css";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const [services, setServices] = useState([]);
  const [hotels, setHotels] = useState([]);

  // load booked services
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/bookedservice")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // load booked hotels
  useEffect(() => {
    fetch("https://calm-plateau-06503.herokuapp.com/bookedhotel")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
      });
  }, []);

  // Delete a Service
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      const url = `https://calm-plateau-06503.herokuapp.com/bookedservice/${id}`;
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
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      const url = `https://calm-plateau-06503.herokuapp.com/bookedhotel/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remainingHotel = hotels.filter((hotel) => hotel._id !== id);
            setHotels(remainingHotel);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <h2 className="py-5 text-center text-info">
          My booked confirm Services: {services.length}
        </h2>

        <div>
          {services.map((service) => (
            <div className="manage-booking-card" key={service._id}>
              <h2>Package Booking ID : {service._id}</h2>
              <h2>Name : {service.name}</h2>
              <p>{service.email}</p>
              <p>{service.address}</p>
              <p>{service.city}</p>
              <p>{service.phone}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteService(service._id)}
              >
                Delete Service
              </button>
            </div>
          ))}
        </div>

        <h2 className="py-5 text-center text-info">
          My Booked confirm Hotels: {hotels.length}
        </h2>
        <div>
          {hotels.map((hotel) => (
            <div className="manage-booking-card" key={hotel._id}>
              <h2>name : {hotel.name}</h2>
              <p>{hotel.email}</p>
              <p>{hotel.address}</p>
              <p>{hotel.city}</p>
              <p>{hotel.phone}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteHotel(hotel._id)}
              >
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
