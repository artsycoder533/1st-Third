export const checkout_reducer = (state, action) => {

    if (action.type === "UPDATE_INPUT") {
      const { checkout_form } = state;
      const { name, value } = action.payload;

      return { ...state, checkout_form: { ...checkout_form, [name]: value } };
    }
    
    if (action.type === "CHECK_CUSTOMER_ERRORS") {
        const { customerErrors } = state;
        const { fname, lname, email } = customerErrors;
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
          customerErrors: {
            ...customerErrors,
            isValid: status,
            fnameError: fnameErr,
            lnameError: lnameErr,
            emailError: emailErr,
          },
        };
    }

    if (action.type === "CHANGE_VIEW") {
        
    }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
  
}