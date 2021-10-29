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
          <p className="text-center">{price}</p>
          <p className="text-center">{location}</p>
          <p className="text-center">{rating}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more">
          <Link to={`/department/${_id}`}>
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
