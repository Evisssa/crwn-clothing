import path from 'path';

import Signin from "../../components/sign-in-form/signin";
import SignUp from "../../components/sign-up-form/signup";
import "./authentication.scss";

// Assuming Signin and SignUp are in the same directory as authentication.scss
const signinPath = path.join(__dirname, '../../components/sign-in-form/signin');
const signupPath = path.join(__dirname, '../../components/sign-up-form/signup');

import Signin from signinPath;
import SignUp from signupPath;


const Authentication =() =>{

    return(

        <div className="authentication-container">
            <Signin/>
            <SignUp/>
        </div>
    )


}
export default Authentication;