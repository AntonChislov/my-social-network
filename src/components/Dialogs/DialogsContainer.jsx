import { connect } from "react-redux"
import { compose } from "redux"
import { WithRedirect } from "../../hocs/hocRedirect"
import { sendMessagActionCreator } from "../../redux/dialogsReducer"
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
    sendMessage: (massage) => {
      dispatch(sendMessagActionCreator(massage))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithRedirect
)(Dialogs)