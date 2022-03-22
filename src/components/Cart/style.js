import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
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
  border: 2px solid #800020;
  background: #800020;
  color: white;

  &:hover {
    background: #800020;
    color: white;
  }
`;



