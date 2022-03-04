import React, {useContext} from "react";
import { StyledNav, NavLinks, NavLink } from "./style";
import { links } from "./data";
import { FilterContext } from "../../Contexts/FilterContext";

function Navbar() {
  const { openMenu, setOpenMenu } = useContext(FilterContext);
  return (
    <StyledNav openMenu={openMenu}>
      <NavLinks>
        {links.map((link) => {
          const { url, text, icon } = link;
          return (
            <li key={text}>
              <NavLink to={url} onClick={() => setOpenMenu(!openMenu)}>
                {text} {icon}
              </NavLink>
            </li>
          );
        })}
      </NavLinks>
    </StyledNav>
  );
}

export default Navbar;
