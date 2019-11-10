import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import { 
  FETCHING_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from '../../Utils/ActionTypes'

export default function fetchData() {
  return dispatch => {
    dispatch({type: FETCHING_DATA})

    return axios.get(apiBaseUrl)
      .then(res => {
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: FETCH_DATA_FAIL, payload: err})
      })
  } 
}
