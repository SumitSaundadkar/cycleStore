import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {FilterContextProvider} from './Contexts/filter-context';
import {CartContextProvider} from './Contexts/cartContext';
import {WishlistContextProvider} from './Contexts/wishListContext';


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

  <WishlistContextProvider>
  <CartContextProvider>
   <FilterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </FilterContextProvider>
</CartContextProvider>
  </WishlistContextProvider>


  
 
  
   
  </React.StrictMode>,
  document.getElementById("root")
);
