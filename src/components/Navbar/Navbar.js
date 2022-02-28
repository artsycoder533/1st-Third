import React from 'react';
import { StyledNav, NavLinks, NavLink } from './style';
import { links } from './data';

function Navbar({openMenu, setOpenMenu}) {
   
  return (
      <StyledNav openMenu={openMenu}>
          <NavLinks>
              {links.map(link => {
                  const { url, text, icon } = link;
                  return (
                      <li key={text}>
                      <NavLink to={url} onClick={()=>setOpenMenu(!openMenu)}>{text} {icon}</NavLink>
                    </li>
                )
            })}
          </NavLinks>
    </StyledNav>
  )
}

export default Navbar