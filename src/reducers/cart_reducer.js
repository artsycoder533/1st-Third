export const cart_reducer = (state, action) => {

  if (action.type === "LOAD_PRODUCTS") {
    const { products } = state;
    return { ...state, products:[...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];
    copyOfCart.push(action.payload);
      return { ...state, cart: [...copyOfCart] };
  }
  
  if (action.type === "UPDATE_CART_COUNT") {
    const { cart} = state;
    const count = cart.length;
    return { ...state, totalNumCartItems: count };
  }

  if (action.type === "REMOVE_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];
    
    return {...state };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
}
