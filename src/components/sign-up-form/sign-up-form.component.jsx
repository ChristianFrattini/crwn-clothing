import { useState } from "react"

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

    //console.log(formFields)

    const handleChange=(event)=>{  //every time the text changes the set formfiels sets the value to the corresponding name
        const {name, value}=event.target // parameters name and value are taken when the input changes

        setFormFields({...formFields, [name]:value}) //generalisation of the array 
                                                    //name(displayname, email... ) and value (string inside input)
        
    }

    return(
        <div>
            <h1>Sign Up with Email and Password</h1>

            <form onSubmit={()=>{}}>
                <label>Display Name</label>
                <input type="text" onChange={handleChange} name="displayName" value={displayName} required/>

                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" value={email} required/>

                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} required/>

                <label>Confirm Password</label>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm