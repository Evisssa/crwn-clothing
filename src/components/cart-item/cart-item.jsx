import './cart-item.scss'

const CartItem =({cartItem}) =>{

    const {name,price,imageUrl,quantity} = cartItem;
    console.log('cartItem',name)

    return (
        <div className='cart-item-container' >
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name} </span>
                <span className='price'>  {quantity} x ${price}</span>
            </div>


        </div>
    )
}

export default CartItem;