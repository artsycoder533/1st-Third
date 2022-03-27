import React from "react";
import { Container } from "./style";

const OrderReview = (props) => {
  const { checkout_form } = props;
  const {
    fname,
    lname,
    email,
    address,
    city,
    st,
    zip,
    card_zip,
    expiration,
    card_number,
  } = checkout_form;

  return (
    <Container>
      <h2>Review Your Order</h2>
      <div>
        <h3>Customer Details</h3>
        <p>{`${fname} ${lname}`}</p>
        <p>{email}</p>
      </div>
      <div>
        <h3>Shipping Details</h3>
        <p>{address}</p>
        <p>{`${city}, ${st} ${zip}`}</p>
      </div>
      <div>
        <h3>Payment Details</h3>
        <p>XXXX-XXXX-XXXX-{card_number.substring(12)}</p>
        <p>Expires: {expiration}</p>
        <p>{card_zip}</p>
      </div>
    </Container>
  );
};

export default OrderReview;
