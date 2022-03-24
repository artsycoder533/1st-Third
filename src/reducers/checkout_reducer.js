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
    if (email.trim() === "" || !email.includes("@")) {
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

  if (action.type === "CHECK_ADDRESS_ERRORS") {
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
    if (zip.trim() === "" || zip.match("[a-zA-z]+") ){
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

  if (action.type === "CHECK_SHIPPING_ERRORS") {
    const { shipping_errors, checkout_form } = state;
  }

  if (action.type === "CHECK_BILLING_ERRORS") {
    const { address_hours, checkout_form } = state;
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

  if (action.type === "CHANGE_ADDRESS_VIEW") {
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
        
    }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
