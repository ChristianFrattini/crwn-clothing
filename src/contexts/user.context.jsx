// user context is a place used as a storage where once logged in/signed up the user data
//is made available for other components such as orders history and personal user details

import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener,signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

//value to be accessed
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=>null, 
})

export const USER_ACTION_TYPES={
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer=(state, action)=>{
    console.log(action)
    const{type, payload}=action;  //destructure the action ---> type and payload(optional)
    

    switch(type){  //switch case. if type (string) is 'SET_CURRENT_USER' then the current user is the payload
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }

        case 'increment':
            return{
                value: state.value+1,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE={
    currentUser: null
}

export const UserProvider=({children})=>{  //the provider will wrap every component that will need the value
   // const [currentUser,setCurrentUser]=useState(null);

   const[state, dispatch]=useReducer(userReducer, INITIAL_STATE); //use reducer hook. takes 2 parameters

   const {currentUser}=state
   console.log(currentUser)
   const setCurrentUser=(user)=>{
    dispatch (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
   }

    const value= {currentUser, setCurrentUser};


    /*useEffect(()=>{ //use effect is run only once
        
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){ //create a user document only if a user comes through, otherwise setcurrentuser
                createUserDocumentFromAuth(user) //creates a doc when user logs in
            }
            setCurrentUser(user);
            //console.log(user);

        });  //passes the callback function as the second value 'callback' in firebase code
        return unsubscribe;
    },[])*/

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}