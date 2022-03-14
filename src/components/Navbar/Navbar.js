import React, {useContext} from "react";
import { StyledNav, NavLinks, StyledNavLink } from "./style";
import { links } from "./data";
import { ProductsContext } from "../../Contexts/ProductsContext";

function Navbar() {
  const { openMenu, toggleMenu } = useContext(ProductsContext);
  return (
    <StyledNav openMenu={openMenu}>
      <NavLinks>
        {links.map((link) => {
          const { url, text, icon } = link;
          return (
            <li key={text}>
              <StyledNavLink
                to={url}
                onClick={toggleMenu}>
                {text} {icon}
              </StyledNavLink>
            </li>
          );
        })}
      </NavLinks>
    </StyledNav>
  );
}

export default Navbar;
