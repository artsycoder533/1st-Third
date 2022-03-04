import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Center } from "../../components/App/style";
import { StyledTitle } from "./style";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { FilterContext } from "../../Contexts/FilterContext";

function Shop() {
  const { products } = useContext(FilterContext);
  return (
    <Center>
      <StyledTitle>All Products</StyledTitle>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "600px" }}>
          <FilterPanel />
        </div>
        <Products />
      </div>
    </Center>
  );
}

export default Shop;
