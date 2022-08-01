import { connect } from "react-redux"
import { sendMessagActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
  return { 
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessagActionCreator())
    },
    onMessageChange: (message) => {
      dispatch(updateNewMessageTextActionCreator(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dialogs)