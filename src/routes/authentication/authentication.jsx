import Signin from "../../components/sign-in-form/signin"
import SignUp from "../../components/sign-up-form/signup"
import "./authentication.scss"

const Authentication =() =>{

    return(

        <div className="authentication-container">
            <Signin/>
            <SignUp/>
        </div>
    )


}
export default Authentication;