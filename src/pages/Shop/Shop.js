import React from 'react';
import Products from '../../components/Products/Products';
import { Center } from '../../components/App/style';
import { StyledTitle } from '../../components/Products/style';

function Shop() {
  return (
    <Center>
      <StyledTitle>All Products</StyledTitle>
      <Products />
    </Center>
  );
}

export default Shop