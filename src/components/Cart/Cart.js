import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import SingleProduct from "../SingleProduct/SingleProduct";

const Cart = () => {
    const { cart } = useContext(CartContext);

  return (
    <section>
      {cart.map((item, index) => {
        return <SingleProduct key={index} {...item} />;
      })}
    </section>
  );
};

export default Cart;
