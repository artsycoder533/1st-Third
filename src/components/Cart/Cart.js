import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";


const Cart = () => {
    const { cart } = useContext(CartContext);

  return (
    <section>
      
        {cart.map((item, index) => {
          console.log(item);
          return <CartProduct key={index} {...item} />;
        })}
      
    </section>
  );
};

export default Cart;
