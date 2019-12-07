import { 
  SET_DONATION, 
  SET_DONATION_AMOUNT, 
  SET_DONATION_NAME,
  SET_DONATION_CUSTOM
} from '../../Utils/ActionTypes'

export const setDonation = (inputAmount, inputName, isCustom) => {
  return dispatch => {
    dispatch({
      type: SET_DONATION,
      payload: {
        name: inputName,
        amount: inputAmount,
        custom: isCustom
      }
    }) 
  }
}

export const setDonationAmount = (inputAmount, isCustom) => {
  return dispatch => {
    dispatch({
      type: SET_DONATION_AMOUNT,
      payload: {
        amount: inputAmount,
        custom: isCustom
      }
    })
  }
}

export const setDonationName = (nameInput) => {
  return dispatch => {
    dispatch({
      type: SET_DONATION_NAME,
      payload: {
        name: nameInput
      }
    })
  }
}

export const setDonationCustom = (customInput) => {
  return dispatch => {
    dispatch({
      type: SET_DONATION_CUSTOM,
      payload: {
        custom: customInput
      }
    })
  }
}
