import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"

const SET_AUTH_DATA = 'authReducer_SET_AUTH_DATA'
const SET_LOGIN = 'authReducer_SET_LOGIN'
const LOGOUT = 'authReducer_LOGOUT'
const GET_CAPTCHA = 'authReducer_GET_CAPTCHA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_DATA:
    case GET_CAPTCHA:
      return {
        ...state,
        ...action.payload
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

export let setAuthData = (id, login, email, isAuth) => ({ type: SET_AUTH_DATA, payload: { id, login, email, isAuth } })

export let isLogin = (value) => ({ type: SET_LOGIN, value })

export let logOut = () => ({ type: LOGOUT }
  )
export let setCaptcha = (captchaUrl) => ({ type: GET_CAPTCHA, payload: {captchaUrl} })

export const setAuthDataThunk = () => async (dispatch) => {
  let data = await authAPI.isAuth()
  if (data.resultCode === 0) {
    let { id, login, email } = data.data
    dispatch(setAuthData(id, login, email, true))
  }
}

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  let data = await authAPI.logIn(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(setAuthDataThunk())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logOutThunk = () => async (dispatch) => {
  let data = await authAPI.logOut()
  if (data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(setCaptcha(captchaUrl))
}

export default authReducer