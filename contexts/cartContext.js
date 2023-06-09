"use client";

import { reducer } from "./reducer";

const {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} = require("react");

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const initialCartState = cart;
  const [state, dispatch] = useReducer(reducer, initialCartState);

  console.log(cart);

  const getLocalstorageCartItem = () => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      setCart(storedCart?.length > 0 ? storedCart : []);
    }
  };

  const saveToLocalstorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  };

  useEffect(() => {
    if (state.length > 0) {
      saveToLocalstorage();
    }
  }, [state]);

  useEffect(() => {
    getLocalstorageCartItem();
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
