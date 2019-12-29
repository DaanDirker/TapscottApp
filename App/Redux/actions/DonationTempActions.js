import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import {
    FETCH_DONATIONS,
    FETCH_DONATIONS_SUCCESS,
    FETCH_DONATIONS_FAIL,
} from './ActionTypes'

export const fetchDonations = () => {
    return dispatch => {
        dispatch({ type: FETCH_DONATIONS })

        return axios.get(apiBaseUrl + '/sum/payment')
            .then(res => {
                dispatch({ type: FETCH_DONATIONS_SUCCESS, payload: res.data })
                console.log(res.data)

                //loop through list
                //change int back to double
                //return new list
            })
            .catch(err => {
                dispatch({ type: FETCH_DONATIONS_FAIL, payload: err })
            })
    }
}

