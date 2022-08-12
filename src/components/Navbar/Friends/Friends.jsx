import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friends.module.css'

const Friends = (props) => {
  
  let friendElement = props.friends.map( friend => <Friend name={friend.name} key={friend.id} photo={friend.photos.small} />)

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