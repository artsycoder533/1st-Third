import React, { useState, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import { Container } from "./style";

function Filter({ categories, title }) {
  const { filters, handleFilters } =
    useContext(FilterContext);
  const { category } = filters;

  return (
    <Container>
      <h2>{title}</h2>
      {categories.map((cat, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name={title.toLowerCase()}
              id={cat}
              value={cat.toLowerCase()}
              onChange={handleFilters}
              checked={category === cat.toLowerCase()}></input>
            <label htmlFor={cat}>{cat}</label>
          </div>
        );
      })}
    </Container>
  );
}

export default Filter;
