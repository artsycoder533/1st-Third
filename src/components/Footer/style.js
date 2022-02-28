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

export const StyledHeading = styled.h2`
    color: white;
`;

export const NavLink = styled(Link)`
    color: snow;
    text-decoration: none;
    font-weight: bold;
    display: block;
`;

export const StyledInstagram = styled(FiInstagram)`
    color: white;
`;

export const StyledTwitter = styled(FiTwitter)`
    color: white;
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
`;