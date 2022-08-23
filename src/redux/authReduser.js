import { authAPI } from "../api/api"

const SET_AUTH_DATA = 'authReducer_SET_AUTH_DATA'
const SET_LOGIN = 'authReducer_SET_LOGIN'
const LOGOUT = 'authReducer_LOGOUT'

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
        ...action.authData
      }
    case SET_LOGIN:
      return {
        ...state,
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

export let setAuthData = (id, login, email, isAuth) => ({ type: SET_AUTH_DATA, authData: { id, login, email, isAuth } })

export let isLogin = (value) => ({ type: SET_LOGIN, value })

export let logOut = () => ({ type: LOGOUT })

export const setAuthDataThunk = () => async (dispatch) => {
  let data = await authAPI.isAuth()
  if (data.resultCode === 0) {
    let { id, login, email } = data.data
    dispatch(setAuthData(id, login, email, true))
  }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.logIn(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(setAuthDataThunk())
    }
}

export const logOutThunk = () => async (dispatch) => {
  let data = await authAPI.logOut()
    if (data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false))
    }
}

export default authReducer