import React, {useState} from 'react'
import { StyledHeader, StyledLogo, Container, SubContainer } from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <SubContainer>
          <StyledLogo>1st & Third</StyledLogo>
          <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </SubContainer>
        <Navbar openMenu={openMenu} />
      </Container>
    </StyledHeader>
  );
}

export default Header