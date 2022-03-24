import React from "react";
import { Container } from "./style";

const FormInput = ({ htmlFor, label, type, name, id, value, onChange, maxLength }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </Container>
  );
};

export default FormInput;
