import React from 'react';
import { StyledArticle } from './style';

const CartProduct = ({ title, image, price }) => {
    console.log(title, image, price);
  return (
      <StyledArticle>
          <div>
              <img src={image} alt={title}></img>
          </div>
          <div>
              <span>{title}</span>
              <span>Qty.</span>
              <span>${price}</span>
          </div>
    </StyledArticle>
  )
}

export default CartProduct