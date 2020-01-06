import { combineReducers } from 'redux'

//Reducers
import PaymentReducer from './PaymentReducer'
import DonationReducer from './DonationReducer'
import DonationValueReducer from './DonationValueReducer'
import SumReducer from './SumReducer'

export default combineReducers({
  payment: PaymentReducer,
  donation: DonationReducer,
  donationValue: DonationValueReducer,
  sum: SumReducer,
})
