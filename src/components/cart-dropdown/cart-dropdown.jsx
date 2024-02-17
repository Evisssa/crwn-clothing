
import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Button from '../button/button-component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'

import { Outlet, Link } from 'react-router-dom';






const CartDropdown =()=>{


 

  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () =>{
    navigate('/checkout');
  }
  console.log('a',cartItems);
   return (
    <div className='cart-dropdown-container'>
       
      <div className='cart-items'>
        { cartItems.length?
        ( cartItems.map(item=><CartItem key={item.id} cartItem={item}/>) 
    )
        : (<span>NO ITEMS TO CART</span>)
       
        }
      </div>
      <Button onClick={goToCheckout}>   
                         Go to checkout
                
      </Button>
        
    </div>
   )

}
export default CartDropdown; 
