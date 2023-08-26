import { useState, useContext } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";
import { UserContext } from "../../contexts (deprecated)/user.context";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm =()=>{
    //usestate is called every time the text changes inside the input
    const [formFields, setFormFields]=useState(defaultFormFields); // use state to read the form fields and put them into an array
    const {displayName, email, password, confirmPassword}=formFields; //destructure the array for the specific values to be set
    const dispatch=useDispatch()

    //const {setCurrentUser}=useContext(UserContext)

    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }

    //console.log(formFields)

    const handleSubmit=async(event)=>{   //Sign up form submit handler
        event.preventDefault();  //prevents default behaviors for the event
        if(password!=confirmPassword){  //checks whether the passwords correspond
            alert('Password do not match');
            return;
        }
        
        try{
            /*const {user}=await createAuthUserWithEmailAndPassword(email,password);  //creates the the authentication user

            //setCurrentUser(user);

            await createUserDocumentFromAuth (user, {displayName}); // creates the user document
            resetFormFields();  //clears form fields setting them to default
            //console.log(response)*/
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
            //alert('You successfully signed up!')
        }
        catch(error){

            if(error.code=='auth/weak-password'){  //if password is too weak alert user
                alert('Warning. Password needs to be at least 6 characters long');
            }
            
            if(error.code=='auth/email-already-in-use'){  //if email already in use alert user
                alert('Warning. Email already in use')
            }else{
                console.log('user creation error', error);  // for any other generic error alert user
                alert('user creation error', error);
            }
            
        }
        
    }

    const handleChange=(event)=>{  //every time the text changes the set formfiels sets the value to the corresponding name
        const {name, value}=event.target // parameters name and value are taken when the input changes

        setFormFields({...formFields, [name]:value}) //generalisation of the array 
                                                    //name(displayname, email... ) and value (string inside input)
        
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" onChange={handleChange} name="displayName" value={displayName} required/>

                
                <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required/>

                
                <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required/>

                
                <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;