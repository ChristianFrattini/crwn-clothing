import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './categories.styles.scss'
//import './components/category-item/category-item.component'
//import CategoryItem from './components/category-item/category-item.component'
//import Categories from './components/directory/directory.component'
import Home from './components/routes/home/home.component' //home component import
import {Routes, Route} from 'react-router-dom'

const App=()=> {

  return (  //routes initialization path and element (component) 
    <Routes>
      <Route path='/' element={<Home/>}/> 
    </Routes>
    
  )
}

export default App
