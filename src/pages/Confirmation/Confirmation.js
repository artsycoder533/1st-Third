import React, {useContext} from 'react';
import { Center } from '../../components/App/style';
import { SecondaryLink } from '../../components/Button/style';
import { CheckoutContext } from '../../Contexts/CheckoutContext';
import { Container } from './style';

const Confirmation = () => {
    const { checkout_form } = useContext(CheckoutContext);
    const { email } = checkout_form;
    console.log(email);

  return (
    <main>
      <Center>
        <SecondaryLink to="/">Back to Home</SecondaryLink>
        <Container>
          <h2>Thank you for your order!</h2>
          <p>Confirmation email sent to: {email}</p>
          <p>Order #: XYT02-70598978561947</p>
        </Container>
      </Center>
    </main>
  );
}

export default Confirmation