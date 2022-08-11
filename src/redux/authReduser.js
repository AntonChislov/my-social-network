import { authAPI } from "../api/api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_LOGIN = 'SET_LOGIN'
const LOGOUT = 'LOGOUT'

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

export let setAuthData = (id, login, email, isAuth) => ({ type: SET_AUTH_DATA, authData: {id, login, email, isAuth} })

export let isLogin = (value) => ({ type: SET_LOGIN, value })

export let logOut = () => ({ type: LOGOUT })

export const setAuthDataThunk = () => (dispatch) => {
  authAPI.isAuth().then(data => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthData(id, login, email, true))
    }
  })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthDataThunk())
    }
  })
}

export const logOutThunk = () => (dispatch) => {
  authAPI.logOut().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false))
    }
  })
}

export default authReducer