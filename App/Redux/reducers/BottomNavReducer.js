import { CHANGE_BOTTOM_NAV } from '../actions/ActionTypes'
import { BOTTOM_NAV_DONATION } from '../../Utils/Constants'

const initialState = { 
  currentBottomNav: BOTTOM_NAV_DONATION
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_BOTTOM_NAV:
      return {
        ...state,
        currentBottomNav: action.payload.navigation
      }
    default:
      return state
  }
}
