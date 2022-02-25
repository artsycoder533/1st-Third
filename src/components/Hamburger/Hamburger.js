import React, {useState} from 'react'
import { StyledHamburger, Line, TopLine, BottomLine } from './style'

function Hamburger() {
    const [openMenu, setOpenMenu] = useState(false);
  return (
      <StyledHamburger onClick={!openMenu}>
          <TopLine openMenu={openMenu}/>
          <Line />
          <BottomLine />
    </StyledHamburger>
  )
}

export default Hamburger