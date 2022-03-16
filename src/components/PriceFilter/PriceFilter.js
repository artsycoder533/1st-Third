import React, { useContext} from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function PriceFilter({ prices, title }) {
  const { handleFilters, isChecked } = useContext(FilterContext);


  return (
    <div>
      <h2>{title}</h2>
      {prices.map((price, index) => {
        const { lowPrice, highPrice } = price;
        return (
          <div key={highPrice}>
            <input
              type="checkbox"
              id={lowPrice}
              value={highPrice}
              checked={isChecked[index]}
              name={title}
              onChange={(e)=>handleFilters(e, index)}
              ></input>
            <label htmlFor={lowPrice}>
              ${lowPrice} - ${highPrice}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default PriceFilter;
