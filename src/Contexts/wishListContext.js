import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext(null);

const wishlistReducerFun = (wishlistState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishList: [
          ...wishlistState.wishList,
          { ...action.payload, inWishlist: true },
        ],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishList: wishlistState.wishList.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return { ...wishlistState };
  }
};

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFun, {
    wishList: [],
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };