import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

const Rating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={15}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
