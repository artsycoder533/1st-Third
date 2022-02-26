import styled from "styled-components";

export const StyledHamburger = styled.button`
  width: 40px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;

  @media all and (min-width: 992px){
    display: none;
  }
`;

export const Line = styled.span`
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background: black;
  transition: all 0.3s linear;
`;

export const TopLine = styled(Line)`
  position: absolute;
  content: "";
  transform: ${({ openMenu }) =>
    openMenu ? "rotate(-45deg)" : "translateY(-10px)"};
  background: ${({ openMenu }) => (openMenu ? "#800020" : null)};
`;

export const MiddleLine = styled(Line)`
  opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
  transition: opacity 0s;
`;

export const BottomLine = styled(Line)`
  position: absolute;
  content: "";
  transform: ${({ openMenu }) =>
    openMenu ? "rotate(45deg)" : "translateY(10px)"};
  background: ${({ openMenu }) => (openMenu ? "#800020" : null)};
`;
