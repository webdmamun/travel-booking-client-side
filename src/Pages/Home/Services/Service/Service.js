import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { title, img, location, rating, price, _id } = props.service;
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card">
        <img className="card-image" src={img} alt="" />
        <div className="p-3 card-content">
          <h4 className="card-title">{title}</h4>
          <p className="text-center">Package Price: ${price}</p>
          <p className="text-center">Location: {location}</p>
          <p className="text-center">Rating: {rating}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more d-flex justify-content-center">
          <Link to={`/services/${_id}`}>
            <button className="mb-3 ms-3 btn btn-primary">
              Details & Book
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
