import { createContext } from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useAuthContext } from "./authContext";

const CartContext = createContext();

// const cartReducerFunction = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return [...state, { ...action.payload, qty: 1 }];
//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item._id !== action.payload._id);
//     case "INCREASE":
//       return state.map((item) =>
//         item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
//       );

//     case "DECREASE":
//       return state.map((item) =>
//         item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item
//       );

//     default:
//       return { ...cartList };
//   }
// };
const CartContextProvider = ({ children }) => {
  // const initialValue = [];

  // const [cartList, setCartList] = useReducer(cartReducerFunction, initialValue);
  const [cartList, setCartList] = useState([]);
  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    const cartAsyn = async () => {
      try {
        const cartResponse = await axios.get("/api/user/cart", {
          headers: {
            authorization: auth.token,
          },
        });

        setCartList(cartResponse.data.cart);
      } catch (error) {
        console.log(error);
      }
    };
  });

  const addProductToCart = async (product) => {
    try {
      const addToCartResponse = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCartList(addToCartResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const removeFromCartResponse = await axios.delete(
        `/api/user/cart/${productId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCartList(removeFromCartResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProductCartQuantity = async (productId, updateType) => {
    try {
      const updateCartQtyResponse = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCartList(updateCartQtyResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addProductToCart,
        removeProductFromCart,
        updateProductCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };
