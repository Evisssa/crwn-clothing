
import { useContext } from 'react'; 
import Button from '../button/button-component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'


const CartDropdown =()=>{

  const {cartItems} = useContext(CartContext);
  console.log('a',cartItems);
   return (
    <div className='cart-dropdown-container'>
        CART DROPDOWN
      <div className='cart-items'>
        { cartItems.length?
        ( cartItems.map(item=><CartItem key={item.id} cartItem={item}/>) 
    )
        : (<span>NO ITEMS TO CART</span>)
       
        }
      </div>
      <Button>Go to checkout</Button>
        
    </div>
   )

}
export default CartDropdown; 
