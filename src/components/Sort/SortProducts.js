import React, { useContext, useState } from 'react';
import { FilterContext } from '../../Contexts/FilterContext';

function SortProducts() {
    const { filteredProducts, setFilteredProducts } = useContext(FilterContext);
    const [sortValue, setSortValue] = useState("");

    const sortProducts = (e) => {
        e.preventDefault();
        setSortValue(e.currentTarget.name);
        //sort filtered products
        const copyOfFilteredProducts = [...filteredProducts];
        switch (e.currentTarget.name) {
            case 'low':
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