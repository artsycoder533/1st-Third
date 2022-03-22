import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Center, StyledHeading } from "../../components/App/style";
import FormInput from "../../components/FormInput/FormInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Container, StyledButton } from "./style";
import { PrimaryButton } from "../../components/Button/style";
import { FiArrowRight } from "react-icons/fi";
import { CartContext } from "../../Contexts/CartContext";

const Checkout = () => {
  const { checkout_form, changeView, handleInput } = useContext(CartContext);
  const { view, fname, lname, email } = checkout_form;
 


  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <StyledButton to="/cart">Back to Cart</StyledButton>
        <Container>
          <form action="">
            {view === 0 ? (
              <fieldset>
                <legend>Customer Details:</legend>
                <FormInput
                  htmlFor="fname"
                  label="First Name:"
                  type="text"
                  name="fname"
                  id="fname"
                  value={fname}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="lname"
                  label="Last Name:"
                  type="text"
                  name="lname"
                  id="lname"
                  value={lname}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="email"
                  label="Email:"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInput}
                />
              </fieldset>
            ) : view === 1 ? (
              <fieldset>
                <legend>Shipping Address:</legend>
                <FormInput
                  htmlFor="address"
                  label="Street Address:"
                  type="text"
                  name="address"
                  id="address"
                />
                <FormInput
                  htmlFor="city"
                  label="City:"
                  type="text"
                  name="city"
                  id="city"
                />
                <FormInput
                  htmlFor="state"
                  label="State:"
                  type="text"
                  name="state"
                  id="state"
                />
                <FormInput
                  htmlFor="zip"
                  label="Zip Code:"
                  type="number"
                  name="zip"
                  id="zip"
                />
              </fieldset>
            ) : view === 2 ? (
              <fieldset>
                <legend>Billing Address:</legend>
                <FormInput
                  htmlFor="match"
                  label="Same as shipping?:"
                  type="checkbox"
                  name="match"
                  id="match"
                />
                {/* if a match show this */}
                <label htmlFor="match">Same as shipping:</label>
                <input type="checkbox" name="match" id="match" />
                <FormInput
                  htmlFor="billing_address"
                  label="Street Address:"
                  type="text"
                  name="billing_address"
                  id="billing_address"
                />
                <FormInput
                  htmlFor="billing_city"
                  label="City:"
                  type="text"
                  name="billing_city"
                  id="billing_city"
                />
                <FormInput
                  htmlFor="billing_state"
                  label="State:"
                  type="billing_state"
                  name="billing_state"
                  id="billing_state"
                />
                <FormInput
                  htmlFor="billing_zip"
                  label="Zip Code:"
                  type="billing_zip"
                  name="billing_zip"
                  id="billing_zip"
                />
              </fieldset>
            ) : (
              <fieldset>
                <legend>Payment Details: </legend>
                <FormInput
                  htmlFor="card_name"
                  label="Name on Card:"
                  type="text"
                  name="card_name"
                  id="card_name"
                />
                <FormInput
                  htmlFor="card_number"
                  label="Credit Card Number:"
                  type="number"
                  name="card_number"
                  id="card_number"
                />
                <FormInput
                  htmlFor="expiration"
                  label="Expires:"
                  type="date"
                  name="expiration"
                  id="expiration"
                />
                <FormInput
                  htmlFor="card_zip"
                  label="Zip Code:"
                  type="number"
                  name="card_zip"
                  id="card_zip"
                />
                <input type="submit" value="Pay" />
              </fieldset>
            )}
            <PrimaryButton onClick={changeView}>
              Next <FiArrowRight />
            </PrimaryButton>
          </form>
          <OrderSummary />
        </Container>
      </Center>
    </main>
  );
};

export default Checkout;
