import { connect } from "react-redux"
import WithRedirect from "../../hocs/hocRedirect"
import { sendMessagActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
  return { 
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, mapDispatchToProps) (WithRedirect(Dialogs))