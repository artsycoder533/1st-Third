import React, { useReducer, createContext, useEffect } from 'react';
import products_reducer from '../ProductsReducer.js/Reducer';

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
    //set the state
    // const [openMenu, setOpenMenu] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState("");
    // const [selectedPrices, setSelectedPrices] = useState([]);

    // const filterResult = (filterCat) => {
    //     const copyOfProducts = [...products];
    //     if (selectedPrices.length) {
    //         console.log("selected prices has length");
    //       setFilteredProducts(
    //         filteredProducts.filter((product) => {
    //           return filterCat === product.category;
    //         })
    //       );
    //     }
    //     if (filterCat) {
    //         console.log("filterCat has a value", filterCat);
    //         setFilteredProducts(
    //           filteredProducts.filter((product) => {
    //             return filterCat === product.category;
    //           })
    //         );
    //     }
        
    //     if (!filterCat) {
    //         console.log("no filter category present");
    //         setFilteredProducts([...products]);
    //     }
    // }

    //api call
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
        <ProductsContext.Provider value={{...state }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductContextProvider;