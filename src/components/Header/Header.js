import React from 'react'
import { StyledCartIcon, StyledHeader, StyledLogo, StyledSearchIcon, Container, SubContainer} from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';

function Header() {

  return (
    <StyledHeader>
      <Container>
        <SubContainer>
          <StyledLogo>1st & Third</StyledLogo>
          <StyledSearchIcon />
          <StyledCartIcon />
          <Hamburger />
        </SubContainer>
        <Navbar />
      </Container>
    </StyledHeader>
  );
}

export default Header