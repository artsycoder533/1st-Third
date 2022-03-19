import React, { useContext } from "react";
import {
  CountButton,
  ImageWrapper,
  RemoveButton,
  StyledArticle,
  StyledDetails,
} from "./style";
import { CartContext } from "../../Contexts/CartContext";

const CartProduct = (product) => {
  const { cart, handleAddToCart, decreaseCartCount, removeItemFromCart } =
    useContext(CartContext);

  return (
    <StyledArticle>
      <ImageWrapper>
        <img
          src={product.product.details.image}
          alt={product.product.details.title}></img>
      </ImageWrapper>

      <StyledDetails>
        <span>{product.product.details.title}</span>

        <div>
          <CountButton
            onClick={() => decreaseCartCount(product.product.details.id)}>
            -
          </CountButton>
          <span>Qty. {product.product.quantity}</span>
          <CountButton
            onClick={() => handleAddToCart(product.product.details.id)}>
            +
          </CountButton>
        </div>

        <span>${product.product.details.price}</span>
      </StyledDetails>
      <RemoveButton
        onClick={() => removeItemFromCart(product.product.details.id)}>
        Remove Item
      </RemoveButton>
    </StyledArticle>
  );
};

export default CartProduct;
