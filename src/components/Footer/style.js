import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
 import { FiInstagram, FiTwitter } from "react-icons/fi";

export const StyledFooter = styled.footer`
  background: #800020;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  text-align: center;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media all and (min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: 992px){
      flex-direction: column;
  }
`;

export const StyledHeading = styled.h3`
    color: white;
`;

export const NavLink = styled(Link)`
    color: snow;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    gap: 0.25rem;
    font-size: 1.1rem;
    position: relative;
`;

export const StyledInstagram = styled(FiInstagram)`
    color: white;
    font-size: 2rem;

    &:hover {
        color: orange;
    }
`;

export const StyledTwitter = styled(FiTwitter)`
  color: white;
  font-size: 2rem;

  &:hover {
    color: orange;
  }
`;

export const StyledAttrition = styled.small`
    text-align: center;
    margin-top: 1rem;
    display: block;
    padding: 1rem;
`;

export const StyledExternalLink = styled.a`
    color: white;
    font-weight: bold;
`;

export const FooterLogo = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  align-self: center;
  font-family: "Playfair Display", serif;
`;

export const StyledSpan = styled.span`
  position: absolute;
  background: white;
  color: #800020;
  padding: 0 0.1rem;
  right: -0px;
  bottom: 55%;
  font-weight: bold;
  right: 50%;
  transform: translateX(35px);
`;