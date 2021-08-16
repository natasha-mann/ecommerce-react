import React, { useState, createContext, useEffect, useContext } from "react";

const BasketContext = createContext();
const { Provider } = BasketContext;

export const BasketProvider = ({ children }) => {
  const getInitialCart = () => {
    JSON.parse(localStorage.getItem("cart"));
  };
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const initialCart = getInitialCart();
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToBasket = (product, qty = 1) => {
    const item = cart.find((item) => {
      if (item.id === product.id && item.size === product.size) {
        return true;
      }
      return false;
    });

    if (item) {
      item.qty += 1;
      setCart([...cart]);
      setShowCart(true);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty,
        },
      ]);
      setShowCart(true);
    }
  };

  const removeItemFromBasket = (product) => {
    console.log("removed", product);
    const item = cart.find((item) => {
      if (item.id === product.id && item.size === product.size) {
        return true;
      }
      return false;
    });

    if (item) {
      item.qty += 1;
      setCart([...cart]);
    } else {
      const newCart = cart.filter((item) => {
        return item.id !== product.id;
      });
      setCart(newCart);
    }
  };

  const basketValue = {
    cart,
    showCart,
    setShowCart,
    addItemToBasket,
    removeItemFromBasket,
  };

  return <Provider value={basketValue}>{children}</Provider>;
};

export const useBasketContext = () => {
  return useContext(BasketContext);
};
