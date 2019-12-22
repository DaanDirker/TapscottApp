import { CHANGE_BOTTOM_NAV } from './ActionTypes'

export const navigateTo = (nav) => {
  return dispatch => {
    dispatch({
      type: CHANGE_BOTTOM_NAV,
      payload: {
        navigation: nav
      }
    }) 
  }
}
