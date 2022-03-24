import { useNavigate } from "react-router-dom";
import { getCurrentDate } from "../utility/utils";

export const checkout_reducer = (state, action) => {
  if (action.type === "UPDATE_INPUT") {
    const { checkout_form } = state;
    const { name, value } = action.payload;

    return { ...state, checkout_form: { ...checkout_form, [name]: value } };
  }

  if (action.type === "CHECK_CUSTOMER_ERRORS") {
    const { customer_errors, checkout_form } = state;
    const { fname, lname, email } = checkout_form;
    let fnameErr, lnameErr, emailErr;
    let status = true;

    if (fname.trim() === "" || fname.match(/\d/)) {
      fnameErr = "Enter a valid first name";
      status = false;
    }
    if (lname.trim() === "" || lname.match(/\d/)) {
      lnameErr = "Enter a valid last name";
      status = false;
    }
    if (
      email.trim() === "" ||
      !email.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      emailErr = "Enter a valid email";
      status = false;
    }

    return {
      ...state,
      isCustomerValid: status,
      customer_errors: {
        ...customer_errors,
        fnameError: fnameErr,
        lnameError: lnameErr,
        emailError: emailErr,
      },
    };
  }

  if (action.type === "CHECK_SHIPPING_ERRORS") {
    const { address_errors, checkout_form } = state;
    const { address, city, st, zip } = checkout_form;
    let addressErr, cityErr, stateErr, zipErr;
    let status = true;

    if (address.trim() === "" || !address.match(/^\d/)) {
      addressErr = "Enter a valid address";
      status = false;
    }
    if (city.trim() === "" || city.match(/\d/)) {
      cityErr = "Enter a valid address";
      status = false;
    }
    if (st.trim() === "" || st.match(/\d/)) {
      stateErr = "Enter a valid state";
      status = false;
    }
    if (zip.trim() === "" || zip.match("[a-zA-z]+")) {
      zipErr = "Enter a valid zip code";
      status = false;
    }
    return {
      ...state,
      isAddressValid: status,
      address_errors: {
        ...address_errors,
        addressError: addressErr,
        cityError: cityErr,
        stateError: stateErr,
        zipError: zipErr,
      },
    };
  }

  if (action.type === "FILL_IN_INPUTS") {
    const { checkout_form } = state;
    const { isChecked, address, city, st, zip, fname, lname } = checkout_form;
    if (!isChecked) {
      return {
        ...state,
        checkout_form: {
          ...checkout_form,
          isChecked: true,
          billing_address: address,
          billing_state: st,
          billing_city: city,
          billing_zip: zip,
          card_name: `${fname} ${lname}`,
          card_zip: zip
        },
      };
    } else {
      return {
        ...state,
        checkout_form: {
          ...checkout_form,
          isChecked: false,
          billing_address: "",
          billing_state: "",
          billing_city: "",
          billing_zip: "",
        },
      };
    }
  }

  if (action.type === "REMOVE_INPUTS") {
    const { checkout_form } = state;

    return {
      ...state,
      checkout_form: {
        ...checkout_form,
        billing_address: "",
        billing_state: "",
        billing_city: "",
        billing_zip: "",
      },
    };
  }

  if (action.type === "CHECK_BILLING_ERRORS") {
    const { billing_errors, checkout_form } = state;
    const { billing_address, billing_city, billing_state, billing_zip } = checkout_form;
    let billingAddressErr, billingCityErr, billingStateErr, billingZipErr;
    let status = true;

    if (billing_address.trim() === "" || !billing_address.match(/^\d/)) {
      billingAddressErr = "Enter a valid address";
      status = false;
    }
    if (billing_city.trim() === "" || billing_city.match(/\d/)) {
      billingCityErr = "Enter a valid address";
      status = false;
    }
    if (billing_state.trim() === "" || billing_state.match(/\d/)) {
      billingStateErr = "Enter a valid state";
      status = false;
    }
    if (billing_zip.trim() === "" || billing_zip.match("[a-zA-z]+")) {
      billingZipErr = "Enter a valid zip code";
      status = false;
    }
    return {
      ...state,
      isBillingValid: status,
      billing_errors: {
        ...billing_errors,
        billing_addressError: billingAddressErr,
        billing_cityError: billingCityErr,
        billing_stateError: billingStateErr,
        billing_zipError: billingZipErr,
      },
    };
  }

  if (action.type === "CHECK_PAYMENT_ERRORS") {
    const { card_errors, checkout_form } = state;
    const { card_name, card_number, expiration, card_zip } = checkout_form;
    let cardNameErr, cardNumberErr, expirationErr, cardZipErr; 
    let status = true;

    if (card_name.trim() === "" || card_name.match(/\d/)) {
      cardNameErr = "Enter a valid name";
      status = false;
    } 
    if (card_number.trim() === "" || card_number.match("[a-zA-z]+")) {
      cardNumberErr = "Enter a valid card number";
      status = false;
    }
    if (expiration.trim() === "" ) {
      expirationErr = "Date cannot be blank";
      status = false;
    }
    if (card_zip.trim() === "" || card_zip.match("[a-zA-z]+")) {
      cardZipErr = "Enter a valid zip code";
      status = false;
    }
      return {
        ...state,
        card_errors: {
          ...card_errors,
          card_nameError: cardNameErr,
          card_numberError: cardNumberErr,
          expirationError: expirationErr,
          card_zipError: cardZipErr,
        },
      };
  }

  if (action.type === "CHANGE_CUSTOMER_VIEW") {
    const { view, isCustomerValid } = state;
    let changeView;

    if (isCustomerValid) {
      if (view >= 3) {
        changeView = 0;
      } else {
        changeView = view + 1;
      }
    } else {
      changeView = view;
    }
    return { ...state, view: changeView };
  }

  if (action.type === "CHANGE_SHIPPING_VIEW") {
    const { view, isAddressValid } = state;
    let changeView;

    if (isAddressValid) {
      if (view >= 3) {
        changeView = 0;
      } else {
        changeView = view + 1;
      }
    } else {
      changeView = view;
    }
    return { ...state, view: changeView };
  }

  if (action.type === "CHANGE_BILLING_VIEW") {
    const { view, isBillingValid } = state;
    let changeView;

    if (isBillingValid) {
      if (view >= 3) {
        changeView = 0;
      } else {
        changeView = view + 1;
      }
    } else {
      changeView = view;
    }
    return { ...state, view: changeView };
  }

  if (action.type === "PROCESS_PAYMENT") {
    const { navigate } = action.payload;
    const { checkout_form } = state;
    //redirect to confirmation page
    navigate("/confirmation");


    return {
      ...state,
      checkoutData: { ...checkout_form },
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
    };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
