const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters },
    };
  }

  if (action.type === "HANDLE_SORT") {
    return { ...state, sort_type: action.payload };
  }

  if (action.type === "SORT_PRODUCTS") {
    const { sort_type, filtered_products } = state;
    let copyOfFilteredProducts = [...filtered_products];

    if (sort_type === "low") {
      copyOfFilteredProducts = copyOfFilteredProducts.sort((current, next) => {
        return current.price - next.price;
      });
    }

    if (sort_type === "high") {
      copyOfFilteredProducts = copyOfFilteredProducts.sort((current, next) => {
        return next.price - current.price;
      });
    }

    if (sort_type === "a-z") {
      copyOfFilteredProducts = copyOfFilteredProducts.sort((current, next) => {
        return current.title.localeCompare(next.title);
      });
    }

    if (sort_type === "z-a") {
      copyOfFilteredProducts = copyOfFilteredProducts.sort((current, next) => {
        return next.title.localeCompare(current.title);
      });
    }
    return { ...state, filtered_products: copyOfFilteredProducts };
  }

  if (action.type === "HANDLE_FILTERS") {
    const { value } = action.payload;
    return { ...state, filters: { ...state.filters, category: value } };
    }
    
    if (action.type === "FILTER_PRODUCTS") {
        //get all products from the state
        const { products } = state;
        //get all filter categories from the state
        const { category, price, rating } = state.filters;
        let copyOfProducts = [...products];

        console.log(category === "all");
        //category
        if (category !== "all") {
            copyOfProducts = copyOfProducts.filter(product => {
                console.log(product.category, category);
                return product.category === category.toLowerCase();
            });
        }

        return { ...state, filtered_products: copyOfProducts };
 }

  if (action.type === "RESET_FILTERS") {
    return {
      ...state,
      sort_type: "low",
      filters: {},
    };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
