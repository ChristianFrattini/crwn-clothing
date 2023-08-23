import {compose, createStore, applyMiddleware} from 'redux'  //core redux libraries
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist' //redux persist prevents the loss of date when refreshing the page
import storage from 'redux-persist/lib/storage' //uses local storage
//import thunk from 'redux-thunk'  //redux thunk and saga are async side effect libraries (ue only one)
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'

/*const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }

    next(action);  
    
    console.log('next state: ', store.getState())
}*/

const persistConfig={  //persist configuration
    key:'root', //persist from the root
    storage,
    blacklist:['user'] //dont persist the user 
}

const sagaMiddleware=createSagaMiddleware()

const persistedReducer=persistReducer(persistConfig, rootReducer)

const middleWares=[process.env.NODE_ENV == 'development' && logger, sagaMiddleware].filter(Boolean) //whenever an action is dispatched. before it hits the reducer it has to go through the middleware
//only render the logger when in development mode (change to 'production' to stop logging)
const composeEnhancer= (process.env.NODE_ENV!='production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose
const composeEnhancers=composeEnhancer(applyMiddleware(...middleWares)) 

//root reducers. core reducer that includes all other smaller reducers
export const store=createStore(persistedReducer, undefined, composeEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor=persistStore(store);

