import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 0.5rem;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  input:invalid:focus {
    background: #ff7f7f;
  }

  /* input:valid{
        background: lightgreen;
    } */
`;
