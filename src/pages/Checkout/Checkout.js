import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Center, StyledHeading } from "../../components/App/style";
import FormInput from "../../components/FormInput/FormInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Container, StyledLink } from "./style";
import { PrimaryButton } from "../../components/Button/style";
import { FiArrowRight } from "react-icons/fi";
import { CartContext } from "../../Contexts/CartContext";
import Checkbox from "../../components/Checkbox/Checkbox";

const Checkout = () => {
  const { checkout_form, changeView, handleInput } = useContext(CartContext);
  const { view, fname, lname, email, address, city, state, zip, match, billing_address, billing_city, billing_state, billing_zip, card_name, card_zip, expiration, card_number, disabled } = checkout_form;
 // console.log(fname !== "" && lname !== "" && email !== "");
  
  const customerError = () => {
    
  }


  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <StyledLink to="/cart">Back to Cart</StyledLink>
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
                <PrimaryButton
                  onClick={changeView}
                  disabled={disabled}>
                  Next <FiArrowRight />
                </PrimaryButton>
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
                  value={address}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="city"
                  label="City:"
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="state"
                  label="State:"
                  type="text"
                  name="state"
                  id="state"
                  value={state}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="zip"
                  label="Zip Code:"
                  type="number"
                  name="zip"
                  id="zip"
                  value={zip}
                  onChange={handleInput}
                />
                <PrimaryButton
                  onClick={changeView}
                  disabled={disabled}>
                  Next <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            ) : view === 2 ? (
              <fieldset>
                <legend>Billing Address:</legend>

                <Checkbox
                  htmlFor="match"
                  label="Same as shipping?:"
                  type="checkbox"
                  name="match"
                  id="match"
                  value={match}
                  onChange={handleInput}
                  checked={match}
                />
                {/* if a match populate these fields */}

                <FormInput
                  htmlFor="billing_address"
                  label="Street Address:"
                  type="text"
                  name="billing_address"
                  id="billing_address"
                  value={billing_address}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="billing_city"
                  label="City:"
                  type="text"
                  name="billing_city"
                  id="billing_city"
                  value={billing_city}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="billing_state"
                  label="State:"
                  type="billing_state"
                  name="billing_state"
                  id="billing_state"
                  value={billing_state}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="billing_zip"
                  label="Zip Code:"
                  type="billing_zip"
                  name="billing_zip"
                  id="billing_zip"
                  value={billing_zip}
                  onChange={handleInput}
                />
                <PrimaryButton
                  onClick={changeView}
                  disabled={disabled}>
                  Next <FiArrowRight />
                </PrimaryButton>
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
                  value={card_name}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="card_number"
                  label="Credit Card Number:"
                  type="number"
                  name="card_number"
                  id="card_number"
                  value={card_number}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="expiration"
                  label="Expires:"
                  type="date"
                  name="expiration"
                  id="expiration"
                  value={expiration}
                  onChange={handleInput}
                />
                <FormInput
                  htmlFor="card_zip"
                  label="Zip Code:"
                  type="number"
                  name="card_zip"
                  id="card_zip"
                  value={card_zip}
                  onChange={handleInput}
                />
                <PrimaryButton
                        onClick={changeView}
                        disabled={disabled}
                  >
                  Pay <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            )}
            {/* <PrimaryButton onClick={changeView} disabled={disabled}>
              Next <FiArrowRight />
            </PrimaryButton> */}
          </form>
          <OrderSummary />
        </Container>
      </Center>
    </main>
  );
};

export default Checkout;
