import React, { useReducer } from "react";
import { GlobalStyle } from "./components/App/style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import { AppContext } from "./Contexts/Context";

const initialState = {
    menuStatus: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state;
   }
}

function App() {
  const [openMenu, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={""}>
      <Router>
        <Header />
        <GlobalStyle />
        <Hero />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
