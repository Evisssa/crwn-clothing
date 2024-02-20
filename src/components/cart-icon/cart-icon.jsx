import { useContext } from 'react';
import path from 'path';

// Assuming CartContext, ShoppingIcon, and cart-icon.scss are in the same directory as the file importing them
const cartContextPath = path.join(__dirname, '../../contexts/cart.context');
const shoppingIconPath = path.join(__dirname, '../../assets/shopping-bag.svg');

import { CartContext } from cartContextPath;
import { ReactComponent as ShoppingIcon } from shoppingIconPath;

import './cart-icon.scss';




const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    console.log('isCartOpen:', isCartOpen);
    const toogleIsCardOpen =()=> setIsCartOpen(!isCartOpen);
    const {cartItems} = useContext(CartContext);
    const num = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);

 
    return(
        <div className='cart-icon-container' onClick={toogleIsCardOpen}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count'>{num}</span>
        </div>
    )
};

export default CartIcon;


