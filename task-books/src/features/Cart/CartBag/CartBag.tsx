import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import { useNavigate } from 'react-router-dom'
import { Key } from 'react'
import { BookType } from '../../HomePage/HomePageSlice'
const CartBag = () => {
    const cartItems=useAppSelector((state: { cartItem: { cartItems: BookType[] } })=>state.cartItem.cartItems)
    const navigate=useNavigate()
    let path="/book-details/";
  return (
    <div className="selectBooks-container">
          {
            cartItems.map((bookItem: { thumbnail: string | undefined; id: string },i: Key | null | undefined)=>
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
