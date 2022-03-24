import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import CartContextProvider from "./Contexts/CartContext";
import FilterContextProvider from "./Contexts/FilterContext";
import ProductContextProvider from "./Contexts/ProductsContext";
import CheckoutContextProvider from "./Contexts/CheckoutContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <CheckoutContextProvider>
            <App />
          </CheckoutContextProvider>
        </CartContextProvider>
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
