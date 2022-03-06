import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function PriceFilter({ prices, title }) {
  const { products, filteredProducts, filterResult, setSelectedPrices, selectedPrices, setFilteredProducts } = useContext(FilterContext);
  const [isChecked, setIsChecked] = useState(new Array(prices.length).fill(false));

  const handleInput = (e, index) => {
    const copyOfIsChecked = [...isChecked];
    copyOfIsChecked[index] = !isChecked[index];
    setIsChecked(copyOfIsChecked);

    

    //if checked
    if (copyOfIsChecked[index]) {
    //add to list of selected prices
      setSelectedPrices([...selectedPrices, e.currentTarget.name]);
    }

    
    //if its been unchecked
    if (copyOfIsChecked[index] === false) {
      const copyOfSelectedPrices = [...selectedPrices];
      //remove from list of selected prices
      if (copyOfSelectedPrices.includes(e.currentTarget.name)) {
        setSelectedPrices(copyOfSelectedPrices.filter(price => {
          return price !== e.currentTarget.name;
        }));
         
      }
    }
    setProductsToDisplay();
  }

  const setProductsToDisplay = () => {
    //filter filteredPRoducts to update whats rendered
    const copyOfFilteredProducts = [...filteredProducts];
    //get filter values from selectedPrices array
    if (selectedPrices.length) {
      const productsToDisplay = copyOfFilteredProducts.filter((product) => {
        return (
          product.price >= selectedPrices[0] - 49.99 &&
          product.price <= selectedPrices[0]
        );
      });
      setFilteredProducts(productsToDisplay);
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
              value={highPrice}
              checked={isChecked[index]}
              name={highPrice}
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
