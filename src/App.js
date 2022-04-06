import "./App.css";
import {Navbar} from './Componets/NavBar/Navbar';
import { HomePage } from "./Pages/HomePage";
import { StorePage } from "./Componets/StorePage/store";
import { MyCartPage } from "./Pages/AddToCardCart/cart";
import {WishlistPage} from './Pages/wishlispage/wishList'
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";


function App() {
  return (
   <div>
   <Navbar/>
   <Routes>
   <Route path="/" element={<HomePage />} / >
   <Route path="/store" element={<StorePage/>} / >
   <Route path="/cart" element={<MyCartPage/>} / >
   <Route path="/wishlist" element={<WishlistPage/>} / >
   
 
   
   </Routes>
   
   
   
  
   </div>
    
    
  );
}

export default App;
