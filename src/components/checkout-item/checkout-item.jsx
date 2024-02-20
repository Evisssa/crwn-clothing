import { useContext } from 'react';
import path from 'path';

// Assuming CartContext, Button, and checkout-item.scss are in the same directory as the file importing them
const cartContextPath = path.join(__dirname, '../../contexts/cart.context');
const buttonPath = path.join(__dirname, '../button/button-component');

import { CartContext } from cartContextPath;
import Button from buttonPath;

import './checkout-item.scss';



const CheckoutItem =({cartItem})=>{


   const {name,price,imageUrl,quantity} = cartItem;
   const {removeItemFromCart,addItemToCart,deleteItemFromCart} = useContext(CartContext);

   const removeItem = () =>removeItemFromCart(cartItem);
   const addItem = () =>addItemToCart(cartItem);
   const deleteitem =() => deleteItemFromCart(cartItem)
   //const increaseQuantity = () =>{quantity};
   //const decreseQuantity =()=>{};

  //const {cartItems} = useContext(CartContext);
  //console.log('a',cartItems);
   return (


  
        <tr className='checkout-item-container'>

<td className='image-container'>

<img src={imageUrl} alt={`${name}`}/>
</td>


    
<td className='name'>{name} </td>





<td className='quantity'>
<td className='arrow' onClick={removeItem}>  &#10094; </td>
<td className='value'>{quantity} </td>
<td className='arrow' onClick={addItem}> &#10095; </td>


</td>

<td className='price'>   ${price}</td>




<td className='remove-item' onClick={deleteitem}>  &#10005; </td>

</tr>

  
    
   )

}

export default CheckoutItem; 
