import { useReducer } from "react";
import { actionsCartReducer } from "../helpers/actionsCartReducer";
const initialState = {
  cart: [],
};

export const CartReducer = () => {
  const [cart, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case actionsCartReducer.addNewProduct: {
        const newProduct = action.product;

        const cartContainProduct = state.cart.find(({ product }) => {
          return product?.id === newProduct?.id ? true : false;
        });

        return cartContainProduct
          ? {
              ...state,
              cart: state.cart.map((obj) => {
                return obj.product.id === newProduct.id
                  ? {
                      ...obj,
                      quantity: obj.quantity + 1,
                    }
                  : obj;
              }),
              // subTotal: state.subTotal + newProduct.price,
            }
          : {
              ...state,
              cart: [
                ...state.cart,
                {
                  product: newProduct,
                  quantity: action.quantity ? action.quantity : 1,
                },
              ],
            };
      }
      case actionsCartReducer.deleteProduct: {
        const productToDelete = action.product;

        return {
          ...state,
          cart: state.cart.filter((obj) => {
            return obj.product.id !== productToDelete.id;
          }),
        };

        // state.cart.filter(
        //   ({ product }) => product.id !== productToDelete.id
        // );
      }
      case actionsCartReducer.addOldProduct: {
        const productToAdd = action.product;
        return {
          ...state,
          cart: state.cart.map((obj) => {
            return obj.product.id === productToAdd.id
              ? { ...obj, quantity: obj.quantity + 1 }
              : obj;
          }),
        };
      }
      case actionsCartReducer.substractOldProduct: {
        const productToAdd = action.product;
        return {
          ...state,
          cart: state.cart.map((obj) => {
            return obj.product.id === productToAdd.id
              ? { ...obj, quantity: obj.quantity - 1 }
              : obj;
          }),
        };
      }
      default: {
        return state;
      }
    }
  });

  return [cart, dispatch];
};
