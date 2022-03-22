import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { ButtonContainer, StyledLink } from "../Cart/style";
import { SecondaryButton } from "../Button/style";
import OrderSummary from "../OrderSummary/OrderSummary";

const Cart = () => {
  const { cart, clearCart} =
    useContext(CartContext);

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
      <OrderSummary />
    </>
  );
};

export default Cart;
