import './home.css';
import {Link} from 'react-router-dom';
const HomePage=()=>{
    return(
        <div className='home_page'>
        <div className='shop_btn_center'>
        <Link to="/store">
        <button className="btn btn-primary">SHOP NOW</button>
        </Link>
        </div>
        <div  className='footer_bar'>   
        <nav class="nav_items">
       
       
        <ul className="nav_list_items">
        <li className='nav_list_item'>   <span className='my_Name'>Made With ❤️ By Sumit Saundadkar</span></li>
         
          <li className="nav_list_item">
            <a href=""><i className="fab fa-github"></i></a>
          </li>
          <li className="nav_list_item">
            <a href=""><i className="fab fa-twitter"></i> </a>
          </li>
          <li className="nav_list_item" >
            <a href=""><i className="fab fa-linkedin"></i> </a>
          </li>
       
        </ul>
  
      </nav>
      </div>
        

        </div>
        

        
       
        
       
    )
}
export {HomePage}