import '../MyOrders/myOrders.css'
const OrderItem = ({...item}) => {
  return (
    <div className='order-item-container'>
      <div className="status-container">
        <p>
            <b>Order Placed: </b>
            14 November, 2019
        </p>
        <p>
            <b>Status: </b>
            Delivered
        </p>
      </div>
      <div className="order-details">
        <div className="order-img"><img src={item.thumbnail} alt="order-img" /></div>
        <div className="order-book">
            <h2>{item.title}</h2>
            <i>{item.author}</i>
            <p>Rs. {item.price} /-</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
