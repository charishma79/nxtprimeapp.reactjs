// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachCartItem => {
        totalPrice += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="summary-container">
          <div className="summary-list">
            <h1 className="total">
              Order Total:
              <span className="price"> Rs {totalPrice}/-</span>
            </h1>
            <p className="items-quantity">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
