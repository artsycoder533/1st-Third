import React from "react";
import { StarOutline, StarFilled, StarHalf } from "./style";

function Star({ rate }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? <StarFilled /> : rate >= number ? <StarHalf /> : <StarOutline /> }
      </span>
    );
  });


  return (
    <>
      {tempStars}
    </>
  );
}

export default Star;
