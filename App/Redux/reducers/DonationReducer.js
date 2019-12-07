import {
  SET_DONATION, 
  SET_DONATION_NAME, 
  SET_DONATION_AMOUNT,
  SET_DONATION_CUSTOM
} from '../../Utils/ActionTypes'
  
const initialState = {
  name: 'Anonymous',
  amount: 1,
  custom: false
}
  
export default (state = initialState, action) => {
  switch(action.type) {
    case SET_DONATION:
      return {
        ...state,
        name: action.payload.name,          
        amount: action.payload.amount,
        custom: action.payload.custom
      }
    case SET_DONATION_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    case SET_DONATION_AMOUNT:
      return {
        ...state,
        amount: action.payload.amount,
        custom: action.payload.custom
      }
    case SET_DONATION_CUSTOM:
      return {
        ...state,
        custom: action.payload.custom
      }
    default:
      return state
  }
}
  