export function reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const newCartItem = action.payload;
    if (newCartItem.quantity < 1) {
      return [...state];
    }
    localStorage.setItem("cart", JSON.stringify(state));
    return [...state, newCartItem];
  }
}
