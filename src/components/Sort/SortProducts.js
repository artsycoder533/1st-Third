import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import { Container, SortForm } from "./style";
import {SecondaryButton} from "../Button/style"

function SortProducts() {
  const { sort_type, handleSort, toggleFilters } = useContext(FilterContext);

  return (
    <Container>
      <SecondaryButton onClick={toggleFilters}>Show Filters</SecondaryButton>
      <SortForm>
        <label htmlFor="sort_type">Sort By:</label>
        <select
          name="sort_type"
          id="sort_type"
          value={sort_type}
          onChange={handleSort}>
          <option value="low">Price: (Lowest First)</option>
          <option value="high">Price: (Highest First)</option>
          <option value="a-z">Name: (A-Z)</option>
          <option value="z-a">Name: (Z-A)</option>
        </select>
      </SortForm>
    </Container>
  );
}

export default SortProducts;
