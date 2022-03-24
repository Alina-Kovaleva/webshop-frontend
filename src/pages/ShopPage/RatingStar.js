import React from "react";
import { useState } from "react";
import { FaStar } from "react-icon-rating";



export default function RatingStar() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
            <FaStar
              className="star"
              color={ratingValue < rating ? "#ffc107" : "#e4e5e9"}
              size={100}
            />
          </label>
        );
      })}
    </div>
  );
}
