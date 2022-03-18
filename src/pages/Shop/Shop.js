import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Center } from "../../components/App/style";
import { StyledTitle } from "./style";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { ProductsContext } from "../../Contexts/ProductsContext";
import SortProducts from "../../components/Sort/SortProducts";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <main>
      <Center>
        <StyledTitle>All Products</StyledTitle>
        <SortProducts />
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ width: "600px" }}>
            <FilterPanel />
          </div>
          <Products />
        </div>
      </Center>
    </main>
  );
}

export default Shop;
