import React from "react";
import { StarFilled } from "../Star/style";

function StarFilter({ stars, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {stars.map((star) => {
        return (
          <div key={star}>
            <input type="checkbox" id={star}></input>
            <label htmlFor={star}>{star}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default StarFilter;
