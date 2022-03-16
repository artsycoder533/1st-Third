export const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];
    
      return { ...state };
    }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
}
