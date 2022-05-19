const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  postsData: [
    { message: 'Hi, my freind', like: 14 },
    { message: "It's my first post", like: 17 }
  ],
  newPostText: ''
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
    default:
      return state
  }
}

export let addPostActionCreator = () => ({ type: ADD_POST })

export let updateNewPostTextActionCreator = (addText) => ({ type: UPDATE_NEW_POST_TEXT, text: addText })

export default profileReducer