import React, { useEffect, useState } from "react";

const BookedService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookedservice")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {" "}
      <h2>booked data {services.length} </h2>
    </div>
  );
};

export default BookedService;
