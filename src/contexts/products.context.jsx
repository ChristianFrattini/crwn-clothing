import { createContext, useEffect } from "react";
import  SHOP_DATA from '../shop-data'
import { useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider=({children})=>{
    const [products, setProducts]=useState([])

  

    const value ={products}
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}