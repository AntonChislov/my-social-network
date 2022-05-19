import React from "react"
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = (props) => {

  let dialogElement = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)

  let messageElement = props.messagesData.map(message => <Message message={message.message} key={message.id} />)

  let addMessageElement = React.createRef()

  let sendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = () => {
    let message = addMessageElement.current.value
    props.onMessageChange(message)
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
          <textarea ref={addMessageElement}
            value={props.newMessageText}
            onChange={onMessageChange} />
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs