import {
  FETCH_DONATIONS,
  FETCH_DONATIONS_SUCCESS,
  FETCH_DONATIONS_FAIL,
  FETCH_LATEST_DONATIONS,
  FETCH_LATEST_DONATIONS_SUCCESS,
  FETCH_LATEST_DONATIONS_FAIL,
} from '../actions/ActionTypes'

const initialState = {
  isFetching: false,
  hasFailed: false,
  errorMessage: null,
  data: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DONATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
        data: null
      })
    case FETCH_DONATIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_DONATIONS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: true,
        errorMessage: action.err,
        data: action.payload
      })
    case FETCH_LATEST_DONATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
        data: null
      })
    case FETCH_LATEST_DONATIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_LATEST_DONATIONS_FAIL:
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
