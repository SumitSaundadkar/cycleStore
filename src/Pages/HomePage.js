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

        </div>
       
        
       
    )
}
export {HomePage}