
export const isItemInCart = (id, cart) => {
    //console.log(id, cart);
    id = Number(id);
    const index = cart.findIndex(item => {
        console.log(item.product.details.id, id);
        return item.product.details.id  === id;
    });
    console.log(index);
    if (index > -1) {
        return true;
    }
    else {
        return false;
    }
}