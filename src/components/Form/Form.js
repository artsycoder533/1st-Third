import React, { useState } from "react";
import { StyledForm, InputContainer, FormButton } from "./style";
import { PrimaryButton } from "../Button/style";
import FormInput from "../FormInput/FormInput";

function Form() {
  const [formFields, setFormFields] = useState({
    nameInput: "",
    emailInput: "",
    messageInput: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const status = validate();
    if (status) {
      resetForm();
    }
  };

  const validate = () => {
    let nameErr, emailErr, messageErr;
    let status;

    if (nameInput.trim() === "" || nameInput.match(/\d/)) {
      nameErr = "Enter a valid name";
      status = false;
    }
    if (
      emailInput.trim() === "" ||
      !emailInput.match(/^([a-z\d\.-_]+)@([a-z\d\.-_]+)\.([a-z]{2,})$/)
    ) {
      emailErr = "Enter a valid email";
      status = false;
    }
    if (messageInput.trim() === "") {
      messageErr = "Message cannot be blank";
      status = false;
    }
    setErrors({
      nameError: nameErr,
      emailError: emailErr,
      messageError: messageErr,
    });
  };

  const resetForm = () => {
    setFormFields({
      nameInput: "",
      emailInput: "",
      messageInput: "",
    });
    setErrors({
      nameError: "",
      emailError: "",
      messageError: "",
    });
  };

  const { nameInput, emailInput, messageInput } = formFields;
  const { nameError, emailError, messageError } = errors;

  return (
    <StyledForm action="https://formspree.io/f/mvolbzdo" method="POST">
      <h3>Send Us A Message!</h3>
      <InputContainer>
        <FormInput
          htmlFor="name"
          type="text"
          id="nameInput"
          name="nameInput"
          label="Name:"
          value={nameInput}
          onChange={handleInput}
          required
        />
        <span>{nameError}</span>
      </InputContainer>
      <InputContainer>
        <FormInput
          htmlFor="email"
          type="email"
          id="emailInput"
          name="emailInput"
          label="Email:"
          value={emailInput}
          onChange={handleInput}
          required
        />
        <span>{emailError}</span>
      </InputContainer>
      <InputContainer>
        <label htmlFor="message">Message</label>
        <textarea
          name="messageInput"
          id="messageInput"
          cols="30"
          rows="10"
          value={messageInput}
          onChange={handleInput}
          required></textarea>
        <span>{messageError}</span>
      </InputContainer>
      <FormButton type="submit" onClick={handleSubmit}>
        Send Message
      </FormButton>
    </StyledForm>
  );
}

export default Form;
