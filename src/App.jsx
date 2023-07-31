import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './categories.styles.scss'
import './components/category-item/category-item.component'
import CategoryItem from './components/category-item/category-item.component'
import Categories from './components/directory/directory.component'

const App=()=> {

  return (
    <Categories/>
  )
}

export default App
