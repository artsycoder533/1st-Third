import React, {useContext} from "react";
import { StarFilled } from "../Star/style";
import { FilterContext } from "../../Contexts/FilterContext";

function StarFilter({ stars, title }) {
  const { handleFilters, filters } = useContext(FilterContext);
  const { ratings } = filters;

  return (
    <div>
      <h2>{title}</h2>
      {stars.map((star) => {
        return (
          <div key={star}>
            <input type="checkbox" id={star} value={star} onChange={handleFilters}></input>
            <label htmlFor={star}>{star}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default StarFilter;
