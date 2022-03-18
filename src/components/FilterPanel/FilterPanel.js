import React, { useContext } from "react";
import Filter from "../Filter/Filter";
import PriceFilter from "../PriceFilter/PriceFilter";
import StarFilter from "../StarFilter/StarFilter";
import { categories, prices, stars } from "../Filter/filterData";
import { FilterContext } from "../../Contexts/FilterContext";
import { Container } from "./style";
import { PrimaryButton } from "../Button/style";

const FilterPanel = () => {
  const { resetFilters } = useContext(FilterContext);

  return (
    <Container>
      <Filter categories={categories} title={"Category"} />
      <PriceFilter prices={prices} title={"Price"} />
      <StarFilter stars={stars} title={"Customer Ratings"} />
      <PrimaryButton onClick={resetFilters}>Reset Filters</PrimaryButton>
    </Container>
  );
};

export default FilterPanel;
