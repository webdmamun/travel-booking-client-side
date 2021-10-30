import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "./../../Hooks/useAuth";

const HotelDetail = () => {
  const { hotelID } = useParams();
  const [hotel, setHotel] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const bookedHotelID = { hotelID };
    data.bookedHotelID = bookedHotelID;
    fetch("http://localhost:5000/bookedhotel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Hotel Booked Successfully! We wil contact you soon!!");
          reset();
        } else {
          alert("please try again");
        }
      });
  };

  // load single Service
  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${hotelID}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelID]);

  return (
    <div>
      <Container>
        <Row>
          <h2>Title: {hotel.hotel_name}</h2>
          <p>Location: {hotel.location}</p>
          <p>Rating: {hotel.rating}</p>
          <p>Cost Per night{hotel.pernight}</p>
          <p>Phone: {hotel.phone}</p>
          <p>Email: {hotel.email}</p>
        </Row>
        <Row>
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />

            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />

            <input type="submit" />
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default HotelDetail;
