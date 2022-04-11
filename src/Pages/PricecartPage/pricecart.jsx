import './pricecart.css';
import {useCart} from "../../Contexts/cartContext";

const PriceCartPage=()=>{
  const {cartList}=useCart();
 
  const totalPriceByDiscount = cartList.reduce(
    (acu, value) => {
      return {
        ...acu,
        price:
          acu.price +
          Number(value.priceDiscount) * value.qty,
      };
    },
    { price: 0 }
  );

  const totalMRP = cartList.reduce(
    (acu, value) => {
      return {
        ...acu,
        price: acu.price +Number (value.priceOriginal) * value.qty,
      };
    },
    { price: 0 }
  );

  
  

  const discountOnMRP = totalMRP.price - totalPriceByDiscount.price;

  
    
  
    return(
        <div className="cart-price-cont">
        <div className="cart-price-card">
          <div className="cart-price-heading">
            <b>PRICE DETAILS</b>
          </div>

          <div className="cart-pricing-item">
            <span>Price ({}) :{totalMRP.price}</span>
            
          </div>
          <div className="cart-pricing-item">
            <span>Discount:₹{discountOnMRP}</span>
           
          </div>
          <div className="cart-pricing-item">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>

          <div className="cart-total-amount">
            <span>Total Amount: Rs.{totalPriceByDiscount.price}</span>
          </div>

          <div className="cart-saving-money">
            <span>You Will Save Rs.{discountOnMRP} on this order.</span>

            <div className="btn-order">Place Order</div>
          </div>
        </div>
      </div>
    )
}
export {PriceCartPage}