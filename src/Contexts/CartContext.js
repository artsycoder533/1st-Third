import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext();

const initialState = {
    products: [],
    cart: [],
    totalNumCartItems: 0,
    singleProductAmount: 0,
    cart_total: 0,
    shipping_fee: 5.99
};

const CartContextProvider = ({ children }) => {
    const { singleProduct, products} = useContext(ProductsContext);
    const [state, dispatch] = useReducer(cart_reducer, initialState);
    
    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
    }, [products]);

    useEffect(() => {
       dispatch({type: "UPDATE_CART_COUNT"})
    }, [state.cart]);

    const handleAddToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", payload: id });
    }

    const removeFromCart = () => {
        dispatch({ type: "REMOVE_ITEM" });
    }

    const clearCart = () => {
        
    }

    return (
        <CartContext.Provider value={{...state, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;