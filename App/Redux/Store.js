import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {
  createStore,
  applyMiddleware,
} from 'redux'

import rootReducers from './reducers'

const middleware = applyMiddleware(promise, thunk, logger)
const Store = createStore(rootReducers, composeWithDevTools(middleware))

export default Store
