import React, { useReducer, createContext, useEffect } from 'react';
import products_reducer from '../reducers/product_reducer';

const url = "https://fakestoreapi.com/products";


const initialState = {
    openMenu: false,
    loading: false,
    products: [],
}

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
    //set up reducer
    const [state, dispatch] = useReducer(products_reducer, initialState);
   
    //functions
    const toggleMenu = () => {
        dispatch({ type: "TOGGLE_MENU" });
    }

 

    const fetchProducts = async () => {
        //setLoading(true);
        try {
            const response = await fetch(url);
            const products = await response.json();
           // setProducts(products);
           // setFilteredProducts(products);
            //setLoading(false);
        } catch (error) {
           // setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <ProductsContext.Provider value={{...state, toggleMenu}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductContextProvider;