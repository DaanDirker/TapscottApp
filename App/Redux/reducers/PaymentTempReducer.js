import {
    FETCH_PAYMENTS,
    FETCH_PAYMENTS_SUCCESS,
    FETCH_PAYMENTS_FAIL,
} from '../actions/ActionTypes'

const initialState = {
    isFetching: false,
    hasFailed: false,
    errorMessage: null,
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PAYMENTS:
            return Object.assign({}, state, {
                isFetching: true,
                hasFailed: false,
                errorMessage: null,
                data: null
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
        default:
            return state
    }
}
