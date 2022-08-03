import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  postsData: [
    { message: 'Hi, my freind', like: 14 },
    { message: "It's my first post", like: 17 }
  ],
  newPostText: '',
  profile: {
    photos: {
      large: ''
    }
  }
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, { id: 5, message: state.newPostText, like: 0 }],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export let addPostActionCreator = () => ({ type: ADD_POST })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export let updateNewPostTextActionCreator = (addText) => ({ type: UPDATE_NEW_POST_TEXT, text: addText })

export const getProfileThunk = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data))
  })
}

export default profileReducer