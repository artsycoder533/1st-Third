import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function Filter({ categories, title }) {
  const { filterResult, selectedCategory, setSelectedCategory } =
    useContext(FilterContext);
  // const [selectedCat, setSelectedCat] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.currentTarget.value);
    filterResult(e.currentTarget.value.toLowerCase());
    
  };

  return (
    <div>
      <h2>{title}</h2>
      {categories.map((cat) => {
        return (
          <div key={cat}>
            <input
              type="radio"
              id={cat}
              name={title}
              value={cat}
              onChange={handleChange}
              checked={selectedCategory === cat}></input>
            <label htmlFor={cat}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
