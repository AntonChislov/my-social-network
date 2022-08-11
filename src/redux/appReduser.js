import { setAuthDataThunk } from "./authReduser"

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
  initialized: false
}

const appReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
} 

export let initializedSuccess = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuthDataThunk())
  Promise.all([promise])
  .then(() => {dispatch(initializedSuccess())})
}
export default appReduser