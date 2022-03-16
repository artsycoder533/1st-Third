import React, {useContext} from 'react';
import { ButtonLink, SecondaryButton } from '../../components/Button/style';
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { Center } from "../../components/App/style";

function CartPage() {
  const { cart } = useContext(CartContext);


  return (
    <main>
      <Center>
        <Link to="/shop">Continue Shopping</Link>
        {cart.length === 0 ? (
          <h2>There are no items in your cart....</h2>
        ) : null}

        <Cart />
      </Center>
    </main>
  );
}

export default CartPage