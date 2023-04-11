import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { updateTitle } from '../Navbar/TitleSlice'
import OrderItem from './OrderItem'
import '../MyOrders/myOrders.css'

const MyOrdersView = () => {
  const orderItems=useAppSelector(state=>state.myOrders.my_orders)
  const Checkout=useAppSelector(state=>state.cartItem.checkout)
  const dispatch=useAppDispatch()
  dispatch(updateTitle('My Orders'));
  if(Checkout){
    return (
      <div className='myorders-container'>
        {
          orderItems.map((item,i)=>
            <OrderItem key={i} {...item}/>
          )
        }
      </div>
    )
  }
  else{
    return(
      <div className='noorders-container'>
        <h1>No Ordered Were placed Yet.</h1>
      </div>
    )
  }
}

export default MyOrdersView

