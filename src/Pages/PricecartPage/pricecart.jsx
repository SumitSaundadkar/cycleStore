import './pricecart.css'

const PriceCartPage=()=>{
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