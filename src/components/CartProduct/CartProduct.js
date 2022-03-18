import React, {useContext} from 'react';
import { CountButton, RemoveButton, StyledArticle } from './style';
import { CartContext } from '../../Contexts/CartContext';

const CartProduct = ( product) => {
    const { cart, handleAddToCart, removeFromCart } = useContext(CartContext);
    console.log(product);
  

  return (
    <StyledArticle>
      <div>
        <img src={product.product.details.image} alt={product.product.details.title}></img>
      </div>
      <div>
        <span>{product.product.details.title}</span>
        <CountButton onClick={() => removeFromCart(product.product.details.id)}>
          -
        </CountButton>
        <span>Qty. {product.product.quantity}</span>
        <CountButton onClick={() => handleAddToCart(product.product.details.id)}>
          +
        </CountButton>
        <span>${product.product.details.price}</span>
      </div>
      <RemoveButton>Remove Item</RemoveButton>
    </StyledArticle>
  );
}

export default CartProduct