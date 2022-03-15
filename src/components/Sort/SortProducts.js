import React, { useContext, useState, useEffect } from 'react';
import {  ProductsContext } from '../../Contexts/ProductsContext';

function SortProducts() {
    const { filteredProducts, handleSort} = useContext(ProductsContext);
  const [sortValue, setSortValue] = useState("");
  

  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>
      <select name="sortBy" id="sort">
        <option value="low" onChange={handleSort}>
          Price: (Lowest First)
        </option>
        <option value="high" onChange={handleSort}>
          Price: (Highest First)
        </option>
        <option value="a-z" onChange={handleSort}>
          Name: (A-Z)
        </option>
        <option value="z-a" onChange={handleSort}>
          Name: (Z-A)
        </option>
      </select>
    </div>
  );
}

export default SortProducts