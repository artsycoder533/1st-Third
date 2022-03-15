import React, { useReducer, createContext, useContext, useEffect } from "react";
import filter_reducer from "../reducers/filter_reducer";
import { ProductsContext } from "./ProductsContext";

export const FilterContext = createContext();

const initialState = {
    products: [],
    filtered_products: [],
    sort_type: 'low',
    filters: {
        category: "all",
        price: [],
        rating: ""
    }
};

const FilterContextProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(filter_reducer, initialState);

    //load products
    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
    }, [products]);

    //filter dispatch/sort dispatch
    useEffect(() => {
        dispatch({ type: "SORT_PRODUCTS" });
    }, [products, state.sort_type]);

    //onChange for sort select
    const handleSort = (e) => {
        const value = e.target.value;
        dispatch({ type: "HANDLE_SORT", payload: value });
    }

    //onChange for filters
    const handleFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        dispatch({ type: "HANDLE_FILTERS", payload: { value } });
    }

    const resetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
    }

    return <FilterContext.Provider value={{...state, handleSort, resetFilters, handleFilters}}>
        {children}
    </FilterContext.Provider>
};

export default FilterContextProvider;