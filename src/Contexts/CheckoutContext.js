import React, { useContext, createContext, useReducer } from "react";
import { checkout_reducer } from "../reducers/checkout_reducer";

export const CheckoutContext = createContext();

const initialState = {
  view: 1,
  isCustomerValid: true,
  isShippingValid: true,
  isBillingValid: true,
  checkout_form: {
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
  },
};

const CheckoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(checkout_reducer, initialState);

    const changeView = (e) => {
        e.preventDefault();
        dispatch({ type: "CHANGE_VIEW" });
    }

    const validateCustomer = () => {
        dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
    }
    
    const validateAddress = () => {
        dispatch({ type: "CHECK_ADDRESS_ERRORS" });
    }

    const validateShipping = () => {
        dispatch({ type: "CHECK_SHIPPING_ERRORS" });
    }

    const validateBilling = () => {
      dispatch({ type: "CHECK_BILLING_ERRORS" });
    };

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch({ type: "UPDATE_INPUT", payload: { name, value } });
    }

    const handleCustomerSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
        dispatch({ type: "CHANGE_CUSTOMER_VIEW" });
    }

    const handleAddressSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "CHECK_ADDRESS_ERRORS" });
      dispatch({ type: "CHANGE_ADDRESS_VIEW" });
    };

    return <CheckoutContext.Provider value={{...state, validateCustomer, validateAddress, validateShipping, validateBilling, changeView, handleInput, handleCustomerSubmit, handleAddressSubmit}}>
        {children}
    </CheckoutContext.Provider>
}

export default CheckoutContextProvider;