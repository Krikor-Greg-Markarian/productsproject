import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import cn from "classnames";

export default function MyComponent() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  );
}
