import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import { 
  FETCH_PAYMENT_CHECKOUT,
  FETCH_PAYMENT_CHECKOUT_SUCCESS,
  FETCH_PAYMENT_CHECKOUT_FAIL,
} from './ActionTypes'

export const fetchPayment = (amount, name) => {
  return dispatch => {
    dispatch({type: FETCH_PAYMENT_CHECKOUT})

    return axios.post(apiBaseUrl + '/payment/' + amount + "/" + name)
      .then(res => {
        dispatch({type: FETCH_PAYMENT_CHECKOUT_SUCCESS, payload: res.data})
        console.log(res.data)
      })
      .catch(err => {
        dispatch({type: FETCH_PAYMENT_CHECKOUT_FAIL, payload: err})
      })
  } 
}
