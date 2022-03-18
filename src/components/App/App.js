import React from "react";
import { GlobalStyle } from "./style";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shop from "../../pages/Shop/Shop";
import Contact from "../../pages/Contact/Contact";
import CartPage from "../../pages/Cart/CartPage";
import SingleProductPage from "../../pages/SingleProductPage/SingleProductPage";
import Checkout from "../../pages/Checkout/Checkout";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<SingleProductPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
