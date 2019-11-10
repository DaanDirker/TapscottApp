import { Platform } from 'react-native'
import { composeWithDevTools } from 'remote-redux-devtools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {
  createStore,
  applyMiddleware,
} from 'redux'

import { 
  hostname as devHost,
  port as devPort
} from '../Config/remotedev.json'

import rootReducers from './reducers'

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: Platform.OS,
  hostname: devHost,
  port: devPort
})

const Middleware = applyMiddleware(promise, thunk, logger)

const Store = createStore(
  rootReducers,
  composeEnhancers(Middleware)
)

export default Store
