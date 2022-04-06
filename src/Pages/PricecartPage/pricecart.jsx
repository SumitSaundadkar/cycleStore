import './pricecart.css';
import {useCart} from "../../Contexts/cartContext";

const PriceCartPage=()=>{
  const {cartList}=useCart();

  const priceCal = cartList.cart.reduce(
    ({ Price, Discount }, item) => {
      Price += item.priceOriginal * item.qty;
      Discount += (item.priceOriginal - item.priceDiscount) * item.qty;
      return { Price, Discount };
    },
    {
      Price: 0,
      Discount: 0,
      Delivery: 0,
      Total: 0
    }
  );
    return(
        <div className="cart-price-cont">
        <div className="cart-price-card">
          <div className="cart-price-heading">
            <b>PRICE DETAILS</b>
          </div>

          <div className="cart-pricing-item">
            <span>Price (2 items)</span>
            <span>{priceCal.Price}</span>
          </div>
          <div className="cart-pricing-item">
            <span>Discount</span>
            <span>{priceCal.Discount}</span>
          </div>
          <div className="cart-pricing-item">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>

          <div className="cart-total-amount">
            <span>Total Amount: Rs.{priceCal.Price - priceCal.Discount}</span>
          </div>

          <div className="cart-saving-money">
            <span>You Will Save Rs.{priceCal.Discount} on this order.</span>

            <div className="btn-order">Place Order</div>
          </div>
        </div>
      </div>
    )
}
export {PriceCartPage}