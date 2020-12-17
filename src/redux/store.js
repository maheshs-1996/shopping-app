import {createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : []
middlewares.push(thunk)

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);