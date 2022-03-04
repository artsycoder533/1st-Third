import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function Filter({ categories, title }) {
  const { filterResult } =
    useContext(FilterContext);
  const [selectedCat, setSelectedCat] = useState("");

  const handleChange = (e) => {
    setSelectedCat(e.currentTarget.value);
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
              checked={selectedCat === cat}></input>
            <label htmlFor={cat}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
