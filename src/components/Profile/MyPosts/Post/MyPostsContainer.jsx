import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from '../MyPosts';

const MyPostsContainer = (props) => {
debugger
  let state = props.store.getState()

  let addPosts = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (addText) => {
    props.store.dispatch(updateNewPostTextActionCreator(addText))
  }

  return (
    <MyPosts addPosts={addPosts} 
          onPostChange={onPostChange}
          newPostText={state.postsPage.newPostText} 
          message={state.dialogsPage.message} />
  )
}

export default MyPostsContainer



