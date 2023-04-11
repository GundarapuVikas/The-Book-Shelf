import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { updateTitle } from '../Navbar/TitleSlice'
import '../Cart/Cart.css'
import { clearCart,changeCheckout } from './CartBag/CartSelectedBooksSlice'
import { resetBill } from './Payment/CartBillSlice'
import { addToMyOrders } from '../MyOrders/myOrdersSlice'
import AddressForm from './Address/AddressForm'
import { resetAddress } from './Address/CartAddressSlice'
import CartBag from './CartBag/CartBag'
import Payment from './Payment/Payment'

const CartView = () => {
  const dispatch=useAppDispatch()
  dispatch(updateTitle("Cart"))
  const cartItems=useAppSelector(state=>state.cartItem.cartItems)
  
  const address=useAppSelector(state=>state.address)
  console.log("address: ",address)
  console.log(cartItems)
  
  return (
    <div className='cart-container'>
      <div className="address-container">
        <h3>Shipping Address</h3>
        <AddressForm/>
        <span className="address-buttons">
          <button type="submit" form='my-address-form' >Save Address</button>
          <button onClick={()=>dispatch(resetAddress())}>Edit Address</button>
        </span>
      </div>
      <div className="billing-container">
        <h3>Shopping Bag</h3>
        <CartBag/>
        <div className="payment-container">
          <h3>Payment Info</h3>
          <Payment/>
          <span className="payment-buttons">
            <button onClick={()=>{
              if(cartItems.length){
                if (address.disabled===false) {
                  alert('add address to deliver and try again');
                } else {
                  dispatch(changeCheckout())
                  dispatch(addToMyOrders(cartItems))
                  dispatch(clearCart());
                  dispatch(resetBill())
                  alert(`cart items are delivered to the given address ${address.houseNo},${address.locality},${address.district},${address.pinCode}`) 
                }
              }
              else{
                alert('No items in the cart to deliver')
              }
              }}>Checkout
              </button>
            <button onClick={()=>{dispatch(clearCart()),dispatch(resetBill())}}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartView
