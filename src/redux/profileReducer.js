import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const DEL_POST = 'DEL_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'GET_STATUS'

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, my freind', like: 14 },
    { id: 2, message: "It's my first post", like: 17 }
  ],
  profile: {
    photos: {
      large: null
    }
  },
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, { id: 3, message: action.value, like: 0 }],
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case DEL_POST:
      return {
        ...state,
        postsData: [...state.postsData.filter(post => post.id != action.id)]
      }
    default:
      return state
  }
}

export let addPostActionCreator = (value) => ({ type: ADD_POST, value })

export let deletePostActionCreator = (id) => ({ type: DEL_POST, id })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export let setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatusThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) dispatch(setStatus(status))
}

export default profileReducer