import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity===1) {
    return deleteCartItem( cartItems, productToRemove )
 
  }
  else{

    return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    ); 
  }

  //return [...cartItems, { ...productToAdd, quantity: 1 }];
};



export const deleteCartItem = (cartItems, productToRemove) => {
  
  return cartItems.filter((cartItem)=>
  cartItem.id !== productToRemove.id) 
  
};



export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  deleteItemFromCart :() =>{}

});



export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));


    const removeItemFromCart= (product) =>
    setCartItems(removeCartItem(cartItems, product));


    const deleteItemFromCart= (product) =>
    setCartItems(deleteCartItem(cartItems, product));


  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart ,removeItemFromCart,deleteItemFromCart};
  console.log('cartItems',cartItems)

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


/*import {createContext,useState } from 'react';

export const addCartItem =(cartItems,productToAdd)=>{
 
    
const existingCartItems = cartItems.find( (cartItem)=>cartItem.id===productToAdd.id);

  if (existingCartItems){
    return cartItems.map((cartItem)=>
      cartItem.id === productToAdd.id
      ? {...cartItem,quantity: cartItem.quantity+1}
      : cartItem
    )

  }

    return [...cartItems, {...productToAdd, quantity : 1}];
}




export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : () => {},
    cartItems:[],
    addItemToCart: () =>{},
});

export const CartProvider = ({ children })=>{

    const [isCartOpen, setIsCartOpen] =useState(false);
    const [cartItems,setCartItems] = useState([])

    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));

    }

    const value = {isCartOpen,setIsCartOpen, addItemToCart,cartItems}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
*/