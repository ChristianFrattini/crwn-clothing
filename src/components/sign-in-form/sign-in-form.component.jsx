import { useState, useContext } from "react"
import { useDispatch } from "react-redux"; 
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import { UserContext } from "../../contexts (deprecated)/user.context";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields={
    
    email:'',
    password:'',
    
}

const SignInForm =()=>{
    
    const [formFields, setFormFields]=useState(defaultFormFields); // use state to read the form fields and put them into an array
    const { email, password, }=formFields; //destructure the array for the specific values to be set
    const dispatch =useDispatch()

    //const {setCurrentUser}=useContext(UserContext)

    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async()=>{     //log in with google account 
        //await signInWithGooglePopup();  //destructure the response to get the user
        //console.log(response);
        dispatch(googleSignInStart())
        //alert('You successfully signed in with Google!')

    }


    

    const handleSubmit=async(event)=>{   //Sign up form submit handler
        event.preventDefault();  //prevents default behaviors for the event
    
        
        try{
            //const {user}= await signInAuthUserWithEmailAndPassword(email, password);
            dispatch(emailSignInStart(email, password))
            //setCurrentUser(user);
            
            resetFormFields();  //clears form fields setting them to default
            //alert('You successfully signed in!')
            
        }
        catch(error){
            console.log(error)
            if(error.code=='auth/wrong-password'){
                alert('Incorrect password. Try again');
            }
            if(error.code=='auth/user-not-found'){
                alert('Incorrect email. User not found');
            }else{
                alert('An error has been encountered for log in')
            }
        }
        
    }

    const handleChange=(event)=>{  //every time the text changes the set formfiels sets the value to the corresponding name
        const {name, value}=event.target // parameters name and value are taken when the input changes

        setFormFields({...formFields, [name]:value}) //generalisation of the array 
                                                    //name(displayname, email... ) and value (string inside input)
        
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your Email and Password!</span>

            <form onSubmit={handleSubmit}>
                        
                <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required/>

                
                <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required/>

                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button buttonType='google' type='button' onClick={signInWithGoogle} >Google SignIn</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;