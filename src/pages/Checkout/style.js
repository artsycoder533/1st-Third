import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  form {
    max-width: 500px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset {
        padding: 2rem;
    }
  }
`;