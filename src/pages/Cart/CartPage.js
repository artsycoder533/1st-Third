import React, {useContext} from 'react';
import { ButtonLink, SecondaryButton } from '../../components/Button/style';
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { Center, StyledHeading } from "../../components/App/style";
import { Container, StyledLink } from './style';

function CartPage() {
  const { cart } = useContext(CartContext);


  return (
    <main>
      <StyledHeading>Cart</StyledHeading>
      <Center>
        <Container>
          <StyledLink to="/shop">Continue Shopping</StyledLink>

          {cart.length === 0 ? (
            <h2>Your cart is currently empty....</h2>
          ) : (
            <Cart />
          )}
        </Container>
      </Center>
    </main>
  );
}

export default CartPage