import { authAPI } from "../api/api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.authData,
        isAuth: true
      }
    default:
      return state
  }
}

export let setAuthData = (id, login, email) => ({ type: SET_AUTH_DATA, authData: {id, login, email} })

export const setAuthDataThunk = () => (dispatch) => {
  authAPI.isAuth().then(data => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthData(id, login, email))
    }
  })
}

export default authReducer