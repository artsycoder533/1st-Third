import React, { useReducer, createContext, useEffect } from "react";
import products_reducer from "../reducers/product_reducer";
import { url } from "../components/Filter/filterData";

export const ProductsContext = createContext();

const initialState = {
  openMenu: false,
  loading: false,
  products: [],
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  //set up reducer
  const [state, dispatch] = useReducer(products_reducer, initialState);

  // FUNCTIONS
  //menu toggle
  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  //get all products from api
  const fetchProducts = async () => {
    //show loading
    dispatch({ type: "SHOW_LOADING" });
    try {
      const response = await fetch(url);
      const products = await response.json();
      dispatch({ type: "GET_PRODUCTS", payload: products });
    } catch (error) {
      // handle error
    }
  };

  //get single product from api
  const fetchSingleProduct = async (url) => {
    console.log(url);
    dispatch({ type: "SHOW_LOADING" });
    try {
      const response = await fetch(url);
      const singleProduct = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      //handle error
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleMenu, fetchSingleProduct, url }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
