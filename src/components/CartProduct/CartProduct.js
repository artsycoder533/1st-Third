import React, {useContext} from 'react';
import { StyledArticle } from './style';
import { CartContext } from '../../Contexts/CartContext';

const CartProduct = ({ title, image, price, id }) => {
    const { cart } = useContext(CartContext);
    console.log(title, image, price);

  return (
      <StyledArticle>
          <div>
              <img src={image} alt={title}></img>
          </div>
          <div>
              <span>{title}</span>
              <span>Qty. {cart.filter(item => {
                  return item.id === id;
              }).length}</span>
              <span>${price}</span>
          </div>
    </StyledArticle>
  )
}

export default CartProduct