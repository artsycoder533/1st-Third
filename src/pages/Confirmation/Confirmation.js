import React, {useContext} from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { Center } from '../../components/App/style';
import { SecondaryLink } from '../../components/Button/style';

const Confirmation = () => {
    const { checkout_form } = useContext(CartContext);
    const { email } = checkout_form;
    console.log(email);

  return (
      <main>
          <Center>
              <h2>Thank you for your order!</h2>
              <p>Confirmation email sent to: {email}</p>
              <p>Order #: XYT02-70598978561947</p>
              <SecondaryLink to="/">Back to Home</SecondaryLink>
          </Center>
    </main>
  )
}

export default Confirmation