import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { Center } from "../App/style";

const Cart = () => {
    const { cart } = useContext(CartContext);

  return (
    <section>
      <Center>
        {cart.map((item, index) => {
          console.log(item);
          return <CartProduct key={index} {...item} />;
        })}
      </Center>
    </section>
  );
};

export default Cart;
