import React from "react";
import { Link } from "react-router-dom";
import { Center, StyledHeading } from "../../components/App/style";

const Checkout = () => {
  return (
    <main>
      <StyledHeading>Checkout</StyledHeading>
      <Center>
        <Link to="/cart">Back to Cart</Link>
        <form action="">
          <fieldset>
            <legend>Customer Details:</legend>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" id="fname" />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" id="lname" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </fieldset>

          <fieldset>
            <legend>Shipping Details:</legend>
            <label htmlFor="address">Street Address:</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="state" />
            <label htmlFor="zip">Zip Code:</label>
            <input type="number" name="zip" id="zip" />
          </fieldset>

          <fieldset>
            <legend>Billing Details:</legend>
            <label htmlFor="match">Same as shipping:</label>
            <input type="checkbox" name="match" id="match" />

            <label htmlFor="address">Street Address:</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="state" />
            <label htmlFor="zip">Zip Code:</label>
            <input type="number" name="zip" id="zip" />
          </fieldset>

          <fieldset>
            <legend>Payment: </legend>
            
          </fieldset>
        </form>
      </Center>
    </main>
  );
};

export default Checkout;
