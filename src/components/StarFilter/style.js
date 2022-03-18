import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
  }

  input[type="checkbox"],
  label {
    cursor: pointer;
  }
`;