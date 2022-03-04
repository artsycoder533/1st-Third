import React, { useState, createContext, useEffect } from 'react';

const url = "https://fakestoreapi.com/products";
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    //set the state
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState(
        {
            categoryNames: [],
            prices: [],
            ratings: []
        }
    );
    const [filterCat, setFilterCat] = useState("");

    const filterResult = (filterCat) => {
        if (!filterCat) {
            setFilteredProducts([...products]);
        }
        else {
            setFilteredProducts(products.filter(product => {
               return filterCat === product.category;
            }))
        }
    }

    //api call
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setFilteredProducts(products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters, loading, products, openMenu, setOpenMenu, setProducts, filteredProducts, setFilteredProducts, filterResult, setFilterCat }}>
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;