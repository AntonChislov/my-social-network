const SEND_MESSAGE = 'ADD-MESSAGE'

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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
    return {
      ...state,
      messagesData: [...state.messagesData, {message: action.message}],
      newMessageText: ''
    }
    default:
      return state
  }
}

export let sendMessagActionCreator = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer