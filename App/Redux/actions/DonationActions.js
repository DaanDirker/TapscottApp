import { 
  SET_DONATION
} from '../../Utils/ActionTypes'

export const setDonation = (inputAmount, inputName) => {
  return dispatch => {
    dispatch({
      type: SET_DONATION,
      payload: {
        name: inputName,
        amount: inputAmount
      }
    }) 
  }
}
