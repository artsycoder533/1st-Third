import React, { createContext, useReducer, useEffect, useContext } from "react";
import { checkout_reducer } from "../reducers/checkout_reducer";
import { CartContext } from "./CartContext";

export const CheckoutContext = createContext();

const initialState = {
  cart: [],
  view: 0,
  showReview: false,
  isCustomerValid: true,
  isShippingValid: true,
  isBillingValid: true,
  checkout_form: {
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
  },
  checkoutData: {},
  customer_errors: {
    fnameError: "",
    lnameError: "",
    emailError: "",
  },
  address_errors: {
    cityError: "",
    stateError: "",
    zipError: "",
  },
  billing_errors: {
    billing_addressError: "",
    billing_cityError: "",
    billing_stateError: "",
    billing_zipError: "",
  },
  card_errors: {
    card_nameError: "",
    card_numberError: "",
    expirationError: "",
    card_zipError: "",
  },
};

const CheckoutContextProvider = ({ children }) => {
  const { cart } = useContext(CartContext);
  const [state, dispatch] = useReducer(checkout_reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_CART", payload: cart });
  }, [cart]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "match") {
      dispatch({ type: "FILL_IN_INPUTS" });
    }
    dispatch({ type: "UPDATE_INPUT", payload: { name, value } });
  };

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
    dispatch({ type: "CHANGE_CUSTOMER_VIEW" });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHECK_SHIPPING_ERRORS" });
    dispatch({ type: "CHANGE_SHIPPING_VIEW" });
  };

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHECK_BILLING_ERRORS" });
    dispatch({ type: "CHANGE_BILLING_VIEW" });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
    dispatch({ type: "CHECK_SHIPPING_ERRORS" });
    dispatch({ type: "CHECK_PAYMENT_ERRORS" });
   // dispatch({ type: "CHANGE_PAYMENT_VIEW" });
   // dispatch({ type: "PROCESS_PAYMENT" });
  };

  return (
    <CheckoutContext.Provider
      value={{
        ...state,
        handleInput,
        handleCustomerSubmit,
        handleAddressSubmit,
        handleBillingSubmit,
        handlePaymentSubmit,
      }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
