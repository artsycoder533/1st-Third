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

  if (action.type === "TOGGLE_CHECKED") {
    console.log("TOGGLE_CHECKED clicked");
    const { isChecked } = state;

    const { selected_prices } = state.filters;
    const { index, value,  name } = action.payload;
    let copyOfIsChecked = [...isChecked];
    let copyOfSelectedPrices = [...selected_prices];
    copyOfIsChecked[index] = !isChecked[index];
      console.log(value);
      //check if value is not checked
      if (copyOfIsChecked[index]) {
          console.log("checkbox checked");
          copyOfSelectedPrices.push(value);
      }
      if (!copyOfIsChecked[index]) {
          console.log("checkbox unchecked");
          if (copyOfSelectedPrices.includes(value)) {
              console.log("name found");
              copyOfSelectedPrices = copyOfSelectedPrices.filter(price => {
                  return price !== value;
              })
          }
      }
    
    console.log(copyOfSelectedPrices);
    return {
      ...state,
      isChecked: copyOfIsChecked,

      filters: { ...state.filters, selected_prices: [...copyOfSelectedPrices] },
    };
  }

  if (action.type === "HANDLE_FILTERS") {
    const { value } = action.payload;
    return { ...state, filters: { ...state.filters, category: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    console.log("HANDLE_FILTERS called");
    //get all products from the state
    const { products } = state;
    //get all filter categories from the state
    const { category, selected_prices, rating } = state.filters;
    let copyOfProducts = [...products];

    console.log(selected_prices);
    //category
    if (category !== "all") {
      copyOfProducts = copyOfProducts.filter((product) => {
        return product.category === category;
      });
    }

    //price
    if (selected_prices.length) {
      console.log("selected prices has length");
      copyOfProducts = copyOfProducts.filter(
        (product) =>
          selected_prices.filter((selectedPrice) => {
            if (selectedPrice === "and up") {
              return product.price >= 500.0;
            } else {
              return (
                product.price >= selectedPrice - 49.99 &&
                product.price <= selectedPrice
              );
            }
          }).length);
    }

    return { ...state, filtered_products: copyOfProducts };
  }

  if (action.type === "RESET_FILTERS") {
    return {
      ...state,
      sort_type: "low",
      filters: {
        category: "all",
        price: [],
        rating: "",
      },
    };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
