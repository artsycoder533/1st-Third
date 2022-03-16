import React, { useReducer, createContext, useContext, useEffect } from "react";
import filter_reducer from "../reducers/filter_reducer";
import { ProductsContext } from "./ProductsContext";
import { prices } from "../components/Filter/filterData";

export const FilterContext = createContext();

const initialState = {
    products: [],
    filtered_products: [],
    sort_type: 'low',
    isChecked: new Array(prices.length).fill(false),
    filters: {
        category: "all",
        selected_prices: [],
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
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORT_PRODUCTS" });
    }, [ state.products, state.sort_type, state.filters, ]);

    //onChange for sort select
    const handleSort = (e) => {
        const value = e.target.value;
        dispatch({ type: "HANDLE_SORT", payload: value });
    }

    //onChange for filters
    const handleFilters = (e, index) => {
        let name = e.target.name;
        let value = e.target.value;
        let type = e.target.type;
        console.log(name, value, type, index);

        //if type is checkbox
        if (type === "checkbox") {
            dispatch({ type: "TOGGLE_CHECKED", payload: { index, value,  name } });
        }
        if(type === "radio") {
            dispatch({ type: "HANDLE_FILTERS", payload: { value } });
        }
        
    }

    const resetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
    }

    return <FilterContext.Provider value={{...state, handleSort, resetFilters, handleFilters}}>
        {children}
    </FilterContext.Provider>
};

export default FilterContextProvider;