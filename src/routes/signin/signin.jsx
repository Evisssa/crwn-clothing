//import { Fragment } from 'react';
//import { Outlet, Link } from 'react-router-dom';

import { auth,
        signInWithGooglePopup ,
        signInWithGoogleRedirect,
        createUserDocumentFromAuth,
        } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/signup/signup';


const Signin=()=>{


    

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    }
   


    return(
        
        <div >
            <h1>Sign In page </h1> 
             <button onClick={logGoogleUser}>Sign in with Google popup</button>  
             <SignUpForm/>

        </div>
    )
}

export default Signin