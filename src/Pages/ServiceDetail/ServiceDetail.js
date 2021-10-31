import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "./../../Hooks/useAuth";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  const [service, setService] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const bookedServiceID = { serviceID };
    data.bookedService = bookedServiceID;
    fetch("https://calm-plateau-06503.herokuapp.com/bookedservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert(
            "Your tour planning received Successfully! We wil contact you soon!!"
          );
          reset();
        } else {
          alert("please try again");
        }
      });
  };

  // load single Service
  useEffect(() => {
    fetch(`https://calm-plateau-06503.herokuapp.com/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceID]);

  return (
    <div>
      <Container>
        <Row>
          <h2 className="py-5 text-center text-info">
            Details information of the Package
          </h2>
          <img className="detail-cover-image" src={service.img} alt="" />
          <h2 className="pt-3 text-center text-secondary">{service.title}</h2>
          <p className="text-center text-secondary">
            Location: {service.location}
          </p>
          <p className="text-center text-secondary">
            Rating: {service.rating} Star
          </p>
          <p className="text-center text-secondary">Price: {service.price}</p>
          <p className="text-center text-secondary">{service.overview}</p>
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

export default ServiceDetail;
