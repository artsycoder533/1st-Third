import React from 'react'
import { StyledHeader, StyledLogo } from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
  return (
      <StyledHeader>
          <StyledLogo>1st & Third</StyledLogo>
          <Hamburger />
          <Navbar />
    </StyledHeader>
  )
}

export default Header