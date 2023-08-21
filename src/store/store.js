import {compose, createStore, applyMiddleware} from 'redux'  //core redux libraries
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist' //redux persist prevents the loss of date when refreshing the page
import storage from 'redux-persist/lib/storage' //uses local storage

import { rootReducer } from './root-reducer'

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }

    //console.log('type:', action.type)
    //console.log('payload:', action.payload)
    //console.log('currentState:', store.getState())

    next(action);  
    
    console.log('next state: ', store.getState())
}

const persistConfig={  //persist configuration
    key:'root', //persist from the root
    storage,
    blacklist:['user'] //dont persist the user 
}

const persistedReducer=persistReducer(persistConfig, rootReducer)

const middleWare=[loggerMiddleware] //whenever an action is dispatched. before it hits the reducer it has to go through the middleware
const composeEnhancers=compose(applyMiddleware(...middleWare)) 

//root reducers. core reducer that includes all other smaller reducers
export const store=createStore(persistedReducer, undefined, composeEnhancers)

export const persistor=persistStore(store);

