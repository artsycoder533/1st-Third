import React, { useContext, useState, useEffect } from 'react';
import {  ProductsContext } from '../../Contexts/ProductsContext';

function SortProducts() {
    const { filteredProducts, setFilteredProducts } = useContext(ProductsContext);
  const [sortValue, setSortValue] = useState("");
  
  useEffect(() => {
    
  });

    const sortProducts = (e) => {
        e.preventDefault();
        setSortValue(e.currentTarget.value);
        //sort filtered products
        const copyOfFilteredProducts = [...filteredProducts];
        switch (sortValue) {
          case 'low':
            setFilteredProducts(filteredProducts.sort(function (a, b) {
              return a.price - b.price;
            }));
                break;
            case 'high':
                break;
            case 'a-z':
                break;
            case 'z-a':
                break;
            default:
                //low to high
        }
    }
  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>
      <select name="sortBy" id="sort">
        <option value="low" onChange={sortProducts}>
          Price: (Lowest First)
        </option>
        <option value="high" onChange={sortProducts}>
          Price: (Highest First)
        </option>
        <option value="a-z" onChange={sortProducts}>
          Name: (A-Z)
        </option>
        <option value="z-a" onChange={sortProducts}>
          Name: (Z-A)
        </option>
      </select>
    </div>
  );
}

export default SortProducts