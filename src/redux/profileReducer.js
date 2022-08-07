import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'GET_STATUS'

let initialState = {
  postsData: [
    { message: 'Hi, my freind', like: 14 },
    { message: "It's my first post", like: 17 }
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
        postsData: [...state.postsData, { id: 5, message: action.value, like: 0 }],
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
    default:
      return state
  }
}

export let addPostActionCreator = (value) => ({ type: ADD_POST, value })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export let setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunk = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data))
  })
}

export const getStatusThunk = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data))
  })
}

export const updateStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) dispatch(setStatus(status))
  })
}

export default profileReducer