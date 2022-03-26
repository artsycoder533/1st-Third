import React, { useContext } from "react";
import { Container } from "./style";
import { CheckoutContext } from "../../Contexts/CheckoutContext";

const OrderReview = () => {
  const { checkout_form } = useContext(CheckoutContext);
  const {
    fname,
    lname,
    email,
    address,
    city,
    st,
    zip,
    billing_address,
    billing_city,
    billing_state,
    billing_zip,
    card_name,
    card_zip,
    expiration,
    card_number,
  } = checkout_form;

  return (
    <div>
      <h2>Review Your Order</h2>
      <h3>Customer Details</h3>
      <p>{`${fname} ${lname}`}</p>
      <p>{email}</p>
      <h3>Shipping Details</h3>
      <p>{address}</p>
      <p>{`${city}, ${st} ${zip}`}</p>
      <h3>Billing Details</h3>
      <p>{billing_address}</p>
      <p>{`${billing_city}, ${billing_state} ${billing_zip}`}</p>
      <h3>Payment Details</h3>
      <p>{card_name}</p>
      <p>XXXX-XXXX-XXXX-{card_number.substring(12)}</p>
      <p>{expiration}</p>
      <p>{card_zip}</p>
    </div>
  );
};

export default OrderReview;
