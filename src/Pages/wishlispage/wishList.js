import { useWishlistContext } from "../../Contexts/wishListContext";
import { useCart } from "../../Contexts/cartContext";
import "./wishlist.css";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistState, wishlistDispatch } = useWishlistContext();
  const { cartList, setCartList } = useCart();
 

  return (
    <div>
      {wishlistState.length ? (
      wishlistState.map((item) => {
          return  (
            <div className="wishlist-page">
            <div className="vertical-card">
              <div className="card-simple">
                <div className="card__container">
                  <p className="card__body">
                    <img src={item.img} alt="" />
                    <h4>
                      {item.title}{" "}
                      <button
                        onClick={() => {
                          wishlistDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload:  item ,
                          });
                        }}
                      >
                        <i className="far fa-heart"></i>
                      </button>
                      <p>
                        <span className="price-discount">
                          ₹{item.priceDiscount}{" "}
                        </span>
                        <span className="price-originl">
                          ₹{item.priceOriginal}
                        </span>
                        <span className="offer">
                          {Math.floor(
                            Math.abs(
                              (item.priceDiscount / item.priceOriginal) *
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
                          {item.rating}
                          <i style={{ color: "yellow" }} class="fa fa-star"></i>
                        </span>
                      </p>
                    </h4>

                    {cartList.find(
                      (cartItem) => cartItem._id === item._id
                    ) ? (
                      <div className="btn btn-primary">
                        <Link to="/cart">
                          <button>
                            <i className="fas fa-shopping-cart"></i>Go to cart
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="btn btn-primary">
                        <button
                          onClick={() =>
                            setCartList({
                              type: "ADD_TO_CART",
                              payload: item,
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
          );
        })
      ) : (
        <h1 className="empty_cart">
          Oops ☹️ , Your wishlist Is Empty !
          <Link to="/store">
            <div>
              <button className="btn btn-primary">SHOP NOW</button>
            </div>
          </Link>
        </h1>
      )}
    </div>
  );
};
export { WishlistPage };
