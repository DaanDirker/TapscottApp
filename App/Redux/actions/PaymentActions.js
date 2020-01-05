import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import {
  FETCH_PAYMENT_CHECKOUT,
  FETCH_PAYMENT_CHECKOUT_SUCCESS,
  FETCH_PAYMENT_CHECKOUT_FAIL,
  FETCH_PAYMENT_OBJECT,
  FETCH_PAYMENT_OBJECT_SUCCESS,
  FETCH_PAYMENT_OBJECT_FAIL,
  FETCH_LATEST_PAYMENTS,
  FETCH_LATEST_PAYMENTS_SUCCESS,
  FETCH_LATEST_PAYMENTS_FAIL,
} from './ActionTypes'

export const fetchPayment = (amount, name) => {
  return dispatch => {
    dispatch({ type: FETCH_PAYMENT_CHECKOUT })

    return axios.post(apiBaseUrl + '/payment/mollie/' + amount + "/" + name)
      .then(res => {
        dispatch({ type: FETCH_PAYMENT_CHECKOUT_SUCCESS, payload: res.data })
        console.log(res.data)
      })
      .catch(err => {
        dispatch({ type: FETCH_PAYMENT_CHECKOUT_FAIL, payload: err })
      })
  }
}

export const fetchPaymentObject = () => {
  return dispatch => {
    dispatch({ type: FETCH_PAYMENT_OBJECT })

    return axios.get(apiBaseUrl + '/payment/collection')
      .then(res => {
        dispatch({ type: FETCH_PAYMENT_OBJECT_SUCCESS, payload: res.data })
        console.log(res.data)
      })
      .catch(err => {
        dispatch({ type: FETCH_PAYMENT_OBJECT_FAIL, payload: err })
      })
  }
}

export const fetchLatestPayments = () => {
  return dispatch => {
    dispatch({ type: FETCH_LATEST_PAYMENTS })

    return axios.get(apiBaseUrl + '/payment/latest')
      .then(res => {
        dispatch({ type: FETCH_LATEST_PAYMENTS_SUCCESS, payload: res.data })
        console.log(res.data)
      })
      .catch(err => {
        dispatch({ type: FETCH_LATEST_PAYMENTS_FAIL, payload: err })
      })
  }
}
