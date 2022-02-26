import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #800020;
  border: 1px solid transparent;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid blue;
`;

