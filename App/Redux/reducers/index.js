import { combineReducers } from 'redux'

//Reducers
import PaymentReducer from './PaymentReducer'
import DonationReducer from './DonationReducer'

export default combineReducers ({
  payment: PaymentReducer,
  donation: DonationReducer
})
