import { combineReducers } from 'redux'

//Reducers
import PaymentReducer from './PaymentReducer'
import DonationReducer from './DonationReducer'
import BottomNavReducer from './BottomNavReducer'

export default combineReducers ({
  payment: PaymentReducer,
  donation: DonationReducer,
  bottomNav: BottomNavReducer
})
