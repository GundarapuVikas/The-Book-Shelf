import './myOrders.css'
import dateFormat from 'dateformat'; 

const OrderItem = ({...item}) => {
  var now = new Date();
  return (
    <div className='order-item-container'>
      <div className="status-container">
        <p>
            <b className='order'>Order Placed: </b>
            {/* 14 November, 2019 */}
            {dateFormat(now, "dd mmmm, yyyy")}
        </p>
        <p>
            <b className='status'>Status: </b>
            Delivered
        </p>
      </div>
      <div className="order-details">
        <div className="order-img"><img src={item.thumbnail} alt="order-img" /></div>
        <div className="order-book">
            <h2>{item.title}</h2>
            <h4>{item.title}</h4>
            <i>{item.author}</i>
            <p>Rs. {item.price} /-</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
