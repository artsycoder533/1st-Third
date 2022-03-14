
const products_reducer = (state, action) => {
    if (action.type === "TOGGLE_MENU") {
        return {...state, openMenu: !state.openMenu}
    }
}

export default products_reducer;