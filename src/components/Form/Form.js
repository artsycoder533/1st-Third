import React from 'react'
import { StyledForm, InputContainer } from './style';
import { PrimaryButton } from '../Button/style';

function Form() {
  return (
      <StyledForm>
          <h3>Send Us A Message!</h3>
      <InputContainer>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </InputContainer>
      <InputContainer>
        <label htmlFor="message">Message</label>
        <textarea
          name="meessage"
          id="message"
          cols="30"
          rows="10"
          required></textarea>
          </InputContainer>
          <PrimaryButton>Send Message</PrimaryButton>
    </StyledForm>
  );
}

export default Form