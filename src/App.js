import "./App.css";
import {Navbar} from './Componets/NavBar/Navbar';
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";


function App() {
  return (
   <div>
   <Navbar/>
   <HomePage/>
   </div>
    
    
  );
}

export default App;
