

export const cart_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    const { products } = state;
    return { ...state, products: [...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];

    //if cart is empty
    if (!cart.length) {
      copyOfCart.push({
        product: {
          details: action.payload,
          quantity: 1,
        },
      });
    }
    if(cart.length) {
      //check if it conains the item
      const index = copyOfCart.findIndex((item) => {
        console.log(item);
        return item.product.details.id === action.payload.id;
      });
      //if a match update the quantity
      if (index > -1) {
        copyOfCart[index] = {
          product: {
            details: action.payload,
            quantity: copyOfCart[index].product.quantity + 1
          }
        }
      }
      //if not a match, add new item
      if(index === -1) {
        copyOfCart.push({
          product: {
            details: action.payload,
            quantity: 1,
          },
        });
      }
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "UPDATE_CART_COUNT") {
    const { cart } = state;
    const total = cart.reduce((acc, curr) => {
      return acc + curr.product.quantity;
    }, 0)
    console.log("total: ", total);
    return { ...state, totalNumCartItems: total };
  }

  if (action.type === "REMOVE_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];

    return { ...state };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
