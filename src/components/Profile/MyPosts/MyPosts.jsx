import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

  let postElement = props.posts.map(post => <Post message={post.message} like={post.like} key={post.id} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPosts()
  }

  let onPostChange = () => {
    let addText = newPostElement.current.value
    props.updateNewPostText(addText)
  }

  return (
    <div className={classes.myPosts}>
      My posts
      <div>
        <textarea ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange} />
      </div>
      <div>
        <button onClick={onAddPost}>Add</button>
      </div>
      {postElement}
    </div>
  )
}

export default MyPosts



