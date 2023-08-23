

import {Routes,Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils'
//import { setCategories } from '../../../store/categories/category.action'
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from '../../../store/categories/category.action'
//import { fetchCategoriesAsync} from '../../../store/categories/category.action'

import './shop.styles.scss'

const Shop=()=>{

    const dispatch =useDispatch()

    useEffect(()=>{
        //const getCategoriesMap=async()=>{
            //const categoriesArray = await getCategoriesAndDocuments()
            //console.log(categoriesArray);

            dispatch(fetchCategoriesStart()) //instead of fetchCategoriesAsyng (redux-thunk), fetchCategoriesStart is run(saga)
        //}
        //getCategoriesMap();
    },[])

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    )
}

export default Shop;