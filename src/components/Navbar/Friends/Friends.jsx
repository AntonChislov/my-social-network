import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friends.module.css'

const Friends = (props) => {
  
  let friendElement = props.state.map( friend => <Friend name={friend.name} key={friend.id} />)

  return (
    <div className={classes.blok}>
      <div>
        Friends
      </div>
      <div>
        { friendElement }
      </div>
    </div>
  )
}

export default Friends