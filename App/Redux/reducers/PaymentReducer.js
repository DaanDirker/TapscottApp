import {
  FETCH_PAYMENT_CHECKOUT,
  FETCH_PAYMENT_CHECKOUT_SUCCESS,
  FETCH_PAYMENT_CHECKOUT_FAIL,
} from '../../Utils/ActionTypes'

const initialState = {
  isFetching: false,
  hasFailed: false,
  errorMessage: null,
  data: {}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_PAYMENT_CHECKOUT:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
        data: null
      })
    case FETCH_PAYMENT_CHECKOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_PAYMENT_CHECKOUT_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: true,
        errorMessage: action.err,
        data: action.payload
      })
    default:
      return state
  }
} 
