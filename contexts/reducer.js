let storedCart;

if (typeof window !== "undefined") {
  storedCart = JSON.parse(localStorage.getItem("cart"));
}

export function reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const newCartItem = action.payload;

    if (newCartItem.quantity < 1) {
      return [...state];
    }

    return [...state, newCartItem];
  }

  if (action.type === "DECREASE_CART_ITEM") {
    const { id, size } = action.payload;
    const index = state.findIndex((obj) => obj.id === id && obj.size === size);

    if (state.length > 0) {
      state[index].quantity = state[index]?.quantity - 1;
    } else {
      return [];
    }

    const cart = state.filter((item) => item.quantity > 0);

    return [...cart];
  }

  if (action.type === "INCREASE_CART_ITEM") {
    const { id, size } = action.payload;
    const index = state.findIndex((obj) => obj.id === id && obj.size === size);

    state[index].quantity = state[index]?.quantity + 1;

    return [...state];
  }
}
