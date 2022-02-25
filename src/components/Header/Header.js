import React from 'react'
import { StyledHeader } from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
  return (
      <StyledHeader>
          <Hamburger />
          <Navbar />
    </StyledHeader>
  )
}

export default Header