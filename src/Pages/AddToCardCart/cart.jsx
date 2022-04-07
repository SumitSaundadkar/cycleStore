import {useCart} from "../../Contexts/cartContext";
import './cart.css';
import { Link } from "react-router-dom";
import { PriceCartPage } from "../../Pages/PricecartPage/pricecart";
import {useWishlistContext} from "../../Contexts/wishListContext";

const MyCartPage=()=>{
  const {cartList,setCartList}=useCart();
  const {wishlistState,wishlistDispatch}=useWishlistContext();
 const {cart}=cartList;

 const {wishList}=wishlistState;

 console.log (wishList);
 

 
 
  return(
    <div>
    { cart.length ? (cart.map((item)=>{
      return(
       <div className="cart_container" >
       <div className="cart-page">
         <div className="cart-section">
           <img src={item.product.img} alt="img" />
           <div className="cart-price-offer">
             <h3 className="tag-name">{item.product.title}</h3>
             <span className="tag-price">
               Offer Price: ₹{item.product.priceDiscount}
             </span>
             <span className="tag-offer">
               ₹{item.product.priceOriginal}(
               {Math.floor(
                 Math.abs(
                   (item.product.priceDiscount / item.product.priceOriginal) * 100 -
                     100
                 )
               )}
               %OFF)
             </span>
             <div className="cart-quantity">
               <div className="cart-control">
                 Quantity:
                 <button className="btn btn-info"
                 onClick={()=>setCartList({type:"DECREASE",payload:item})}
                  >
                   -
                 </button>
                 <span className="count">{item.qty}</span>
                 <button className="btn btn-info"

                 onClick={()=>setCartList({type:"INCREASE",payload:item})}
                  
                 >
                   +
                 </button>
               </div>
             </div>
             {wishList.find(
              (wishlistItem) => wishlistItem._id === item._id
            ) ? (
              <Link  to="/Wishlist">
                <button className="btn btn-info">Go to wishlist</button>
              </Link>
            ) : (
              <button
                onClick={() =>
                  wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item })
                }
                className="btn btn-info"
              >
              <i className= "far fa-heart" ></i> Move to wishlist
              </button>
            )}
            
             <button className="btn btn-info"
              onClick={()=>setCartList({type:"REMOVE_FROM_CART",payload:item})}
             >
               <i className="fas fa-trash"></i>
               Remove from Cart
             </button>
           </div>
         </div>
       </div>
      
     </div>
 
 
      );
 
    })):
    (<h1 className="empty_cart">Oops ☹️ , Your Cart Is Empty !
    <Link to='/store' >
    <div>
    <button className="btn btn-primary">SHOP NOW</button>
    </div>
    </Link>
    </h1>)
      
  }
  <div>{cartList.cart.length > 0 && <PriceCartPage />}</div>
  </div>
    
   
  )
  
  

   
   
}
export {MyCartPage}