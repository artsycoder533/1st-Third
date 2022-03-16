import React from "react";
import { StarOutline, StarFilled, StarHalf } from "./style";
import { stars } from "../Filter/filterData";

function Star({ rate }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <>
        {rate >= index + 1 ? <StarFilled /> : rate >= number ? <StarHalf /> : <StarOutline /> }
      </>
    );
  });


  return (
    <span>
      {tempStars}
    </span>
  );
}

export default Star;
