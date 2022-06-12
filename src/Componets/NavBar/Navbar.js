import "./navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/cartContext";
import { useWishlistContext } from "../../Contexts/wishListContext";
import { useAuthContext } from "../../Contexts/authContext";

const Navbar = () => {
  const { cartList } = useCart();
  const { wishlist } = useWishlistContext();
  const { auth, setAuth } = useAuthContext();

  const logouthandler = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER_INFO");
    setAuth({
      loginStatus: false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h4>
            Go-Wheel
            <img
              className="brand-img"
              src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-3d-checklist-icon-with-green-circle-png-image_7269452.png"
              alt=""
            />
          </h4>
        </Link>
      </div>
      <input className="search-data" type="text" placeholder="serach" />
      <i className="fal fa-search"></i>
      <ul>
        {auth.loginStatus ? (
          <li>
            <button onClick={logouthandler} className="btn btn-primary">
              LogOut
            </button>
          </li>
        ) : (
          <Link to="/login">
            <li>
              <button className="btn btn-primary">Login</button>
            </li>
          </Link>
        )}

        <Link to="/wishlist">
          {" "}
          <li>
            <span className="cart-icon">{wishlist.length}</span>
            <i className="fas fa-heart"></i>
          </li>
        </Link>

        <Link to="/cart">
          <li>
            <span className="cart-icon">{cartList.length}</span>

            <i className="fal fa-shopping-cart"></i>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export { Navbar };
