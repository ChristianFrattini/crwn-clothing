import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./category.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export const setCategories=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)


export const fetchCategoriesStart=()=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed=(error)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

/*export const fetchCategoriesAsync=()=>async(dispatch)=>{  //new async function using redux-thunk (action based approach to normal async functions with useEffect)
    dispatch(fetchCategoriesStart());  // dispatch the function to signal the fetching of the categories
    try{
        const categoriesArray = await getCategoriesAndDocuments() 
        dispatch(fetchCategoriesSuccess(categoriesArray));   //if fetching is successful then dispatch categories array by using the approproate function
    }catch(error){
        dispatch(fetchCategoriesFailed(error))// if an error occurs return it by using the appropriate failure function
    }
    
}*/