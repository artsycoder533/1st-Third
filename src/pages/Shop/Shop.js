import React from 'react';
import Products from '../../components/Products/Products';
import { Center } from '../../components/App/style';
import { StyledTitle } from './style';
import Filter from '../../components/Filter/Filter';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import { category } from '../../components/Filter/filterData';
import { prices } from '../../components/Filter/filterData';

function Shop() {
  return (
    <Center>
      <StyledTitle>All Products</StyledTitle>
      <Filter category={category} title={"Category"}/>
      <PriceFilter prices={prices} title={"Price"}/>
      <Products />
    </Center>
  );
}

export default Shop