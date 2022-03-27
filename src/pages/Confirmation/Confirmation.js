import React, {useContext} from 'react';
import { Center } from '../../components/App/style';
import { SecondaryLink } from '../../components/Button/style';
import { CartContext } from '../../Contexts/CartContext';
import { Container } from './style';

const Confirmation = () => {
    const { user_email } = useContext(CartContext);

  return (
    <main>
      <Center>
        <SecondaryLink to="/">Back to Home</SecondaryLink>
        <Container>
          <h2>Thank you for your order!</h2>
          <p>Confirmation email sent to: {user_email}</p>
          <p>Order #: XYT02-70598978561947</p>
        </Container>
      </Center>
    </main>
  );
}

export default Confirmation