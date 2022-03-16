import React, { createContext, useReducer } from "react";
import { cart_reducer } from "../reducers/cart_reducer";

export const CartContext = createContext();

const initialState = {
    
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState);

    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}

export default CartContextProvider;