import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext();

const initialState = {
    products: [],
    cart: [],
    totalNumCartItems: 0,
    subtotal: 0,
    cart_total: 0,
    shipping_fee: 5.99,
    
};

const CartContextProvider = ({ children }) => {
    const { products} = useContext(ProductsContext);
    const [state, dispatch] = useReducer(cart_reducer, initialState);
    
    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({ type: "UPDATE_CART_COUNT" });
        dispatch({ type: "CART_SUBTOTAL" });
         dispatch({ type: "CART_TOTAL" });
    }, [state.cart]);

    const handleAddToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", payload: id });
    }

    const decreaseCartCount = (id) => {
        dispatch({ type: "DECREASE_COUNT", payload: id });
    }

    const removeItemFromCart = (id) => {
        dispatch({type: "REMOVE_ITEM", payload:id})
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    const getSubtotal = () => {
        dispatch({ type: "CART_SUBTOTAL" });
    }

    const getTotal = () => {
        dispatch({ type: "CART_TOTAL" });
    }

    return (
      <CartContext.Provider
        value={{ ...state, handleAddToCart, decreaseCartCount, clearCart, removeItemFromCart, getSubtotal, getTotal }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartContextProvider;