const filter_reducer = (state, action) => {
    if (action.type === "LOAD_PRODUCTS") {
        return { ...state, products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters } };
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

        return { ...state, filtered_products: copyOfFilteredProducts };
    }
}

export default filter_reducer;