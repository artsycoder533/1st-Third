import React, {useContext} from 'react';
import { CountButton, RemoveButton, StyledArticle } from './style';
import { CartContext } from '../../Contexts/CartContext';

const CartProduct = ({ product}) => {
    const { cart, handleAddToCart } = useContext(CartContext);
    const { quantity, details } = product;
    const { image, title, id, price } = details;

  return (
      <StyledArticle>
          <div>
              <img src={image} alt={title}></img>
          </div>
          <div>
              <span>{title}</span>
              <CountButton>-</CountButton>
              <span>Qty. {quantity}</span>
              <CountButton onClick={()=>handleAddToCart(id)}>+</CountButton>
              <span>${price}</span>
          </div>
          <RemoveButton>Remove Item</RemoveButton>
    </StyledArticle>
  )
}

export default CartProduct