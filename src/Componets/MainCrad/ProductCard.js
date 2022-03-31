
import './product.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const ProductCard =()=>{
  const[data,setData]=useState([]);
  useEffect(() => {
  
    const getProducts = async () => {
      try {
        const response = await axios.get("api/products");
       
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
 
     return (
             <div>
             {data &&
             data.map((product) => (
             <div className='content-page'>
             <div className="vertical-card">
             <div className="card-simple">
               <div className="card__container">
                 <p className="card__body">
                   <img src={product.img} alt="" />
                   <h4>
                     {product.title} <i className="far fa-heart"></i>
                     <p>
                       <span className="price-discount">
                         ₹{product.priceDiscount}{" "}
                       </span>
                       <span className="price-originl">
                         ₹{product.priceOriginal}
                       </span>
                       <span className="offer">
                   
                         %OFF)
                       </span>
                     </p>
                   </h4>
                   <span></span>
                   <div className="cart-button">
                     <button  >
                       <i className="fas fa-shopping-cart"></i>Add to cart
                     </button>
                   </div>
                 </p>
               </div>
             </div>
           </div>
             </div>
              ))}
                 
        </div>
    
            
          
    
    )
}
export {ProductCard};