import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form';

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'newPost'} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

const PostsReduxForm = reduxForm({ form: 'posts' })(PostsForm)

const MyPosts = (props) => {

  let postElement = props.posts.map(post => <Post message={post.message} like={post.like} key={post.id} />)

  const onSubmitPosts = (value) => {
    props.addPosts(value.newPost)
  }

  return (
    <div className={classes.myPosts}>
      My posts
      <PostsReduxForm onSubmit={onSubmitPosts} />
      {postElement}
    </div>
  )
}

export default MyPosts