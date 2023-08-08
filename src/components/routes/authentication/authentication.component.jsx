
import { useEffect } from 'react'; //import to prevent restart of the application when redirected
import { getRedirectResult } from 'firebase/auth'; //import to prevent restart of the application when redirected
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-up-form/sign-up-form.component'
import SignInForm from '../../sign-in-form/sign-in-form.component'
import './authentication.styles.scss'


const Authentication=()=>{

    useEffect(() => {
 
        async function _getRedirectResult() {
     
          const response = await getRedirectResult(auth); //auth keeps track of all authentication stages happening preventing the app reboot
     
          if (response) {
     
            const userDocRef = await createUserDocumentFromAuth(response.user); //creates a doc when user logs in
     
          }
     
        }
     
        _getRedirectResult();
     
      }, []); // empty array = repeat the code only once


    
    return (
        <div className='authentication-container'>
            
            <SignInForm/>
            <SignUpForm/>
            
        </div>
    )
}

export default Authentication;