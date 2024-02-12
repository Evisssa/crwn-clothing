import {useState}from 'react';

import { createAuthUserWithEmailAndPassword,
         createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type= 'text 'required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type='email' require onChange={handleChange} name="email" value={email}/>

                <label>Password </label>
                <input type='password' required onChange={handleChange} name= "password" value={password}/>

                <label>Confirm password</label>
                <input type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                
                <button type="submit"> Sign Up</button>
            
            </form>


        </div>
    )
}

export default SignUpForm;