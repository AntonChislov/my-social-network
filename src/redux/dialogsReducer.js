const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE'

let initialState = {
  dialogsData: [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' }
  ],

  messagesData: [
    { id: 0, message: 'message 1' },
    { id: 1, message: 'message 2' },
    { id: 2, message: 'message 3' },
    { id: 3, message: 'message 4' }
  ],

  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
    return {
      ...state,
      messagesData: [...state.messagesData, {message: state.newMessageText}],
      newMessageText: ''
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.message
      }
    default:
      return state
  }
}

export let sendMessagActionCreator = () => ({ type: SEND_MESSAGE })

export let updateNewMessageTextActionCreator = (addMessage) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: addMessage })

export default dialogsReducer