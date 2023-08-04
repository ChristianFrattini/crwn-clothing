import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'

const SignIn=()=>{

    const logGoogleUser = async()=>{     //log in with google account 
        const {user}=await signInWithGooglePopup();  //destructure the response to get the user
        //console.log(response);
        const userDocRef= await createUserDocumentFromAuth(user) //creates a doc when user logs in

    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}> 
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn;