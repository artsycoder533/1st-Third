import React, { useReducer } from "react";
import { GlobalStyle } from "./components/App/style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import { AppContext } from "./Contexts/Context";

function App() {
  return (
    <AppContext.Provider>
      <Router>
        <Header />
        <GlobalStyle />
        <Hero />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
