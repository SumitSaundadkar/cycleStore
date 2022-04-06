
import './product.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {useFilterContext} from '../../Contexts/filter-context';
import {useCart} from '../../Contexts/cartContext';
import { Link } from 'react-router-dom';
import {useWishlistContext} from '../../Contexts/wishListContext';


const ProductCard =()=>{
  const[data,setData]=useState([]);
  const {cartList,setCartList}=useCart();
  const {wishlistState,wishlistDispatch}=useWishlistContext();
  const {cart}=cartList
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

  const { productListState } = useFilterContext();
  

  const sortByPrice = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return [...data].sort((a, b) => b.priceDiscount - a.priceDiscount);
    } else if (sortBy === "LOW_TO_HIGH") {
      return [...data].sort((a, b) => a.priceDiscount - b.priceDiscount);
    }
    return data;
  };

  const filterByCategory = (products, categoryName) => {
    if (categoryName.length !== 0) {
      return products.filter((item) => categoryName.includes(item.category));
    }
    return products;
  };

  const byRating = (data, ratingCompare) => {
    return data.filter((item) => item.rating >= ratingCompare);
  };

  
  

  const filteredProductList =  
   filterByCategory( byRating(sortByPrice([...data], productListState.sortBy),productListState.rating) ,productListState.categoryName )


  
  
     
     
  


  
     return (
             <div>
            <h2 className='product_length_heading'>Showing All Product <span className='product_length'>(Showing {filteredProductList.length} products.)</span></h2>
             {filteredProductList &&
             filteredProductList.map((product) => (
             <div className='content-page'>
             <div className="vertical-card">
             <div className="card-simple">
               <div className="card__container">
              
                 <p className="card__body">
                   <img src={product.img} alt="" />
                   <h4>
                   
                     {product.title} <button onClick={() =>
                      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: {product} })
                    }><i className= "far fa-heart" ></i></button>
                     <p>
                       <span className="price-discount">
                         ₹{product.priceDiscount}{" "}
                       </span>
                       <span className="price-originl">
                         ₹{product.priceOriginal}
                       </span>
                       <span className="offer">
                       
                        {Math.floor(
                          Math.abs((product.priceDiscount / product.priceOriginal) * 100 - 100)
                        )}
                        %OFF
                       </span>
                       <span style={{backgroundColor:'lightgray',borderRadius:"5px"}}>{product.rating}<i style={{color:'yellow'}} class="fa fa-star" ></i></span>
                     </p>
                   </h4>
               
                   {cart.find((cartItem) => cartItem.product._id === product._id) ? (
                    <div className="cart-button">
                    <Link to='/cart'>
                    <button>
                    <i className="fas fa-shopping-cart"></i>Go to cart
                     
                    </button></Link>
                  </div>
                  ) : (
                    <div className="cart-button">
                    <button onClick={() =>
                     setCartList({ type: "ADD_TO_CART", payload: {product} })
                   } >
                   <i className="fas fa-shopping-cart"></i> Add to cart
                    </button>
                  </div>
                  )}


                  

                
                  
                  
                 


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