import {compose, createStore, applyMiddleware} from 'redux'  //core redux libraries
import logger from 'redux-logger'


//root reducers. core reducer that includes all other smaller reducers