import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from './components/routes/home/home.component' //home component import
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/routes/navigation/navigation.component'
import SignIn from './components/routes/signin/sign-in.component'
import './index.css'


const App=()=> {

  const Shop =()=>{
    return(
      <div>
        <h1>SHOP</h1>
      </div>
    )
  }

  return (  //routes initialization path and element (component) 
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path="" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<SignIn/>}/>
      </Route>
    </Routes>
    
    
  )
}

export default App
