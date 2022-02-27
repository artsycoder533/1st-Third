import React, { useContext } from 'react';
import { AppContext } from '../../Contexts/Context';
import { StyledHamburger, MiddleLine, TopLine, BottomLine } from './style';

function Hamburger({openMenu, setOpenMenu}) {

  return (
    <StyledHamburger
      onClick={() => setOpenMenu(!openMenu)}
      aria-expanded={openMenu}>
      <TopLine openMenu={openMenu} />
      <MiddleLine openMenu={openMenu} />
      <BottomLine openMenu={openMenu} />
    </StyledHamburger>
  );
}

export default Hamburger