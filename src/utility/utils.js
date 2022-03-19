export const isItemInCart = (id, cart) => {
  id = Number(id);
  const index = cart.findIndex((item) => {
    return item.product.details.id === id;
  });
  if (index > -1) {
    return true;
  } else {
    return false;
  }
};
