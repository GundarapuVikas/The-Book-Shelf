import {NavLink} from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { BookType } from '../HomePage/HomePageSlice'

const NavbarView = () => {
    const navLinkStyles=({isActive}: { isActive: boolean }):object=>{
        return {
            fontWeight: isActive?'bold':'normal',
            textDecoration: isActive?'none':'underline'
        }
    }
    const cartItems=useAppSelector((state: { cartItem: { cartItems: BookType[] } })=>state.cartItem.cartItems)
  return (
    <div>
      <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/my-orders'>My Orders</NavLink>
        <NavLink style={navLinkStyles} to='/cart'>Cart{cartItems.length!=0?<span className='cart-count'>{cartItems.length}</span>:<></>}</NavLink>
      </nav>
    </div>
  )
}

export default NavbarView
