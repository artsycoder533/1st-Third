import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";


const Cart = () => {
    const { cart, shipping_fee, cart_total } = useContext(CartContext);

  return (
    <>
      <section>
        {cart.map((item, index) => {
          console.log(item);
          return <CartProduct key={index} {...item} />;
        })}
        <button>Clear Cart</button>
      </section>
      <section>
        <p>Subtotal:  </p>
        <p>Shipping: ${shipping_fee}</p>
        <p>Total: ${cart_total}</p>
      </section>
    </>
  );
};

export default Cart;
