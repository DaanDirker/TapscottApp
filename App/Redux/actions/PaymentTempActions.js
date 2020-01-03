import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import {
    FETCH_PAYMENTS,
    FETCH_PAYMENTS_SUCCESS,
    FETCH_PAYMENTS_FAIL,
} from './ActionTypes'

export const fetchPayments = () => {
    return dispatch => {
        dispatch({ type: FETCH_PAYMENTS })

        return axios.get(apiBaseUrl + '/transaction/payments')
            .then(res => {
                dispatch({ type: FETCH_PAYMENTS_SUCCESS, payload: res.data })
                console.log(res.data)

                //loop through list
                //change int back to double
                //Sort categories together in one object
                //return 
            })
            .catch(err => {
                dispatch({ type: FETCH_PAYMENTS_FAIL, payload: err })
            })
    }
}

