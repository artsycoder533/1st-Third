import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  justify-content: center;
  //align-items: flex-start;
  align-items: center;
  gap: 1rem;

  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  form {
    max-width: 500px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    legend {
      padding: 0 1rem;
    }

    fieldset {
      padding: 2rem;
      border: 2px solid #800020;
      display: flex;
      flex-direction: column;
      //gap: 1rem;
    }

    button {
      align-self: flex-end;
    }

    input[type="submit"] {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 0.75rem;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;
      align-self: flex-end;
      text-decoration: none;
      background: #800020;
      color: white;
      border: 2px solid #800020;

      &:hover {
        background: transparent;
        color: #800020;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  background: transparent;
  border: 2px solid #800020;
  color: #800020;
  align-self: flex-start;
  margin: 1rem 0;

  &:hover {
    background: #800020;
    color: white;
  }
`;

export const StyledError = styled.small`
  color: red;
  padding-bottom: 1rem;
`;