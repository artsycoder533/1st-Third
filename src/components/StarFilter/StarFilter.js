import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import Star from "../../components/Star/Star";

function StarFilter({ stars, title }) {
  const { handleFilters, isRatingChecked } = useContext(FilterContext);

  return (
    <div>
      <h2>{title}</h2>
      {stars.map((star, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={star}
              value={star}
              name={title}
              onChange={(e) => handleFilters(e, index)}
              checked={isRatingChecked[index]}></input>
            <label htmlFor={star}>
              <Star rate={star} />
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default StarFilter;
