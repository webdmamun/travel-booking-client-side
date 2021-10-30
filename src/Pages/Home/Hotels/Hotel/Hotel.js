import React from "react";
import { Link } from "react-router-dom";

const Hotel = (props) => {
  const { hotel_name, img, location, rating, pernight, phone, email, _id } =
    props.hotel;

  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card">
        <img className="card-image" src={img} alt="" />
        <div className="p-3 card-content">
          <h4 className="card-title">Hotel Name: {hotel_name}</h4>
          <p className="text-center">Cost Per night: ${pernight}</p>
          <p className="text-center">Location: {location}</p>
          <p className="text-center">Rating: {rating}</p>
          <p className="text-center">Phone: {phone}</p>
          <p className="text-center">Email: {email}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more d-flex justify-content-center">
          <Link to={`/hotels/${_id}`}>
            <button className="mb-3 ms-3 btn btn-primary">Book Now</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
