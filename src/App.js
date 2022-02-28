import React, { useReducer } from "react";
import { GlobalStyle } from "./components/App/style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
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
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
