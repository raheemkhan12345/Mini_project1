import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // to parsist data to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // to add item to cart
  const addItem = (item) => {
    setCart((prev) => {
      const existing = pre.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.p.qtv + 1 } : p,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // to increase value of item in cart
  const increment = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  // to decrease the value if 0 than remove from cart
  const decrement = (id) => {
    setCart(
      (prev) =>
        prev.map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p)).filter((p) => p.qty > 0)  // remove the item if qlty = 0
    );
  };

  // to remove item immediatly from cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !==  id));
  };

  // to clear the cart
  const clearCart = () => setCart([]);

    // helper: robust price parser
  const parsePrice = (price) => {
    if (typeof price === "number" && isFinite(price)) return price;
    if (!price) return 0;
    // convert to string and strip currency symbols, spaces, and letters,
    // keep digits, minus and dot. remove commas.
    let s = String(price).trim();
    // remove all characters except digits, dot, minus
    s = s.replace(/[^0-9.\-]/g, "");
    // if multiple dots, keep first dot only
    const parts = s.split(".");
    if (parts.length > 2) {
      const first = parts.shift();
      s = first + "." + parts.join("");
    }
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
  }; // check the number is right corect fro sum or not 

  // totals
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = cart.reduce((sum, p) => sum + parsePrice(p.price) * p.qty, 0);

  return <cartContext.Provider value={{ cart, totalItems, totalPrice, addItem, increment, decrement, removeItem, clearCart }}>{children}</cartContext.Provider>;
};

export const useCart = () => useContext(cartContext);
