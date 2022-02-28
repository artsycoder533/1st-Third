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
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
`;


export const StyledHeading = styled.h2`
    color: white;
`;

export const NavLink = styled(Link)`
    color: snow;
    text-decoration: none;
    font-weight: bold;
`;

export const StyledInstagram = styled(FiInstagram)`
    color: white;
`;

export const StyledTwitter = styled(FiTwitter)`
    color: white;
`;

export const StyledAttrition = styled.small`
    text-align: center;
`;

export const StyledExternalLink = styled.a`
    color: white;
    font-weight: bold;
`;