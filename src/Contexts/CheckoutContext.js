import React, { useContext, createContext, useReducer } from "react";
import { checkout_reducer } from "../reducers/checkout_reducer";

export const CheckoutContext = createContext();

const initialState = {
    checkout_form: {
        view: 0,
        fname: "",
        lname: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        match: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        card_name: "",
        card_number: "",
        expiration: "",
        card_zip: ""
    },
    customerErrors: {
        isValid: true,
        fnameError: "",
        lnameError: "",
        emailError: ""
    },

}

const CheckoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(checkout_reducer, initialState);

    const changeView = (e) => {
        e.preventDefault();
        dispatch({type: "CHANGE_VIEW"})
    }

    const validateCustomer = () => {
        dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch({ type: "UPDATE_INPUT", payload: { name, value } });
    }

    const handleCustomerSubmit = (e) => {
        e.preventDefault();
       dispatch({ type: "CHECK_CUSTOMER_ERRORS" });
    }

    return <CheckoutContext.Provider value={{...state, validateCustomer, changeView, handleCustomerSubmit}}>
        {children}
    </CheckoutContext.Provider>
}

export default CheckoutContextProvider;