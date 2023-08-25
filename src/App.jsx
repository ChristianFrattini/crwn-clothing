//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from './components/routes/home/home.component' //home component import
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/routes/navigation/navigation.component'
import Authentication from './components/routes/authentication/authentication.component'
import Shop from './components/routes/shop/shop.component'
import Checkout from './components/routes/checkout/checkout.component'
import { useDispatch } from 'react-redux'

import './index.css'

import { useState, useEffect } from "react";
import { onAuthStateChangedListener,signOutUser, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from './store/user/user.action'

const App=()=> {
  const dispatch=useDispatch();

  /*useEffect(()=>{ //use effect is run only once
        
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){ //create a user document only if a user comes through, otherwise setcurrentuser
            createUserDocumentFromAuth(user) //creates a doc when user logs in
            
        }
        dispatch(setCurrentUser(user));
        //console.log(user);

    });  //passes the callback function as the second value 'callback' in firebase code
    return unsubscribe;
},[])*/

useEffect(()=>{
  //getCurrentUser()
  dispatch(checkUserSession())
},[])

  return (  //routes initialization path and element (component) 
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path="" element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
    
    
  )
}

export default App
