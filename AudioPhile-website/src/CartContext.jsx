import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, productData) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: productId,
            name: productData.name,
            price: productData.Price,
            image: productData.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const Increase = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const Decrease = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      ).filter(item => item !== null)
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        Increase,
        Decrease,
        removeFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
