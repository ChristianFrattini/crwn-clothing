// user context is a place used as a storage where once logged in/signed up the user data
//is made available for other components such as orders history and personal user details

import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener,signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";


//value to be accessed
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=>null, 
})

export const UserProvider=({children})=>{  //the provider will wrap every component that will need the value
    const [currentUser,setCurrentUser]=useState(null);
    const value= {currentUser, setCurrentUser};


    useEffect(()=>{ //use effect is run only once
        
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){ //create a user document only if a user comes through, otherwise setcurrentuser
                createUserDocumentFromAuth(user) //creates a doc when user logs in
            }
            setCurrentUser(user);
            //console.log(user);

        });  //passes the callback function as the second value 'callback' in firebase code
        return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}