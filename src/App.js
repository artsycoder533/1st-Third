import React from "react";
import { GlobalStyle } from "./components/App/style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
