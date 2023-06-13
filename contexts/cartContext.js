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

let lsCart;

if (typeof window !== "undefined") {
  lsCart = JSON.parse(localStorage.getItem("cart"));
}

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const initialCartState = lsCart !== null ? lsCart : [];
  const [state, dispatch] = useReducer(reducer, initialCartState);

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
    getLocalstorageCartItem();
  };

  useEffect(() => {
    saveToLocalstorage();
  }, [state]);

  useEffect(() => {
    getLocalstorageCartItem();
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decreaseCartItem = (id, size) => {
    dispatch({ type: "DECREASE_CART_ITEM", payload: { id, size } });
  };

  const increaseCartItem = (id, size) => {
    dispatch({ type: "INCREASE_CART_ITEM", payload: { id, size } });
  };

  const sortCart = (cart, uniqueCartIds) => {
    const sortedByIdCartArray = [];
    const sortedBySizeCartArray = [];

    uniqueCartIds.map((id) => {
      const uniqueCartItem = cart.filter((item) => item.id === id);
      sortedByIdCartArray.push(uniqueCartItem);
    });

    if (sortedByIdCartArray.length > 0) {
      sortedByIdCartArray.map((itemsArray) => {
        // small
        const sizeSmall = itemsArray.filter(
          (item) => item.size.toLowerCase() === "small"
        );
        if (sizeSmall.length > 0) {
          const sizeSmallQuantity = sizeSmall?.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeSmall[0]?.id,
            quantity: sizeSmallQuantity,
            size: sizeSmall[0]?.size,
            image: sizeSmall[0]?.image,
            title: sizeSmall[0]?.title,
            price: sizeSmall[0]?.price,
          });
        }
        // medium
        const sizeMedium = itemsArray.filter(
          (item) => item.size.toLowerCase() === "medium"
        );
        if (sizeMedium.length > 0) {
          const sizeMediumQuantity = sizeMedium?.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeMedium[0]?.id,
            quantity: sizeMediumQuantity,
            size: sizeMedium[0]?.size,
            image: sizeMedium[0]?.image,
            title: sizeMedium[0]?.title,
            price: sizeMedium[0]?.price,
          });
        }
        // large
        const sizeLarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "large"
        );
        if (sizeLarge.length > 0) {
          const sizeLargeQuantity = sizeLarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeLarge[0]?.id,
            quantity: sizeLargeQuantity,
            size: sizeLarge[0]?.size,
            image: sizeLarge[0]?.image,
            title: sizeLarge[0]?.title,
            price: sizeLarge[0]?.price,
          });
        }
        // xlarge
        const sizeXlarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "x-large"
        );
        if (sizeXlarge.length > 0) {
          const sizeXlargeQuantity = sizeXlarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeXlarge[0]?.id,
            quantity: sizeXlargeQuantity,
            size: sizeXlarge[0]?.size,
            image: sizeXlarge[0]?.image,
            title: sizeXlarge[0]?.title,
            price: sizeXlarge[0]?.price,
          });
        }
        // xxlarge
        const sizeXxlarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "xx-large"
        );
        if (sizeXxlarge.length > 0) {
          const sizeXxlargeQuantity = sizeXxlarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeXxlarge[0]?.id,
            quantity: sizeXxlargeQuantity,
            size: sizeXxlarge[0]?.size,
            image: sizeXxlarge[0]?.image,
            title: sizeXxlarge[0]?.title,
            price: sizeXxlarge[0]?.price,
          });
        }
      });
    }
    return sortedBySizeCartArray;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        sortCart,
        decreaseCartItem,
        increaseCartItem,
        subTotal,
        setSubTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
