import React from "react";
import StarRatings from "react-star-ratings";
import classes from "./Reviews.module.css";

export default function Reviews(props) {
  // console.log(props);
  const date = props.info.date.slice(0, 10);
  const rating = props.info.stars / 20;
  return (
    <div className="card mx-5 my-2 mb-5">
      <div className="row g-0">
        <div className={`col-md-2 ${classes.reviewerImage}`}>
          <img
            src={props.info.avatar}
            alt="avatar"
            className="w-100 mx-2 mt-3 rounded-circle p-3"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h3>{props.info.name}</h3>
            <h6>{date}</h6>
            <StarRatings
              rating={rating}
              starSpacing="0.2em"
              starDimension="1em"
            />
            <h6>{props.info.review}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
