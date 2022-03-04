import React, {useContext} from 'react';
import { StyledHamburger, MiddleLine, TopLine, BottomLine } from './style';
import { FilterContext } from '../../Contexts/FilterContext';

function Hamburger() {
  const { openMenu, setOpenMenu } = useContext(FilterContext);

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