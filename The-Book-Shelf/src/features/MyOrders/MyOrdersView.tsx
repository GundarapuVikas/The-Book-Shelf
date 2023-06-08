import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { updateTitle } from '../Navbar/TitleSlice'
import OrderItem from './OrderItem'
import './myOrders.css'
import { BookType } from '../HomePage/HomePageSlice'

const MyOrdersView = () => {
  const orderItems=useAppSelector((state: { myOrders: { my_orders: any } })=>state.myOrders.my_orders)
  const Checkout=useAppSelector((state: { cartItem: { checkout: any } })=>state.cartItem.checkout)
  const dispatch=useAppDispatch()
  dispatch(updateTitle('My Orders'));
  if(Checkout){
    return (
      <div className='myorders-container'>
        {
          orderItems.map((item: BookType,i:number)=>
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

