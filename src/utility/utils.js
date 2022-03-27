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

export const getCurrentDate = () => {
   const date = new Date();
   const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month < 10 ? (month = `0${month}`) : (month = month);
  let day = date.getDate();
  day < 10 ? day = `0${day}` : day = day;
   const currentDate = `${year}-${month}-${day}`;
   return currentDate;
}

export const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}
