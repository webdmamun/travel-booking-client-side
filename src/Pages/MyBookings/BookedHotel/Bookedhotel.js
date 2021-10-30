import React, { useEffect, useState } from "react";

const Bookedhotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookedhotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <h2>booked data {hotels.length} </h2>
    </div>
  );
};

export default Bookedhotel;
