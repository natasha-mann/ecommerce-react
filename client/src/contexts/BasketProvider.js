import React, { createContext, useContext, useReducer, useMemo } from "react";

const BasketContext = createContext();
const { Provider } = BasketContext;

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_BASKET") {
    const itemInCart = state.cart.find(
      (item) =>
        item.id === action.payload.product.id &&
        item.size === action.payload.product.size
    );
    let newCart;
    if (itemInCart) {
      newCart = state.cart.map((item) => {
        if (
          item.id === action.payload.product.id &&
          item.size === action.payload.product.size
        ) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }

        return item;
      });
    } else {
      newCart = [
        {
          ...action.payload.product,
          qty: 1,
        },
        ...state.cart,
      ];
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    return { ...state, cart: newCart, showCart: true };
  }

  if (action.type === "REMOVE_ITEM_FROM_BASKET") {
    const itemInCart = state.cart.find(
      (item) =>
        item.id === action.payload.product.id &&
        item.size === action.payload.product.size
    );

    if (itemInCart) {
      const newCart = state.cart
        .map((item) => {
          if (item.qty === 1) {
            return;
          }

          if (
            item.id === action.payload.product.id &&
            item.size === action.payload.product.size &&
            item.qty > 1
          ) {
            console.log("payload", action.payload.product);
            return {
              ...item,
              qty: item.qty - 1,
            };
          }

          return item;
        })
        .filter((item) => item);

      localStorage.setItem("cart", JSON.stringify(newCart));

      return { ...state, cart: newCart, showCart: true };
    } else {
      return state;
    }
  }

  if (action.type === "TOGGLE_CART") {
    return { ...state, showCart: action.payload };
  }

  return state;
};

export const BasketProvider = ({ children }) => {
  const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    showCart: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Provider value={contextValue}>{children}</Provider>;
};

export const useBasketContext = () => {
  return useContext(BasketContext);
};
