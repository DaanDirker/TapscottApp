import {
  SET_DONATION
} from '../../Utils/ActionTypes'
  
const initialState = {
  name: '',
  amount: ''
}
  
export default (state = initialState, action) => {
  switch(action.type) {
    case SET_DONATION:
      return {
        ...state,
        name: action.payload.name,          
        amount: action.payload.amount
      }
    default:
      return state
  }
}
  