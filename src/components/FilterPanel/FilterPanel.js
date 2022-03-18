import React, { useContext } from "react";
import Filter from "../Filter/Filter";
import PriceFilter from "../PriceFilter/PriceFilter";
import StarFilter from "../StarFilter/StarFilter";
import { categories, prices, stars } from "../Filter/filterData";
import { FilterContext } from "../../Contexts/FilterContext";

const FilterPanel = () => {
  const { resetFilters } = useContext(FilterContext);

  return (
    <div>
      <Filter categories={categories} title={"Category"} />
      <PriceFilter prices={prices} title={"Price"} />
      <StarFilter stars={stars} title={"Customer Ratings"} />
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default FilterPanel;
