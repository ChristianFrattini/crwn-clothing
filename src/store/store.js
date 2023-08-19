import {compose, createStore, applyMiddleware} from 'redux'  //core redux libraries
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }

    console.log('type:', action.type)
    console.log('payload:', action.payload)
    console.log('currentState:', store.getState())

    next(action);  
    
    console.log('next state: ', store.getState())
}

const middleWare=[loggerMiddleware] //whenever an action is dispatched. before it hits the reducer it has to go through the middleware
const composeEnhancers=compose(applyMiddleware(...middleWare)) 

//root reducers. core reducer that includes all other smaller reducers
export const store=createStore(rootReducer, undefined, composeEnhancers)

