import React from 'react';
import Products from '../../components/Products/Products';
import { Center } from '../../components/App/style';
import { StyledTitle } from './style';
import { category } from '../../components/Filter/filterData';


import Star from '../../components/Star/Star';
import FilterPanel from '../../components/FilterPanel/FilterPanel';

function Shop() {
  return (
    <Center>
      <StyledTitle>All Products</StyledTitle>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "600px", border: "2px solid red" }}>
          <FilterPanel />
          {/* <Star /> */}
        </div>
        
        <Products />
        
      </div>
    </Center>
  );
}

export default Shop