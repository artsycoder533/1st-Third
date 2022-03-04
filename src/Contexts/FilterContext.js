import React, { useState, createContext, useEffect } from 'react';

const url = "https://fakestoreapi.com/products";
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    //set the state
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState(
        {
            categories: [],
            prices: [],
            ratings: []
        }
    );

    //api call
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters, loading, products, openMenu, setOpenMenu }}>
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;