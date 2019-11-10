import { combineReducers } from 'redux'

//Reducers
import CryptoReducer from './CryptoReducer'

export default combineReducers ({
  crypto: CryptoReducer
})
