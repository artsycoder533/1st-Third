import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, shipping_fee, cart_total, clearCart, subtotal } = useContext(CartContext);

  return (
    <>
      <section>
        {cart.map((item, index) => {
          return <CartProduct key={index} {...item} />;
        })}
        <button onClick={clearCart}>Clear Cart</button>
      </section>
      <section>
        <p>Subtotal: ${subtotal} </p>
        <p>Shipping: ${shipping_fee}</p>
        <p>Total: ${cart_total}</p>
      </section>
      <Link to="/checkout">Checkout</Link>
    </>
  );
};

export default Cart;
