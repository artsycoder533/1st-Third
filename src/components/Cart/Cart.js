import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";
import { ButtonContainer, StyledLink, CartTotals } from "../Cart/style";
import { SecondaryButton } from "../Button/style";

const Cart = () => {
    const { cart, shipping_fee, cart_total, clearCart, subtotal } = useContext(CartContext);

  return (
    <>
      <section>
        {cart.map((item, index) => {
          return <CartProduct key={index} {...item} />;
        })}
      </section>
      <ButtonContainer>
        <SecondaryButton onClick={clearCart}>Clear Cart</SecondaryButton>
        <StyledLink to="/checkout">Checkout</StyledLink>
      </ButtonContainer>
      <CartTotals>
        <p>Subtotal: ${subtotal} </p>
        <p>Shipping: ${shipping_fee}</p>
        <p>Total: ${cart_total}</p>
      </CartTotals>
    </>
  );
};

export default Cart;
