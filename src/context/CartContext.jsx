import { createContext, useContext } from "react";
import { CartReducer } from "../hooks/CartReducer";
export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = CartReducer();
  const subTotal = cart?.cart?.reduce((acc, product) => {
    const newPrice = product.quantity * product.product.price;
    return acc + newPrice;
  }, 0);
  const value = { cart, dispatch, subTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
