import styled from 'styled-components';
import { PrimaryButton } from '../Button/style';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem;
  }

  span {
    color: red;
  }

  textarea {
    padding: 0.75rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`;

export const FormButton = styled(PrimaryButton)`
  align-self: flex-end;
`;