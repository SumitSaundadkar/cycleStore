const MyCart=()=>{
    return(
        <div className="cart_container">
        <div className="cart-page">
          <div className="cart-section">
            <img src={product.img} alt="" />
            <div className="cart-price-offer">
              <h3 className="tag-name">{product.title}</h3>
              <span className="tag-price">
                Offer Price: ₹{product.priceDiscount}
              </span>
              <span className="tag-offer">
                ₹{product.priceOriginal}(
                {Math.floor(
                  Math.abs(
                    (product.priceDiscount / product.priceOriginal) * 100 -
                      100
                  )
                )}
                %OFF)
              </span>
              <div className="cart-quantity">
                <div className="cart-control">
                  Quantity:
                  <button
                    onClick={() => qtyIncDecHandler(product, false)}
                    className="cart-minus"
                  >
                    -
                  </button>
                  <span className="count">{product.qty}</span>
                  <button
                    onClick={() => qtyIncDecHandler(product, true)}
                    className="cart-plus"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <button className="btn btn-icon-add">
                <i className="fas fa-shopping-cart"></i>
                Add to cart
              </button> */}
              <button
                onClick={() => removeClickHandler(product)}
                className="btn btn-icon-dlt"
              >
                <i className="fas fa-trash"></i>
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
        <div>{myCart.length > 0 && <PricePage />}</div>
      </div>

    )
}
export {MyCart}