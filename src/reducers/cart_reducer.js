export const cart_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    const { products } = state;
    return { ...state, products: [...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    const { cart, products } = state;
    const id = Number(action.payload);
    const copyOfCart = [...cart];

    //get the index of the product that matches the id
    let product = products.find((item) => {
      return item.id === id;
    });

    //if cart is empty
    if (!cart.length) {
      copyOfCart.push({
        product: {
          details: { ...product },
          quantity: 1,
        },
      });
    }
    if (cart.length) {
      //check if it conains the item
      const index = copyOfCart.findIndex((item) => {
        return item.product.details.id === id;
      });
      //if a match update the quantity
      if (index > -1) {
        copyOfCart[index] = {
          product: {
            details: { ...product },
            quantity: copyOfCart[index].product.quantity + 1,
          },
        };
      }
      //if not a match, add new item
      if (index === -1) {
        copyOfCart.push({
          product: {
            details: { ...product },
            quantity: 1,
          },
        });
      }
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "DECREASE_COUNT") {
    const { cart } = state;
    const id = Number(action.payload);
    let copyOfCart = [...cart];

    //find the item in the cart
    const productIndex = copyOfCart.findIndex((item) => {
      return item.product.details.id === id;
    });

    const product = copyOfCart.find((item) => {
      return item.product.details.id === id;
    });

    //check the quantity
    if (productIndex > -1) {
      let count = copyOfCart[productIndex].product.quantity - 1;
      if (count < 1) {
        //remove item alltogether
        copyOfCart = copyOfCart.filter((item) => {
          return item.product.details.id !== id;
        });
      } else {
        copyOfCart[productIndex] = {
          product: {
            details: { ...copyOfCart[productIndex].product.details },
            quantity: count,
          },
        };
      }
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "UPDATE_CART_COUNT") {
    const { cart } = state;
    const total = cart.reduce((acc, curr) => {
      return acc + curr.product.quantity;
    }, 0);
    return { ...state, totalNumCartItems: total };
  }

  if (action.type === "REMOVE_ITEM") {
    const { cart } = state;
    const id = Number(action.payload);
    let copyOfCart = [...cart];
    copyOfCart = copyOfCart.filter((item) => {
      return item.product.details.id !== id;
    });
    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "CLEAR_CART") {
    const { cart } = state;
    return { ...state, cart: [] };
  }

  if (action.type === "CART_SUBTOTAL") {
    const { cart } = state;
    let total = cart.reduce((acc, curr) => {
      const sum = curr.product.quantity * curr.product.details.price;
      return acc + sum;
    }, 0);
    total = Number(total.toFixed(2));
    return { ...state, subtotal: total };
  }

  if (action.type === "CART_TOTAL") {
    const { shipping_fee, subtotal } = state;
    let total = subtotal + shipping_fee;
    total = total.toFixed(2);
    return { ...state, cart_total: total};
  }

  if (action.type === "CHANGE_VIEW") {
    const { checkout_form } = state;
    return {
      ...state,
      checkout_form: { ...checkout_form, view: checkout_form.view + 1 },
    };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
