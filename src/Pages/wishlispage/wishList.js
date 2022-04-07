import {useWishlistContext} from '../../Contexts/wishListContext';
import { useCart } from '../../Contexts/cartContext';
import './wishlist.css';
import { Link } from 'react-router-dom';


const WishlistPage=()=>{
    const{wishlistState,wishlistDispatch}=useWishlistContext();
    const {setCartList}=useCart();
    
   
    const {wishList}=wishlistState;

 return(
    <div>
      
    { wishList.length ? (wishList.map((item)=>{
      return(
       <div className="cart-container" >
       <div className="cart_page">
         <div className="cart_section">
           <img src={item.product.img} alt="img" />
           <div className="cart_price_offer">
             <h3 className="tag-name">{item.product.title}</h3>
             <span className="tag_price">
               Offer Price: ₹{item.product.priceDiscount}
             </span>
             <span className="tag_offer">
               ₹{item.product.priceOriginal}(
               {Math.floor(
                 Math.abs(
                   (item.product.priceDiscount / item.product.priceOriginal) * 100 -
                     100
                 )
               )}
               %OFF)
             </span>
            
            
             <button className="btn btn-danger"
              onClick={()=>wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:item})}
             >
               <i className="fas fa-trash"></i>
               Remove from Wishlist
             </button>
             
           </div>
         </div>
       </div>
      
     </div>
 
 
      );
 
    })):
    (<h1 className="empty_cart">Oops ☹️ , Your wishlist Is Empty !
    <Link to='/store' >
    <div>
    <button className="btn btn-primary">SHOP NOW</button>
    </div>
    </Link>
    </h1>)
      
  }
      
      
      
      
      
      
      
      
    </div>


  )
   
}
export{WishlistPage}