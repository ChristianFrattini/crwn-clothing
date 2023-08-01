import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './categories.styles.scss'
//import './components/category-item/category-item.component'
//import CategoryItem from './components/category-item/category-item.component'
//import Categories from './components/directory/directory.component'
import Home from './components/routes/home/home.component' //home component import
import {Routes, Route, Outlet} from 'react-router-dom'

const Navigation =()=>{
  return(
    <div>
        <div>
            <h1>NAVIGATION BAR</h1>
        </div>
        <Outlet/>
    </div>
  )
}

const App=()=> {

  return (  //routes initialization path and element (component) 
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
    
    
  )
}

export default App
