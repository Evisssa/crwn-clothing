import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
/// me duhet me marr gjendjen e isOpen // qe e kam te 

import { CartContext } from '../../contexts/cart.context';



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


