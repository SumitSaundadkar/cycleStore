import './singlecard.css';
import {useCart} from '../../Contexts/cartContext';
import {} from '../../Contexts/wishListContext';

const SingleProductCard=({product})=>{
    const { cartList, setCartList } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlistContext();
  const { cart } = cartList;
    return(
        <div className="content-page">
        <div className="vertical-card">
          <div className="card-simple">
            <div className="card__container">
              <p className="card__body">
                <img src={product.img} alt="" />
                <h4>
                  {product.title}{" "}
                  <button
                    onClick={() => {
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: { product },
                      });
                    }}
                  >
                    <i className="far fa-heart"></i>
                  </button>
                  <p>
                    <span className="price-discount">
                      ₹{product.priceDiscount}{" "}
                    </span>
                    <span className="price-originl">
                      ₹{product.priceOriginal}
                    </span>
                    <span className="offer">
                      {Math.floor(
                        Math.abs(
                          (product.priceDiscount / product.priceOriginal) *
                            100 -
                            100
                        )
                      )}
                      %OFF
                    </span>
                    <span
                      style={{
                        backgroundColor: "lightgray",
                        borderRadius: "5px",
                      }}
                    >
                      {product.rating}
                      <i style={{ color: "yellow" }} class="fa fa-star"></i>
                    </span>
                  </p>
                </h4>

                {cart.find(
                  (cartItem) => cartItem.product._id === product._id
                ) ? (
                  <div className="cart-button">
                    <Link to="/cart">
                      <button>
                        <i className="fas fa-shopping-cart"></i>Go to cart
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="cart-button">
                    <button
                      onClick={() =>
                        setCartList({
                          type: "ADD_TO_CART",
                          payload: { product },
                        })
                      }
                    >
                      <i className="fas fa-shopping-cart"></i> Add to cart
                    </button>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      


    )
}
export {SingleProductCard}