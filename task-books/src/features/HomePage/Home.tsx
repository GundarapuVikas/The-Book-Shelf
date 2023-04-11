import {useEffect} from 'react'
import './home.css'
import BookItem from '../BookItem/BookItem'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { resetTitle } from '../Navbar/TitleSlice'
import { getBooksRequest } from './HomePageSlice'

const Home = () => {
    const books=useAppSelector((state)=>state.homeBook)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getBooksRequest())
    },[])
    dispatch(resetTitle())
  return (
    <div className='home-container'>
        {books.loading && <div>Loading...</div>}
      {!books.loading && books.error? <div>Error: {books.error}</div>:null}
      {!books.loading && books.data.length?(
        <>
          {
                books.data.map((bookItem)=>(
                  <BookItem key={bookItem.id} {...bookItem}/>
                ))
            }
        </>
      ):(null)}
    </div>
  )
}

export default Home
