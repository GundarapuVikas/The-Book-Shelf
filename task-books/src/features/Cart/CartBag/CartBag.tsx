import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import { useNavigate } from 'react-router-dom'
const CartBag = () => {
    const cartItems=useAppSelector(state=>state.cartItem.cartItems)
    const navigate=useNavigate()
    let path="/book-details/";
  return (
    <div className="selectBooks-container">
          {
            cartItems.map((bookItem,i)=>
              <div className='bag-item'>
                <img  key={i} src={bookItem.thumbnail} alt='cartItem' />
                <button className="book-cart-button" onClick={()=>{path=path+bookItem.id;navigate(path)}}>details</button>
              </div>
            )
          }
        </div>
  )
}

export default CartBag
