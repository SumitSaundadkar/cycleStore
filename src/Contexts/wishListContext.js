import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext(null);

const wishlistReducerFun = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      
        return [...state,{...action.payload,inWishlist:true}]
     
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item._id !== action.payload._id); 
    default:
      return state;
  }
};

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFun, []);
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };