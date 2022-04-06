import {useWishlistContext} from '../../Contexts/wishListContext';
import './wishlist.css';
import { ProductCard } from '../../Componets/MainCrad/ProductCard';

const WishlistPage=()=>{
    const{wishlistState,wishlistDispatch}=useWishlistContext();
    return(
      <div className='content-page'>
      {wishlistState.wishList.map((product) => {
        return product.inWishlist === true ? (
          <ProductCard key={product._id} product={product} />
        ) : (
          product
        );
      })}
             
    </div>

        
      

    )
}
export{WishlistPage}