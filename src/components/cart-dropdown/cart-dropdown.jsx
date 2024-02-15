import Button from '../button/button-component';
import './cart-dropdown.scss'


const CartDropdown =()=>{
   return (
    <div className='cart-dropdown-container'>
        CART DROPDOWN
      <div className='cart-items'>

      </div>
      <Button>Go to checkout</Button>
        
    </div>
   )

}
export default CartDropdown;