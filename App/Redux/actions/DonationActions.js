import axios from 'axios'
import { apiBaseUrl } from '../../Utils/Constants'
import {
    FETCH_DONATIONS,
    FETCH_DONATIONS_SUCCESS,
    FETCH_DONATIONS_FAIL,
    FETCH_LATEST_DONATIONS,
    FETCH_LATEST_DONATIONS_SUCCESS,
    FETCH_LATEST_DONATIONS_FAIL,
} from './ActionTypes'

export const fetchAllDonations = () => {
    return dispatch => {
        dispatch({ type: FETCH_DONATIONS })

        return axios.get(apiBaseUrl + '/transaction/donations')
            .then(res => {
                dispatch({ type: FETCH_DONATIONS_SUCCESS, payload: res.data })
                console.log(res.data)
            })
            .catch(err => {
                dispatch({ type: FETCH_DONATIONS_FAIL, payload: err })
            })
    }
}

export const fetchLatestDonations = () => {
    return dispatch => {
        dispatch({ type: FETCH_LATEST_DONATIONS })

        return axios.get(apiBaseUrl + '/transaction/donations')
            .then(res => {
                dispatch({ type: FETCH_LATEST_DONATIONS_SUCCESS, payload: res.data })
                console.log(res.data)
            })
            .catch(err => {
                dispatch({ type: FETCH_LATEST_DONATIONS_FAIL, payload: err })
            })
    }
}

