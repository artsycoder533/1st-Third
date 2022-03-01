import React from 'react';
import Products from '../../components/Products/Products';
import { Center } from '../../components/App/style';
import { StyledTitle } from './style';
import Filter from '../../components/Filter/Filter';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import { category } from '../../components/Filter/filterData';
import { prices } from '../../components/Filter/filterData';
import { stars } from '../../components/Filter/filterData';
import StarFilter from '../../components/StarFilter/StarFilter';
import Star from '../../components/Star/Star';

function Shop() {
  return (
    <Center>
      <StyledTitle>All Products</StyledTitle>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "600px", border: "2px solid red" }}>
          <Filter category={category} title={"Category"} />
          <PriceFilter prices={prices} title={"Price"} />
          <StarFilter stars={stars} title={"Customer Ratings"} />
          <Star />
        </div>
        
          <Products />
        
      </div>
    </Center>
  );
}

export default Shop