
import { useEffect } from 'react'; //import to prevent restart of the application when redirected
import { getRedirectResult } from 'firebase/auth'; //import to prevent restart of the application when redirected
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../../utils/firebase/firebase.utils'

const SignIn=()=>{

    useEffect(() => {
 
        async function _getRedirectResult() {
     
          const response = await getRedirectResult(auth); //auth keeps track of all authentication stages happening preventing the app reboot
     
          if (response) {
     
            const userDocRef = await createUserDocumentFromAuth(response.user); //creates a doc when user logs in
     
          }
     
        }
     
        _getRedirectResult();
     
      }, []); // empty array = repeat the code only once


    const logGoogleUser = async()=>{     //log in with google account 
        const {user}= await signInWithGooglePopup();  //destructure the response to get the user
        //console.log(response);
        const userDocRef= await createUserDocumentFromAuth(user) //creates a doc when user logs in

    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}> Sign In with GooglePopup</button>
            <button onClick={signInWithGoogleRedirect}> Sign In with GoogleRedirect</button>
        </div>
    )
}

export default SignIn;