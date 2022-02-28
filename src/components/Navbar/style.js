import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100%;
  height: ${({ openMenu }) => (openMenu ? "100vh" : "0")};
  overflow: hidden;
  transition: all 0.3s linear;
  transform: ${({openMenu})=> openMenu ? "scale(1)" : "scale(0)"};

  @media all and (min-width: 992px) {
    width: 100%;
    transform: none;
    height: auto;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - 59px);
  align-items: center;
  

  @media all and (min-width: 992px) {
    flex-direction: row;
    gap: 2rem;
    height: auto;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: block;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  height: 100%;
  color: #800020;
  font-size: 1.5rem;

  &:active {
    color: black;
  }

  @media all and (min-width: 992px) {
    text-align: left;
    padding: 0;
    color: black;
    font-size: 1rem;
  }
`;