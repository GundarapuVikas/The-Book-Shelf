import {Field,formValues,reduxForm} from 'redux-form'
import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import { resetAddress, saveAddress } from './CartAddressSlice';

const AddressForm = (props: any) => {
    console.log(props);
    const {handleSubmit}=props
    const dispatch = useAppDispatch();
    var address=useAppSelector(state=>state.address)
    console.warn(address)
  return (
    <div className="address-form">
          <form id='my-address-form'   onSubmit={handleSubmit((formValues: any)=>{
            if(Object.keys(formValues).length==5){
                dispatch(saveAddress(formValues));
            }
            else{
                alert('address form values should not be empty!')
                dispatch(resetAddress())
            }
          })}>
            <table border={0} cellPadding={10} cellSpacing={10}>
              <tr>
                <td>House No</td>
                <td><Field  type='text' name='houseNo'  component={"input"} placeholder={address.houseNo} disabled={address.disabled} /></td>
              </tr>
              <tr>
                <td>Locality</td>
                <td><Field  type='text' name='locality' component={"input"} placeholder={address.locality} disabled={address.disabled}/></td>
              </tr>
              <tr>
                <td>District</td>
                <td><Field  type='text' name='district' component={"input"} placeholder={address.district} disabled={address.disabled}/></td>
              </tr>
              <tr>
                <td>State</td>
                <td><Field  type='text' name='state' component={"input"} placeholder={address.state} disabled={address.disabled}/></td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td><Field  type='text' name='pinCode' component={"input"} placeholder={address.pinCode}  disabled={address.disabled}/></td>
              </tr>
            </table>
          </form>
        </div>
        
  )
}

export default reduxForm({
    form:"addressForm",
})(AddressForm);
