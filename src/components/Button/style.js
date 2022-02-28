import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
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
  align-self: center;
  text-decoration: none;

  &:hover {
  }
`;

export const SecondaryButton = styled(ButtonLink)`
  background: transparent;
  border: 2px solid blue;
`;

