import { useNavigate } from 'react-router-dom'

const BookItem = ({...bookItem}) => {
    const navigate=useNavigate() 
    let path="book-details/";
    path=path+bookItem.id;
  return (
    <div className='book-container'>
        <div className='book-img-container'>
            <img className='item-img' src={bookItem.smallThumbnail} alt='book-item' />
        </div>
        <div className="book-item-details">
            <div>
                <span className="book-item-title">{bookItem.title}</span>
            </div>
            <div>
                <span className="book-item-rating">Rating: <b>{bookItem.averageRating}</b></span>
            </div>
            <div>
                <button className="book-item-button" onClick={()=>navigate(path)}>more details</button>
                <button className="book-item-button-min" onClick={()=>navigate(path)}>details</button>
            </div>
        </div>
    </div>
  )
}

export default BookItem
