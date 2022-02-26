import React from 'react';
import { StyledNav, NavLinks, NavLink } from './style';
import { links } from './data';

function Navbar() {
  return (
      <StyledNav>
          <NavLinks>
              {links.map(link => {
                  const { url, text } = link;
                  return (
                      <li key={text}>
                          <NavLink to={url}>{text}</NavLink>
                    </li>
                )
            })}
          </NavLinks>
    </StyledNav>
  )
}

export default Navbar