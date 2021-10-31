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
    fetch("https://calm-plateau-06503.herokuapp.com/bookedhotel", {
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
    fetch(`https://calm-plateau-06503.herokuapp.com/hotels/${hotelID}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelID]);

  return (
    <div>
      <Container>
        <Row>
          <h2 className="py-5 text-center text-info">
            Details information of the Hotel
          </h2>
          <img className="detail-cover-image" src={hotel.img} alt="" />
          <h2 className="pt-3 text-center text-secondary">
            {hotel.hotel_name}
          </h2>
          <p className="text-center text-secondary">
            Location: {hotel.location}
          </p>
          <p className="text-center text-secondary">Rating: {hotel.rating}</p>
          <p className="text-center text-secondary">
            Cost Per Night: ${hotel.pernight}
          </p>
          <p className="text-center text-secondary">Phone: {hotel.phone}</p>
          <p className="text-center text-secondary">Email: {hotel.email}</p>
        </Row>
        <Row>
          <h2 className="pt-5 text-center text-info">
            Please fill-up the form to confirm the package booking
          </h2>
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
