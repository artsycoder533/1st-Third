import { stars, prices } from "../components/Filter/filterData";

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

  if (action.type === "TOGGLE_PRICE") {
    const { isChecked } = state;
    const { selected_prices } = state.filters;
    const { index, value } = action.payload;
    let copyOfIsChecked = [...isChecked];
    let copyOfSelectedPrices = [...selected_prices];
    copyOfIsChecked[index] = !isChecked[index];

    //if price has been checked
    if (copyOfIsChecked[index]) {
      copyOfSelectedPrices.push(value);
    }
    //if price has been unchecked
    if (!copyOfIsChecked[index]) {
      if (copyOfSelectedPrices.includes(value)) {
        copyOfSelectedPrices = copyOfSelectedPrices.filter((price) => {
          return price !== value;
        });
      }
    }

    return {
      ...state,
      isChecked: copyOfIsChecked,
      filters: { ...state.filters, selected_prices: [...copyOfSelectedPrices] },
    };
  }

  if (action.type === "TOGGLE_RATING") {
    const { isRatingChecked } = state;
    const { selected_ratings } = state.filters;
    const { index, value } = action.payload;
    let copyOfIsRatingChecked = [...isRatingChecked];
    copyOfIsRatingChecked[index] = !isRatingChecked[index];
    let copyOfSelectedRatings = [...selected_ratings];

    //if rating has been checked
    if (copyOfIsRatingChecked[index]) {
      console.log("checked");
      copyOfSelectedRatings.push(value);
    }

    //if rating has been unchecked
    if (!copyOfIsRatingChecked[index]) {
      console.log("unchecked");
      if (copyOfSelectedRatings.includes(value)) {
        copyOfSelectedRatings = copyOfSelectedRatings.filter((rating) => {
          return rating !== value;
        });
      }
    }
    return {
      ...state,
      isRatingChecked: copyOfIsRatingChecked,
      filters: {
        ...state.filters,
        selected_ratings: [...copyOfSelectedRatings],
      },
    };
  }

  if (action.type === "HANDLE_FILTERS") {
    const { value } = action.payload;
    return { ...state, filters: { ...state.filters, category: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { products } = state;
    const { category, selected_prices, selected_ratings } = state.filters;
    let copyOfProducts = [...products];

    //category
    if (category !== "all") {
      copyOfProducts = copyOfProducts.filter((product) => {
        return product.category === category;
      });
    }

    //price
    if (selected_prices.length) {
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
          }).length
      );
    }

    //rating
    if (selected_ratings.length) {
      copyOfProducts = copyOfProducts.filter(
        (product) =>
          selected_ratings.filter((selectedRating) => {
            return Math.floor(product.rating.rate) === Number(selectedRating);
          }).length
      );
    }

    return { ...state, filtered_products: [...copyOfProducts] };
  }

  if (action.type === "RESET_FILTERS") {
    return {
      ...state,
      sort_type: "low",
      isChecked: new Array(prices.length).fill(false),
      isRatingChecked: new Array(stars.length).fill(false),
      filters: {
        category: "all",
        selected_prices: [],
        selected_ratings: [],
      },
    };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
