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
    transform: scale(1.2);
    border: 2px solid white;
    transition: border 0.3s ease-in-out;
  }
`;

export const SecondaryButton = styled.button`
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

  &:hover {
    background: #800020;
    color: white;
  }
`;

export const PrimaryButton = styled(SecondaryButton)`
  background: #800020;
  color: white;

  &:hover {
    background: white;
    color: #800020;
    border: 3px solid #800020;
  }
`;

export const SpecialButton = styled(PrimaryButton)`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid transparent;
  font-size: 1.5rem;
  width: 20px;
  font-weight: bold;
`;


