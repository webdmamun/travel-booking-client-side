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
          <h4 className="card-title">{hotel_name}</h4>
          <p className="text-center">{pernight}</p>
          <p className="text-center">{location}</p>
          <p className="text-center">{rating}</p>
          <p className="text-center">{phone}</p>
          <p className="text-center">{email}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more">
          <Link to={`/hotels/${_id}`}>
            <button className="mb-3 ms-3 btn btn-primary">Book Now</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
