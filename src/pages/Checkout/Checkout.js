import React, { useContext, useState } from "react";
import { Center, StyledHeading } from "../../components/App/style";
import FormInput from "../../components/FormInput/FormInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Container, StyledLink, StyledError, Wrapper } from "./style";
import { PrimaryButton, PrimaryLink } from "../../components/Button/style";
import { FiArrowRight } from "react-icons/fi";
import { getCurrentDate } from "../../utility/utils";
import OrderReview from "../../components/OrderReview/OrderReview";
import { CartContext } from "../../Contexts/CartContext";

const Checkout = () => {
  const { saveEmail } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
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
    if (status) {
      setShowReview(true);
    } else {
      setShowReview(false);
    }
  };

  const validateForm = () => {
    let status = true;
    let fnameErr, lnameErr, emailErr;
    let addressErr, cityErr, stateErr, zipErr;
    let cardNumberErr, expirationErr, cardZipErr;

    if (fname.trim() === "" || fname.match(/\d/)) {
      fnameErr = "Enter a valid first name";
      status = false;
    }
    if (lname.trim() === "" || lname.match(/\d/)) {
      lnameErr = "Enter a valid last name";
    }
    if (
      email.trim() === "" ||
      !email.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      emailErr = "Enter a valid email";
      status = false;
    }
    if (address.trim() === "" || !address.match(/^\d/)) {
      addressErr = "Enter a valid address";
      status = false;
    }
    if (city.trim() === "" || city.match(/\d/)) {
      cityErr = "Enter a valid city";
      status = false;
    }
    if (st.trim() === "" || st.match(/[^a-zA-Z]/)) {
      stateErr = "Enter a valid state";
      status = false;
    }
    if (zip.trim() === "" || zip.match("[a-zA-z]")) {
      zipErr = "Enter a valid zip code";
      status = false
    }
    if (card_number.trim() === "" || card_number.match("[a-zA-z]")) {
      cardNumberErr = "Enter a valid card number";
      status = false;
    }
    if (expiration.trim() === "") {
      expirationErr = "Date cannot be blank";
      status = false;
    }

    saveEmail(email);
    setErrors({
      fnameError: fnameErr,
      lnameError: lnameErr,
      emailError: emailErr,
      addressError: addressErr,
      cityError: cityErr,
      stateError: stateErr,
      zipError: zipErr,
      card_numberError: cardNumberErr,
      expirationError: expirationErr,
      card_zipError: cardZipErr,
    });
    return status;
  };

  const reset = () => {
    
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
    card_number,
    expiration,
  } = checkout_form;
  const {
    fnameError,
    lnameError,
    emailError,
    cityError,
    stateError,
    zipError,
    addressError,
    card_numberError,
    expirationError,
  } = errors;

  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <StyledLink to="/cart">Back to Cart</StyledLink>
        <Container>
          {showReview ? (
            <div>
              <OrderReview checkout_form={checkout_form} />{" "}
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
                    min={2}
                    maxLength={2}
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
              </Wrapper>
              <PrimaryButton type="submit" onClick={handlePaymentSubmit}>
                Review Order <FiArrowRight />
              </PrimaryButton>
            </form>
          )}
          <div>
            <OrderSummary />
          </div>
        </Container>
      </Center>
    </main>
  );
};

export default Checkout;
