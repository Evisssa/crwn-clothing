import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from '../../contexts/cart.context';
import './checkout.scss'


const Checkout = () =>{

  const {cartItems} = useContext(CartContext);

  const cartTotal = cartItems.reduce((total,currentItem)=>{return(total+currentItem.price*currentItem.quantity)},0)
  

  

  return(

    <div>

<table className="checkout-container">
      <tr className="checkout-header">
      <td className='header-column'>
          Product
        </td >
        <td className='header-column'>
          Description
        </td>

        <td className='header-column'>
          Quantity
        </td>
        <td className='header-column'>
          Price
        </td>

        <td className='remove-column'>
        &#10005;
        </td>


      </tr>
      
      { cartItems.length?
        ( cartItems.map(item=><CheckoutItem  key={item.id} cartItem={item}/>) )
        : (<span>NO ITEMS TO CART</span>)
       
        }

      <tr className="cart-total">Total :{cartTotal}</tr>

    </table>
        
    </div>
    




  )
} 

export default Checkout;