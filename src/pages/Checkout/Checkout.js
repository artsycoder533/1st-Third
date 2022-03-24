import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Center, StyledHeading } from "../../components/App/style";
import FormInput from "../../components/FormInput/FormInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Container, StyledLink, StyledError } from "./style";
import { PrimaryButton } from "../../components/Button/style";
import { FiArrowRight } from "react-icons/fi";
import { CartContext } from "../../Contexts/CartContext";
import Checkbox from "../../components/Checkbox/Checkbox";
import { CheckoutContext } from "../../Contexts/CheckoutContext";

const Checkout = () => {
  const {
    view,
    checkout_form,
    handleInput,
    customer_errors,
    address_errors,
    billing_errors,
    handleCustomerSubmit,
    handleAddressSubmit,
    handleBillingSubmit
  } = useContext(CheckoutContext);
  const {
    isChecked,
    fname,
    lname,
    email,
    address,
    city,
    st,
    zip,
    match,
    billing_address,
    billing_city,
    billing_state,
    billing_zip,
    card_name,
    card_zip,
    expiration,
    card_number,
  } = checkout_form;
 
  const navigate = useNavigate();

  const { fnameError, lnameError, emailError } = customer_errors;
  const { addressError, cityError, stateError, zipError } = address_errors;
  const {billing_addressError, billing_cityError, billing_stateError, billing_zipError } = billing_errors;
  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <StyledLink to="/cart">Back to Cart</StyledLink>
        <Container>
          {view === 0 ? (
            <form action="">
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
                  required
                />
                <StyledError>{fnameError}</StyledError>
                <FormInput
                  htmlFor="lname"
                  label="Last Name:"
                  type="text"
                  name="lname"
                  id="lname"
                  value={lname}
                  onChange={handleInput}
                />
                <StyledError>{lnameError}</StyledError>
                <FormInput
                  htmlFor="email"
                  label="Email:"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInput}
                />
                <StyledError>{emailError}</StyledError>
                <PrimaryButton onClick={handleCustomerSubmit}>
                  Next <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            </form>
          ) : view === 1 ? (
            <form action="">
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
                <StyledError>{addressError}</StyledError>
                <FormInput
                  htmlFor="city"
                  label="City:"
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={handleInput}
                />
                <StyledError>{cityError}</StyledError>
                <FormInput
                  htmlFor="state"
                  label="State:"
                  type="text"
                  name="st"
                  id="state"
                  value={st}
                  onChange={handleInput}
                />
                <StyledError>{stateError}</StyledError>
                <FormInput
                  htmlFor="zip"
                  label="Zip Code:"
                  type="text"
                  name="zip"
                    id="zip"
                    min={5}
                    maxLength={5}
                    value={zip}
                  onChange={handleInput}
                />
                <StyledError>{zipError}</StyledError>
                <PrimaryButton onClick={handleAddressSubmit}>
                  Next <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            </form>
          ) : view === 2 ? (
            <form action="">
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
                  checked={isChecked}
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
                <StyledError>{billing_addressError}</StyledError>
                <FormInput
                  htmlFor="billing_city"
                  label="City:"
                  type="text"
                  name="billing_city"
                  id="billing_city"
                  value={billing_city}
                  onChange={handleInput}
                />
                <StyledError>{billing_cityError}</StyledError>
                <FormInput
                  htmlFor="billing_state"
                  label="State:"
                  type="billing_state"
                  name="billing_state"
                  id="billing_state"
                  value={billing_state}
                  onChange={handleInput}
                />
                <StyledError>{billing_stateError}</StyledError>
                <FormInput
                  htmlFor="billing_zip"
                  label="Zip Code:"
                  type="billing_zip"
                  name="billing_zip"
                  id="billing_zip"
                  value={billing_zip}
                      onChange={handleInput}
                      maxLength={5}
                />
                <StyledError>{billing_zipError}</StyledError>
                <PrimaryButton onClick={handleBillingSubmit}>
                  Next <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            </form>
          ) : (
            <form action="">
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
                        maxLength={16}
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
                  min="5"
                  max="5"
                  onChange={handleInput}
                />
                <PrimaryButton onClick={handleCustomerSubmit}>
                  Pay <FiArrowRight />
                </PrimaryButton>
              </fieldset>
            </form>
          )}
          <OrderSummary />
        </Container>
      </Center>
    </main>
  );
};

export default Checkout;

//navigate("/confirmation")