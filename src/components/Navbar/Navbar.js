import React, { useContext } from "react";
import { StyledNav, NavLinks, StyledNavLink } from "./style";
import { links } from "./data";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { CartContext } from "../../Contexts/CartContext";

function Navbar() {
  const { openMenu, toggleMenu } = useContext(ProductsContext);
  const { totalNumCartItems } = useContext(CartContext);

  return (
    <StyledNav openMenu={openMenu}>
      <NavLinks>
        {links.map((link, index) => {
          const { url, text, icon } = link;
          return (
            <li key={index}>
              <StyledNavLink to={url} onClick={toggleMenu}>
                {text} {icon}
                {text === "Cart" ? (
                  <span>
                    {totalNumCartItems > 0 ? totalNumCartItems : null}
                  </span>
                ) : null}
              </StyledNavLink>
            </li>
          );
        })}
      </NavLinks>
    </StyledNav>
  );
}

export default Navbar;
