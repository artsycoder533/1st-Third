import React, { useState, createContext, useEffect } from 'react';

const url = "https://fakestoreapi.com/products";
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    //set the state
    const [openMenu, setOpenMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);

    const filterResult = (filterCat) => {
        const copyOfProducts = [...products];
        if (selectedPrices.length) {
            console.log("selected prices has length");
          setFilteredProducts(
            filteredProducts.filter((product) => {
              return filterCat === product.category;
            })
          );
        }
        if (filterCat) {
            console.log("filterCat has a value", filterCat);
            setFilteredProducts(
              filteredProducts.filter((product) => {
                return filterCat === product.category;
              })
            );
        }
        
        if (!filterCat) {
            console.log("no filter category present");
            setFilteredProducts([...products]);
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
        <FilterContext.Provider value={{loading, products, openMenu, setOpenMenu, setProducts, filteredProducts, setFilteredProducts, filterResult, selectedCategory, setSelectedCategory, setSelectedPrices, selectedPrices }}>
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;