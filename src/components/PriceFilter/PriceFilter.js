import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function PriceFilter({ prices, title }) {
  const { products, filteredProducts } = useContext(FilterContext);
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div>
      <h2>{title}</h2>
      {prices.map((price) => {
        const { lowPrice, highPrice } = price;
        return (
          <div key={highPrice}>
            <input type="checkbox" id={lowPrice} value={lowPrice} checked={isChecked} name={`${lowPrice}-${highPrice}`} onChange={(e)=>setIsChecked(e.currentTarget.checked)}></input>
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
