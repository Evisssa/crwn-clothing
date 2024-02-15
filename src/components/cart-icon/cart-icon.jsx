import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
/// me duhet me marr gjendjen e isOpen // qe e kam te 

import { CartContext } from '../../contexts/cart.context';



const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    console.log('isCartOpen:', isCartOpen);
    const toogleIsCardOpen =()=> setIsCartOpen(!isCartOpen);

 
    return(
        <div className='cart-icon-container' onClick={toogleIsCardOpen}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;


