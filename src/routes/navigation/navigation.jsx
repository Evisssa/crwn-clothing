import { Fragment ,useContext, useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';




const Navigation=()=>{
    const {currentUser} = useContext(UserContext);
    console.log('curr',currentUser)
   //useContext(CartContext);
    const {isCartOpen} = useContext(CartContext);



   
    ///console.log('currState',currentCart)

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                      currentUser? ( 
                        <span className = 'nav-link' onClick={signOutUser}> {' '} SIGN OUT {' '}</span>)
                        :(<Link className='nav-link' to='/auth'>
                            SIGN IN
                         </Link>
                        )
                    }

                   
                        <CartIcon  />
                     
                </div>
               
               {isCartOpen && <CartDropdown/>}

               
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation