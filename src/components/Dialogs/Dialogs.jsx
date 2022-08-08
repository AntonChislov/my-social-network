import React from "react"
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../common/FormsControls/FormsControls"
import { maxLength, required } from "../../utils/validators"

let maxLength50 = maxLength(50)

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'sendMessage'} component={Textarea} validate={[required, maxLength50]} />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm)


const Dialogs = (props) => {

  let dialogElement = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)

  let messageElement = props.messagesData.map(message => <Message message={message.message} key={message.id} />)

  const onSubmitMessage = (value) => {
    console.log(value)
    props.sendMessage(value.sendMessage)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogElement}
      </div>
      <div className={classes.messageItems}>
        {messageElement}
      </div>
      <div>
        <div className={classes.textSend}>
          <MessageReduxForm onSubmit={onSubmitMessage} />
        </div>

      </div>
    </div>
  )
}

export default Dialogs