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
        const { address_hours, checkout_form } = state;

    }

      if (action.type === "CHECK_SHIPPING_ERRORS") {
        const { shipping_errors, checkout_form } = state;
    }
     if (action.type === "CHECK_BILLING_ERRORS") {
       const { address_hours, checkout_form } = state;
     }

      if (action.type === "CHANGE_VIEW") {
        const { view, customer_errors, isCustomerValid } = state;
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

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
