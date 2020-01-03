import { combineReducers } from 'redux'

//Reducers
import PaymentReducer from './PaymentReducer'
import DonationReducer from './DonationReducer'
import SumReducer from './SumReducer'
import PaymentTempReducer from './PaymentTempReducer'
import DonationTempReducer from './DonationTempReducer'

export default combineReducers({
  payment: PaymentReducer,
  donation: DonationReducer,
  sum: SumReducer,
  paymentTemp: PaymentTempReducer,
  donationTemp: DonationTempReducer,
})
