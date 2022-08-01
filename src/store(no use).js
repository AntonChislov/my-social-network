import dialogsReducer from "./redux/dialogsReducer"
import navBarReducer from "./redux/navBarReducer"
import profileReducer from "./redux/profileReducer"

let store = {
  _state: {
    postsPage: {
      postsData: [
        { id: 0, message: 'Hi, my freind', like: 14 },
        { id: 0, message: "It's my first post", like: 17 }
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' }
      ],

      messagesData: [
        { message: 'message 1' },
        { message: 'message 2' },
        { message: 'message 3' },
        { message: 'message 4' }
      ],

      newMessageText: ''
    },

    navbar: {
      friendsData: [
        { id: 1, name: 'friend 1' },
        { id: 2, name: 'friend 2' },
        { id: 3, name: 'friend 3' }
      ]
    }
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer
  },

  dispatch(action) {
    this._state.postsPage = profileReducer(this._state.postsPage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navBarReducer(this._state.navbar, action)

    this.rerenderEntireTree()
  }
}

window.store = store

export default store
