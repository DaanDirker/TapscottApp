import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import {
  FETCH_SUM_DONATION,
  FETCH_SUM_DONATION_SUCCESS,
  FETCH_SUM_DONATION_FAIL,
  FETCH_SUM_PAYMENT,
  FETCH_SUM_PAYMENT_SUCCESS,
  FETCH_SUM_PAYMENT_FAIL,
} from './ActionTypes'

export const fetchSumDonations = () => {
  return dispatch => {
    dispatch({ type: FETCH_SUM_DONATION })

    return axios.get(apiBaseUrl + '/donation/sum')
      .then(res => {
        dispatch({ type: FETCH_SUM_DONATION_SUCCESS, payload: res.data })
        console.log(res.data)
      })
      .catch(err => {
        dispatch({ type: FETCH_SUM_DONATION_FAIL, payload: err })
      })
  }
}

export const fetchSumPayments = () => {
  return dispatch => {
    dispatch({ type: FETCH_SUM_PAYMENT })

    return axios.get(apiBaseUrl + '/payment/sum')
      .then(res => {
        dispatch({ type: FETCH_SUM_PAYMENT_SUCCESS, payload: res.data })
        console.log(res.data)
      })
      .catch(err => {
        dispatch({ type: FETCH_SUM_PAYMENT_FAIL, payload: err })
      })
  }
}
