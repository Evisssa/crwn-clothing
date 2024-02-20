import { useState, useContext } from 'react';
import path from 'path';

// Assuming FormInput, Button, and the firebase utils are in the same directory as the file importing them
const formInputPath = path.join(__dirname, '../formInput/formInput');
const buttonPath = path.join(__dirname, '../button/button-component');
const firebaseUtilsPath = path.join(__dirname, '../../utils/firebase/firebase.utils');

import FormInput from formInputPath;
import Button from buttonPath;

// Assuming auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, and signAuthUserWithEmailAndPassword are exported from firebase.utils
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signAuthUserWithEmailAndPassword } from firebaseUtilsPath;

import './signin.scss';


const defaultFormFields = {
    email : '',
    password : ''
}


const Signin=()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    console.log(formFields);

    const logGoogleUser = async() => {
       await signInWithGooglePopup();
 
    }
   
    const handleChange =(event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    const resetFormField =() =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        console.log('handleSubmit triggered'); // Add this line
        event.preventDefault();

        try {
            console.log("handleSubmit");
            const {user} = await signAuthUserWithEmailAndPassword(
                email,
                password
                );

            resetFormField();
            
        } catch (error) {


            switch(error.code){
                case "auth/wrong-password" : 
                     alert('Wrong password for email! 🤔 ')
                     break;
                case "auth/user-not-found" :
                    alert('Email not found! Please sign up!  ')    
                    break;
                default : 
                console.log('Could not sign in', error)    
            }
          
        }

    }


    return(

        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}> 
            <FormInput 
            label = "Email" 
            type='email' 
            require 
            onChange={handleChange} 
            name="email" 
            value={email}/>

            <FormInput label = "Password" 
            type='password' 
            required 
            onChange={handleChange} 
            name= "password" 
            value={password}/>

             <div className='sign-in-buttons-container'>
             <Button type="submit" >Sign in </Button> 
             <Button type = "button" buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>  
               

             </div>
            
            </form> 
              
          </div>
    )
}

export default Signin;