import React from "react";

function PriceFilter({ prices, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {prices.map((price) => {
        const { lowPrice, highPrice } = price;
        return (
          <div key={highPrice}>
            <input type="checkbox" id={lowPrice}></input>
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
