import React, { useContext } from "react";
import { Container } from "./style";
import { CheckoutContext } from "../../Contexts/CheckoutContext";

const OrderReview = (props) => {
  // const { checkout_form } = useContext(CheckoutContext);
  const { checkout_form } = props;
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
        {/* <p>{card_name}</p> */}
        <p>XXXX-XXXX-XXXX-{card_number.substring(12)}</p>
        <p>Expires: {expiration}</p>
        <p>{card_zip}</p>
      </div>
      {/* <h3>Billing Details</h3>
      <p>{billing_address}</p>
      <p>{`${billing_city}, ${billing_state} ${billing_zip}`}</p> */}
    </Container>
  );
};

export default OrderReview;
