import React from "react";
import { Link } from "react-router-dom";
import { Center } from "../../components/App/style";

const Checkout = () => {
  return (
    <main>
      <Center>
        <h2>checkout page</h2>
        <Link to="/cart">Back to Cart</Link>
      </Center>
    </main>
  );
};

export default Checkout;
