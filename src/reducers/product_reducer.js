
const products_reducer = (state, action) => {
    //mobile menu toggle
    if (action.type === "TOGGLE_MENU") {
        return { ...state, openMenu: !state.openMenu };
    }

    //show loading
    if (action.type === "SHOW_LOADING") {
        return { ...state, loading: true };
    }

    //get products
    if (action.type === "GET_PRODUCTS") {
        return { ...state, loading: false, products: action.payload };
    }

    //get single product
    if (action.type === "GET_SINGLE_PRODUCT") {
        return {...state, loading: false, singleProduct: action.payload}
    }

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default products_reducer;