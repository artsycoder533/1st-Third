import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { CartTotals } from "./style";

const OrderSummary = () => {
  const { subtotal, shipping_fee, cart_total } = useContext(CartContext);

  return (
    <CartTotals>
      <h3>Order Summary</h3>
      <p>Subtotal: ${subtotal} </p>
      <p>Shipping: ${shipping_fee}</p>
      <p>Total: ${cart_total}</p>
    </CartTotals>
  );
};

export default OrderSummary;
