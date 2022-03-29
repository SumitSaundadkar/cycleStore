import './navbar.css';


const Navbar = () => {
  
  return (

      <nav>
        <div className="logo">
          
            <h4>
              सायकलCYCLE!
              <img
                className="brand-img"
                src="https://images.unsplash.com/photo-1523357585206-175e971f2ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                alt=""
              />
            </h4>
          
        </div>
        <input className="search-data" type="text" placeholder="serach" />
        <i className="fal fa-search"></i>
        <ul>
          <li>
            <button className="btn btn-primary">Login</button>
          </li>

          <li>
            <span className="cart-icon">0</span>
            <i className="fas fa-heart"></i>
          </li>
          
            <li>
            <span className="cart-icon">0</span>

              <i className="fal fa-shopping-cart"></i>
            </li>
        
        </ul>
      </nav>
      

  );
};
export { Navbar };