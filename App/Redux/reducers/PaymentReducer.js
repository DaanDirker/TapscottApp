import {
  FETCH_PAYMENT_CHECKOUT,
  FETCH_PAYMENT_CHECKOUT_SUCCESS,
  FETCH_PAYMENT_CHECKOUT_FAIL,
  FETCH_PAYMENTS,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAIL,
  FETCH_PAYMENT_OBJECT,
  FETCH_PAYMENT_OBJECT_SUCCESS,
  FETCH_PAYMENT_OBJECT_FAIL,
  FETCH_LATEST_PAYMENTS,
  FETCH_LATEST_PAYMENTS_SUCCESS,
  FETCH_LATEST_PAYMENTS_FAIL,
} from '../actions/ActionTypes'

const initialState = {
  isFetching: false,
  hasFailed: false,
  errorMessage: null,
  data: [],
  checkout: [],
  payments: {
    transport: 0,
    labor: 0,
    fishingNets: 0,
    boatRental: 0,
    bank: 0,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PAYMENT_CHECKOUT:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
      })
    case FETCH_PAYMENT_CHECKOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        checkout: action.payload
      })
    case FETCH_PAYMENT_CHECKOUT_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: true,
        errorMessage: action.err,
        checkout: action.payload
      })
    case FETCH_PAYMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
      })
    case FETCH_PAYMENTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_PAYMENTS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: true,
        errorMessage: action.err,
        data: action.payload
      })
    case FETCH_LATEST_PAYMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
      })
    case FETCH_LATEST_PAYMENTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_LATEST_PAYMENTS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: true,
        errorMessage: action.err,
        data: action.payload
      })
    case FETCH_PAYMENT_OBJECT:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
      })
    case FETCH_PAYMENT_OBJECT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        payments: {
          transport: action.payload.transport,
          labor: action.payload.labor,
          fishingNets: action.payload.fishingNets,
          boatRental: action.payload.boatRental,
          bank: action.payload.bank
        }
      })
    case FETCH_PAYMENT_OBJECT_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: action.err
      })
    default:
      return state
  }
} 
