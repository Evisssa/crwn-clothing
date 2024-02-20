import { useContext } from 'react';
import path from 'path';

// Assuming Button and CartContext are in the same directory as the file importing them
const buttonPath = path.join(__dirname, '../button/button-component');
const cartContextPath = path.join(__dirname, '../../contexts/cart.context');

import './product-card.scss';
import Button from buttonPath;
import { CartContext } from cartContextPath;


const ProductCard =({product}) =>{

    const {name,price,imageUrl} = product;
    const {addItemToCart } =useContext(CartContext );

    
  const addProductToCart = () =>{  console.log('add to cart',product.name); return addItemToCart(product)};
   // console.log(product.name);

    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name} </span>
                <span className='price'>{price} </span>
            </div>

            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>

        </div>
    )
}

export default ProductCard;