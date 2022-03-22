import React from 'react';
import { Container } from './style';

const FormInput = ({htmlFor, label, type, name, id}) => {
  return (
      <Container>
          <label htmlFor={htmlFor}>{label}</label>
          <input type={type} name={name} id={id} />
    </Container>
  )
}

export default FormInput