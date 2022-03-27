import React, { useContext, useState } from "react";
import { Center, StyledHeading } from "../../components/App/style";
import FormInput from "../../components/FormInput/FormInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Container, StyledLink, StyledError, Wrapper } from "./style";
import { PrimaryButton, PrimaryLink } from "../../components/Button/style";
import { FiArrowRight } from "react-icons/fi";
import Checkbox from "../../components/Checkbox/Checkbox";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
import { getCurrentDate } from "../../utility/utils";
import OrderReview from "../../components/OrderReview/OrderReview";
import { CartContext } from "../../Contexts/CartContext";

const Checkout = () => {
  // const {
  //   view,
  //   checkoutData,
  //   handleInput,
  //   showReview,
  //   customer_errors,
  //   address_errors,
  //   billing_errors,
  //   card_errors,
  //   handleCustomerSubmit,
  //   handleAddressSubmit,
  //   handleBillingSubmit,
  //   handlePaymentSubmit,
  // } = useContext(CheckoutContext);
  // const {
  //   isChecked,
  //   fname,
  //   lname,
  //   email,
  //   address,
  //   city,
  //   st,
  //   zip,
  //   match,
  //   billing_address,
  //   billing_city,
  //   billing_state,
  //   billing_zip,
  //   card_name,
  //   card_zip,
  //   expiration,
  //   card_number,
  // } = checkoutData;
  const { clearCart } = useContext(CartContext);
  const [isValid, setIsValid] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [view, setView] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [checkout_form, setCheckout_Form] = useState({
    isChecked: false,
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    st: "",
    zip: "",
    match: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    card_name: "",
    card_number: "",
    expiration: "",
    card_zip: "",
  });
  const [errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    addressError: "",
    cityError: "",
    stateError: "",
    zipError: "",
    card_nameError: "",
    card_numberError: "",
    expirationError: "",
    card_zipError: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCheckout_Form({
      ...checkout_form,
      [name]: value,
    });
    
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const status = validateForm();
    console.log(status);
    if (status) {
      //setIsValid(true);
      setShowReview(true);
      //clearCart();
    }
    else {
      setShowReview(false);
      //setIsValid(false);
    }
  };

  const validateForm = () => {
    let status = true;
    let fnameErr, lnameErr, emailErr;
    let addressErr, cityErr, stateErr, zipErr;
    let cardNameErr, cardNumberErr, expirationErr, cardZipErr;

    if (fname.trim() === "" || fname.match(/\d/)) {
      fnameErr = "Enter a valid first name";
      status = false;
      console.log("fname false");
    }
    if (lname.trim() === "" || lname.match(/\d/)) {
      lnameErr = "Enter a valid last name";
      status = false;
      console.log("lname false");
    }
    if (
      email.trim() === "" ||
      !email.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      emailErr = "Enter a valid email";
      status = false;
      console.log("email false");
    }
    if (address.trim() === "" || !address.match(/^\d/)) {
      addressErr = "Enter a valid address";
      status = false;
      console.log("address false");
    }
    if (city.trim() === "" || city.match(/\d/)) {
      cityErr = "Enter a valid city";
      status = false;
      console.log("city false");
    }
    if (st.trim() === "" || st.match(/[^a-zA-Z]/)) {
      stateErr = "Enter a valid state";
      status = false;
      console.log("st false");
    }
    if (zip.trim() === "" || zip.match("[a-zA-z]+")) {
      zipErr = "Enter a valid zip code";
      status = false;
      console.log("zip false");
    }
    if (card_name.trim() === "" || card_name.match(/\d/)) {
      cardNameErr = "Enter a valid name";
      status = false;
      console.log("card name false");
    }
    if (card_number.trim() === "" || card_number.match("[a-zA-z]+")) {
      cardNumberErr = "Enter a valid card number";
      status = false;
      console.log("number false");
    }
    if (expiration.trim() === "") {
      expirationErr = "Date cannot be blank";
      status = false;
      console.log("date false");
    }
    // if (card_zip.trim() === "" || card_zip.match("[a-zA-z]+")) {
    //   cardZipErr = "Enter a valid zip code";
    //   status = false;
    //   console.log("paymnet zip false");
    // }
    console.log(status);
    setErrors({
      fnameError: fnameErr,
      lnameError: lnameErr,
      emailError: emailErr,
      addressError: addressErr,
      cityError: cityErr,
      stateError: stateErr,
      zipError: zipErr,
      card_nameError: cardNameErr,
      card_numberError: cardNumberErr,
      expirationError: expirationErr,
      card_zipError: cardZipErr,
    });
    return status;
  };

  const reset = (e) => {
    clearCart();
    setShowReview(false);
    setCheckout_Form({
      fname: "",
      lname: "",
      email: "",
      address: "",
      city: "",
      st: "",
      zip: "",
      match: "",
      billing_address: "",
      billing_city: "",
      billing_state: "",
      billing_zip: "",
      card_name: "",
      card_number: "",
      expiration: "",
      card_zip: "",
    });
  };

  const {
    fname,
    lname,
    email,
    address,
    city,
    st,
    zip,
    card_name,
    card_number,
    expiration,
    card_zip,
  } = checkout_form;
  const {
    fnameError,
    lnameError,
    emailError,
    cityError,
    stateError,
    zipError,
    addressError,
    card_nameError,
    card_numberError,
    expirationError,
    card_zipError,
  } = errors;

  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <StyledLink to="/cart">Back to Cart</StyledLink>
        <Container>
          {showReview ? (
            <div>
              <OrderReview checkout_form={checkout_form}/>{" "}
              <PrimaryLink to="/confirmation" onClick={reset}>
                Pay Now
                <FiArrowRight />
              </PrimaryLink>
            </div>
          ) : (
            <form>
              <Wrapper>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                  <FormInput
                    htmlFor="card_name"
                    label="Name on Card:"
                    type="text"
                    name="card_name"
                    id="card_name"
                    value={card_name}
                    onChange={handleInput}
                  />
                  <StyledError>{card_nameError}</StyledError>
                </div>
                <div>
                  <FormInput
                    htmlFor="card_number"
                    label="Credit Card Number:"
                    type="text"
                    name="card_number"
                    id="card_number"
                    min={16}
                    maxLength={16}
                    value={card_number}
                    onChange={handleInput}
                  />
                  <StyledError>{card_numberError}</StyledError>
                </div>
                <div>
                  <FormInput
                    htmlFor="expiration"
                    label="Expires:"
                    type="date"
                    name="expiration"
                    id="expiration"
                    min={getCurrentDate()}
                    value={expiration}
                    onChange={handleInput}
                  />
                  <StyledError>{expirationError}</StyledError>
                </div>
                <div>
                  {/* <FormInput
                    htmlFor="card_zip"
                    label="Zip Code:"
                    type="text"
                    name="card_zip"
                    id="card_zip"
                    min={5}
                    maxLength={5}
                    value={card_zip}
                    onChange={handleInput}
                  />
                  <StyledError>{card_zipError}</StyledError> */}
                </div>
              </Wrapper>
              <PrimaryButton type="submit" onClick={handlePaymentSubmit}>
                Review Order <FiArrowRight />
              </PrimaryButton>
            </form>
          )}

          {/* <PrimaryButton onClick={handleCustomerSubmit}>
                Next <FiArrowRight />
              </PrimaryButton> */}
          {/* </fieldset> */}

          {/* <fieldset> */}
          {/* <legend>Shipping Address:</legend> */}

          {/* <PrimaryButton onClick={handleAddressSubmit}>
                Next <FiArrowRight />
              </PrimaryButton> */}
          {/* </fieldset> */}

          {/* <fieldset>
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
              </fieldset> */}

          {/* </form> */}

          <div>
            <OrderSummary />
            {/* <OrderReview /> */}
            {view === 4 ? (
              <PrimaryLink to="/confirmation" onClick={clearCart}>
                Pay Now
                <FiArrowRight />
              </PrimaryLink>
            ) : null}
          </div>
        </Container>
      </Center>
    </main>
  );
};

export default Checkout;
