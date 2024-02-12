import {useState}from 'react';

import { createAuthUserWithEmailAndPassword,
         createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';

import FormInput from '../formInput/formInput';
import './signup.scss';
import Button from '../button/button-component';

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : '',
}

const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const{displayName,email,password,confirmPassword} = formFields;

    console.log(formFields);

    const resetFormField =() =>{
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event) =>{
        event.preventDefault();

       
        if(password !== confirmPassword) {
            alert('passwords do not match!');
            return;}

        if(!displayName || !email)  return;

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});   
            resetFormField();
        }
        catch(error){
           if(error.code ==='auth/email-already-in-use'){
                alert('User currently in use!!!')
           }else{
            console.log("Could not create ",error);
           }
             
            
        }
        

    }

    const handleChange =(event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className='sign-up-container'>

            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput 
                label = "Display Name" 
                type= 'text'
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName}/>

                <FormInput 
                label = "Email" 
                type='email' 
                require 
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput label = "Password" type='password' required onChange={handleChange} name= "password" value={password}/>

                <FormInput  label = "Confirm password" type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                
                <Button type="submit"  buttonType="google" >Sign Up</Button>
            
            </form>

        </div>
    )
}

export default SignUpForm;