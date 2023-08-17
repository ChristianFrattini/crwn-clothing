import { createContext, useEffect } from "react";
import  SHOP_DATA from '../shop-data'
import { useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: []
})

export const CategoriesProvider=({children})=>{
    const [categoriesMap, setCategoriesMap]=useState({})

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap = await getCategoriesAndDocuments()
            //console.log(categoryMap);

            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])

    const value ={categoriesMap}
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}