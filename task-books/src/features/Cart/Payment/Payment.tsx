import {useAppSelector } from '../../../app/hooks'

const Payment = () => {
    const cart_bill=useAppSelector(state=>state.cartBill)
  return (
    <div className="payment-bill">
            <table border={0} cellPadding={15} cellSpacing={15} className='bill'>
              <thead>
                
              </thead>
              <tbody>
              <tr>
              <td>Items Price</td>
              <td>Rs. {cart_bill.total_price.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>Rs. {cart_bill.tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Rs. {cart_bill.shipping_charge.toFixed(2)}</td>
            </tr>
              </tbody>
              <tfoot>
              <tr>
              <td>Total</td>
              <td>Rs. {cart_bill.total_bill.toFixed(2)}</td>
              </tr>
              </tfoot>
            
              

          </table>
          </div>
  )
}

export default Payment
