import styled from "styled-components";

export const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media all and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
    padding: 3rem 0;
  }
`;

