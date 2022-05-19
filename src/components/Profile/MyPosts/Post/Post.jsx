import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      <div className={classes.post}>Like {props.like}</div>
    </div>
  )
}

export default Post



