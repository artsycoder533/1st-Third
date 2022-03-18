import React from "react";
import Products from "../../components/Products/Products";
import { Center, StyledHeading } from "../../components/App/style";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SortProducts from "../../components/Sort/SortProducts";
import { Container } from "./style";


function Shop() {
  
  return (
    <main>
      <StyledHeading>Shop</StyledHeading>
      <Center>
        <SortProducts />
        <Container>
          <div >
            <FilterPanel />
          </div>
          <Products />
        </Container>
      </Center>
    </main>
  );
}

export default Shop;
