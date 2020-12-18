import {createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = process.env.NODE_ENV === 'development' ? [logger] : []
middlewares.push(sagaMiddleware)

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);