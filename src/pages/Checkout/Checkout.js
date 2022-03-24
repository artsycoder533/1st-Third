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
  const { checkout_form, handleInput } =
    useContext(CheckoutContext);
  const {
    view,
    fname,
    lname,
    email,
    address,
    city,
    state,
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
    disabled,
  } = checkout_form;
  const { customerErrors, validateCustomer, changeView, handleCustomerSubmit } = useContext(CheckoutContext);
  const navigate = useNavigate();
 // const [disabled, setDisabled] = useState(false);
  
  // const [customerErrors, setCustomerErrors] = useState({
  //   fnameError: "",
  //   lnameError: "",
  //   emailError: ""
  // })

  // const validateCustomer = () => {
  //   let fnameErr, lnameErr, emailErr;
  //   let isValid = true;
  //   if (fname.trim() === "" || fname.match(/\d/)) {
  //     fnameErr = "Enter a valid first name"
  //     isValid = false;
  //   }
  //   if (lname.trim() === "" || lname.match(/\d/)) {
  //     lnameErr = "Enter a valid last name"
  //     isValid = false;
  //   }
  //   if (email.trim() === "" || !email.includes("@")) {
  //     emailErr = "Enter a valid email"
  //     isValid = false;
  //   }
  //   setCustomerErrors({
  //     fnameError: fnameErr,
  //     lnameError: lnameErr,
  //     emailError: emailErr
  //   })
  //   return isValid;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateCustomer();
    console.log(isValid);
    if (isValid) {
      changeView();
    }
    else {
      return;
    }
  }

  const { fnameError, lnameError, emailError } = customerErrors;
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
                {/* <input type="submit" value="Next" onSubmit={changeView} /> */}
                <PrimaryButton type="submit" onClick={handleCustomerSubmit}>
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
                <input type="submit" value="Next" onClick={changeView} />
                {/* <PrimaryButton onClick={changeView}>
                  Next <FiArrowRight />
                </PrimaryButton> */}
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
                <input type="submit" value="Next" onClick={changeView} />
                {/* <PrimaryButton onClick={changeView}>
                  Next <FiArrowRight />
                </PrimaryButton> */}
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
                {/* <input type="submit" value="Pay" /> */}
                <PrimaryButton onClick={() => navigate("/confirmation")}>
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
