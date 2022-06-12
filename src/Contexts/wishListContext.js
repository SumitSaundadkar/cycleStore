import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useAuthContext } from "./authContext";

const WishlistContext = createContext();

// const wishlistReducerFun = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_WISHLIST":
//       return [...state, { ...action.payload, inWishlist: true }];

//     case "REMOVE_FROM_WISHLIST":
//       return state.filter((item) => item._id !== action.payload._id);
//     default:
//       return state;
//   }
// };

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    const wishListAsync = async () => {
      try {
        const wishresponse = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: auth.token,
          },
        });
        setWishlist(wishresponse.data.wishlist);
      } catch (error) {
        console.log(error);
      }
    };
  });

  const addWishListCart = async (product) => {
    try {
      const addToWishListResponse = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWishlist(addToWishListResponse.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromWishList = async (productId) => {
    try {
      const removeFromWishListResponse = await axios.delete(
        `/api/user/wishlist/${productId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWishlist(removeFromWishListResponse.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        removeProductFromWishList,
        addWishListCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
