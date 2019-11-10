import {
  FETCHING_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from '../../Utils/ActionTypes'

const initialState = {
  isFetching: false,
  hasFailed: false,
  errorMessage: null,
  data: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        hasFailed: false,
        errorMessage: null,
        data: null
      })
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasFailed: false,
        errorMessage: null,
        data: action.payload
      })
    case FETCH_DATA_FAIL:
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
