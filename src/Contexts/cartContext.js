import { createContext } from "react";
import { useContext, useReducer } from "react";

const cartContext=createContext();


 const cartReducerFunction=(state,action)=>{
     switch (action.type) {
         case "ADD_TO_CART":
             return{...state,cart:[...state.cart,{...action.payload,qty:1}]};
         case "REMOVE_FROM_CART" :
             return {...state,cart:state.cart.filter((obj)=> obj.id != action.payload.id)}; 
         case "INCREASE":
                return {
                  ...state,
                  cart: state.cart.map((item) =>
                    item._id === action.payload._id
                      ? { ...item, qty: item.qty + 1 }
                      : item
                  ),
                }; 
         case "DECREASE":
                return {
                  ...state,
                  cart: state.cart.map((item) =>
                    item._id === action.payload._id
                      ? { ...item, qty: item.qty - 1 }
                      : item
                  ),
                }; 
             
           
     
         default:
            return {...cartList}
     }

 }
const CartContextProvider=({children})=>{
    const initialValue={
        cart:[]
    };
    const[cartList,setCartList]=useReducer(cartReducerFunction,initialValue);
    
    return(
        <cartContext.Provider value={{cartList,setCartList}}>
           {children}
    </cartContext.Provider>
    )

}
const useCart=()=>useContext(cartContext);

export {CartContextProvider,useCart}
   