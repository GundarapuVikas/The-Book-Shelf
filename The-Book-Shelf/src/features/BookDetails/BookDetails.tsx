import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../../app/hooks';
import './BookDetails.css'
import {updateTitle} from '../Navbar/TitleSlice'
import { getBookDetailsRequest } from './BookDetailsSlice';
import { addToCart } from '../Cart/CartBag/CartSelectedBooksSlice';
import { calculateBill } from '../Cart/Payment/CartBillSlice';

const BookDetails = () => {
    let params=useParams();
    let bookId:string|undefined=params.bookId;
    const bookdetail=useAppSelector((state: { bookItem: any; })=>state.bookItem)
    const title=useAppSelector((state: { title: { title: any; }; })=>state.title.title)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getBookDetailsRequest(bookId))
    },[])
    
    const navigate=useNavigate();

  
    if(bookdetail.data[0]){
        dispatch(updateTitle(bookdetail.data[0].title));
        return (
            <div className='book-detail-container'>
              <div className="book-detail-img-container">
                <img src={bookdetail.data[0].thumbnail} alt='Book image' />
              </div>
              <div className="book-detail-prop-container"> 
                <h1 className='book-title'>{bookdetail.data[0].title}</h1>
                <h2 className='book-title-min'>{bookdetail.data[0].title}</h2>
                <p><b>Book price: </b>{bookdetail.data[0].price}</p>
                <p><b>Author Name: </b>{bookdetail.data[0].author}</p>
                <p><b>Page Count: </b>{bookdetail.data[0].pageCount}</p>
                <p><b>ISBN: </b>{bookdetail.data[0].isbn}</p>
                <span className='book-button'>
                    <button onClick={()=>{dispatch(addToCart(bookdetail.data[0]));dispatch(calculateBill(bookdetail.data[0].price));alert("added to cart")}}>Add to Cart</button>
                    <button onClick={()=>{
                      dispatch(addToCart(bookdetail.data[0]));dispatch(calculateBill(bookdetail.data[0].price));
                      navigate('/cart')
                    }}>Buy Now</button>
                </span>
                <div className="book-description">
                    {bookdetail.data[0].description}
                </div>
              </div>
            </div>
          )
    }
    else{
        return <>loading..</>
    }
  
}

export default BookDetails
