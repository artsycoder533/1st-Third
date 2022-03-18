import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  h2 {
    
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  input[type="radio"] {
    width: 1.5rem;
    height: 1.5rem;
  }

  input[type="radio"],
  label {
    cursor: pointer;
  }
`;