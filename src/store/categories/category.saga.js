import {takeLatest, all, call, put} from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync (){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray));   //if fetching is successful then dispatch categories array by using the approproate function
    }catch(error){
        yield put (fetchCategoriesFailed(error))// if an error occurs return it by using the appropriate failure function
    }
    
}

export function* onFetchCategories(){ 
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)  // whenever an action is trigger. the latest is taken. the argument triggers the function generator above
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])  // effects that runs everything inside and only complete whe everyhting is done
}