import { combineReducers } from 'redux'

//Reducers
import PaymentReducer from './PaymentReducer'
import DonationReducer from './DonationReducer'
import BottomNavReducer from './BottomNavReducer'
import DonationValueReducer from './DonationValueReducer'
import SumReducer from './SumReducer'

export default combineReducers({
  payment: PaymentReducer,
  donation: DonationReducer,
  bottomNav: BottomNavReducer,
  donationValue: DonationValueReducer,
  sum: SumReducer
})
