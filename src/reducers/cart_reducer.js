export const cart_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    const { products } = state;
    return { ...state, products: [...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];

    //if cart isnt empty
    if (cart.length) {
      //check if it conains the item
      const index = copyOfCart.findIndex((item) => {
        console.log(item);
        return item.product.details.id === action.payload.id;
      });
      console.log(index);
      //if a match update the count
      if (index > -1) {
        copyOfCart[index].product.quantity++;
      }
      //not a match
      else {
        copyOfCart.push({
          product: {
            details: action.payload,
            quantity: 1,
          },
        });
      }
    }
    else {
      copyOfCart.push({
        product: {
          details: action.payload,
          quantity: 1,
        },
      });
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "UPDATE_CART_COUNT") {
    const { cart } = state;
    const count = cart.length;
    return { ...state, totalNumCartItems: count };
  }

  if (action.type === "REMOVE_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];

    return { ...state };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
