import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext();

const initialState = {
    cart: [],
    totalNumCartItems: 0,
    singleProductAmount: 0,
    shipping_fee: 5.99
};

const CartContextProvider = ({ children }) => {
    const { singleProduct, filtered_products } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(cart_reducer, initialState);
    
    useEffect(() => {
        
    }, []);

    const handleAddToCart = (id) => {
        console.log(id);
        dispatch({ type: "ADD_TO_CART", payload:id });
    }

    return (
        <CartContext.Provider value={{...state, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;