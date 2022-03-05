import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function PriceFilter({ prices, title }) {
  const { products, filteredProducts, filterResult, setSelectedPrices, selectedPrices } = useContext(FilterContext);
  const [isChecked, setIsChecked] = useState(new Array(prices.length).fill(false));

  const handleInput = (e, index) => {
    const copyOfIsChecked = [...isChecked];
    copyOfIsChecked[index] = !isChecked[index];
    setIsChecked(copyOfIsChecked);
    if (copyOfIsChecked[index]) {
      console.log(copyOfIsChecked[index]);
     setSelectedPrices([...selectedPrices, e.currentTarget.name]);
    }
    if (copyOfIsChecked[index] === false) {
      console.log(copyOfIsChecked[index]);
      const copyOfSelectedPrices = [...selectedPrices];
      if (copyOfSelectedPrices.includes(e.currentTarget.name)) {
        const newArray = copyOfSelectedPrices.filter(price => {
          console.log(price, e.currentTarget.name);
          return price !== e.currentTarget.name;
        });
         setSelectedPrices(newArray);
      }
    }
  }
  
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
              value={`${lowPrice}-${highPrice}`}
              checked={isChecked[index]}
              name={`${lowPrice}-${highPrice}`}
              onChange={(e)=>handleInput(e, index)}></input>
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
