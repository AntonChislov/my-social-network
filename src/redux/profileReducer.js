import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"
import userPhoto from '../assets/images/user.png'


const ADD_POST = 'ADD-POST'
const DEL_POST = 'DEL_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'GET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, my freind', like: 14 },
    { id: 2, message: "It's my first post", like: 17 }
  ],
  profile: {
    photos: {
      large: userPhoto
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
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.file}
      }
    default:
      return state
  }
}

export let addPostActionCreator = (value) => ({ type: ADD_POST, value })

export let deletePostActionCreator = (id) => ({ type: DEL_POST, id })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export let setStatus = (status) => ({ type: SET_STATUS, status })

export let setPhoto = (file) => ({ type: SET_PHOTO, file })


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

export const savePhotoThunk = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) dispatch(setPhoto(data.data.photos))
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id
  let data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getProfileThunk(userId))
  } else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
    return Promise.reject(data.messages[0])
  }
}

export default profileReducer