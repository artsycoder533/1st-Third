import React, {useState} from 'react'
import { StyledHamburger, MiddleLine, TopLine, BottomLine } from './style'

function Hamburger() {
    const [openMenu, setOpenMenu] = useState(false);
   
  return (
    <StyledHamburger onClick={()=>setOpenMenu(!openMenu)} aria-expanded={openMenu}>
      <TopLine openMenu={openMenu} />
      <MiddleLine openMenu={openMenu} />
      <BottomLine openMenu={openMenu} />
    </StyledHamburger>
  );
}

export default Hamburger