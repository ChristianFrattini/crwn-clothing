import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from './components/routes/home/home.component' //home component import
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/routes/navigation/navigation.component'
import Authentication from './components/routes/authentication/authentication.component'
import Shop from './components/routes/shop/shop.component'
import Checkout from './components/routes/checkout/checkout.component'

import './index.css'

const App=()=> {

  

  return (  //routes initialization path and element (component) 
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path="" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
    
    
  )
}

export default App
