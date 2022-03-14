import React, {useContext} from 'react';
import { StyledHamburger, MiddleLine, TopLine, BottomLine } from './style';
import { ProductsContext } from '../../Contexts/ProductsContext';

function Hamburger() {
  const { openMenu, setOpenMenu } = useContext(ProductsContext);

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