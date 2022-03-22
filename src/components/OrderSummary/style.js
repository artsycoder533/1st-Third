import styled from "styled-components";

export const CartTotals = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 250px;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f5f5f5;

  p:nth-of-type(3) {
    font-weight: bold;
    font-size: 1.2rem;
    border-top: 1px solid lightgrey;
    padding: 0.25rem 0;
  }
`;

