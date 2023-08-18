import {compose, createStore, applyMiddleware} from 'redux'  //core redux libraries
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

const middleWare=[logger] //whenever an action is dispatched. before it hits the reducer it has to go through the middleware
const composeEnhancers=compose(applyMiddleware(...middleWare)) 

//root reducers. core reducer that includes all other smaller reducers
export const store=createStore(rootReducer, undefined, composeEnhancers)

