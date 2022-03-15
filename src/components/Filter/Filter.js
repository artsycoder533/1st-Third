import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function Filter({ categories, title }) {
  const { filters, handleFilters } =
    useContext(FilterContext);
  const { category } = filters;

  return (
    <div>
      <h2>{title}</h2>
      {categories.map((cat) => {
        console.log(category, cat);
        return (
          <div key={cat}>
            <input
              type="radio"
              id={cat}
              name={title.toLowerCase()}
              value={cat.toLowerCase()}
              onChange={handleFilters}
              checked={category === cat.toLowerCase()}></input>
            <label htmlFor={cat}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
