import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import FilterContextProvider from "./Contexts/FilterContext";
import ProductContextProvider from "./Contexts/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
