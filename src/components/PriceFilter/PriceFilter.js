import React, { useState, useContext, useEffect } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function PriceFilter({ prices, title }) {
  const {
    products,
    filteredProducts,
    filterResult,
    setSelectedPrices,
    selectedPrices,
    setFilteredProducts,
    selectedCategory
  } = useContext(FilterContext);
  const [isChecked, setIsChecked] = useState(
    new Array(prices.length).fill(false)
  );

  useEffect(() => {
    console.log(selectedPrices);
    setProductsToDisplay();
  }, [selectedPrices]);

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
      console.log("checkbox unchecked");
      const copyOfSelectedPrices = [...selectedPrices];
      //remove from list of selected prices
      if (copyOfSelectedPrices.includes(e.currentTarget.name)) {
        setSelectedPrices(
          copyOfSelectedPrices.filter((price) => {
            return price !== e.currentTarget.name;
          })
        );
      }
    }
  };

  const setProductsToDisplay = () => {
    console.log("products should update");
    //filter filteredPRoducts to update whats rendered
    const copyOfFilteredProducts = [...filteredProducts];
    //get filter values from selectedPrices array
    if (selectedPrices.length) {
      const productsToDisplay = copyOfFilteredProducts.filter(product => 
        selectedPrices.filter(selectedPrice => {
          if (selectedPrice === "and up") {
            return product.price >= 500.00;
          }
          else {
            return (
              product.price >= selectedPrice - 49.99 &&
              product.price <= selectedPrice
            );
          }
          
        }).length);
      setFilteredProducts(productsToDisplay);
        // for (let i = 0; i < selectedPrices.length; i++) {
        //   console.log(selectedPrices[i]);
        //   if (selectedPrices[i] === "and up") {
        //     console.log(product.price);
        //     return product.price >= 500.99;
        //   } else {
        //     return (
        //       product.price >= selectedPrices[i] - 49.99 &&
        //       product.price <= selectedPrices[i]
        //     );
        //   }
        // }
      
    }
    // if (selectedCategory.length) {
    //   setFilteredProducts(filteredProducts);
    // }
    else {
      console.log("selected prices has no length");
      setFilteredProducts(filteredProducts);
    }
  };

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
              onChange={(e) => handleInput(e, index)}></input>
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
