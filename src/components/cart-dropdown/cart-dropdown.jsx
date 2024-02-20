
import { useContext } from 'react';
import path from 'path';
import { useNavigate } from 'react-router-dom';

// Assuming Button, CartContext, CartItem, and cart-dropdown.scss are in the same directory as the file importing them
const buttonPath = path.join(__dirname, '../button/button-component');
const cartContextPath = path.join(__dirname, '../../contexts/cart.context');
const cartItemPath = path.join(__dirname, '../cart-item/cart-item');

import Button from buttonPath;
import { CartContext } from cartContextPath;
import CartItem from cartItemPath;

import './cart-dropdown.scss';

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
