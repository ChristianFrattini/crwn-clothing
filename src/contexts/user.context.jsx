// user context is a place used as a storage where once logged in/signed up the user data
//is made available for other components such as orders history and personal user details

import { createContext, useState } from "react";

//value to be accessed
export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=>null, 
})

export const UserProvider=({children})=>{  //the provider will wrap every component that will need the value
    const [currentUser,setCurrentUser]=useState(null);
    const value= {currentUser, setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}