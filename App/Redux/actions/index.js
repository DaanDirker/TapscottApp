import ActionTypes from './ActionTypes'

//Action Creators
export const addProduct = title => ({
    type: ActionTypes.ADD_TO_CART,
    title
})
