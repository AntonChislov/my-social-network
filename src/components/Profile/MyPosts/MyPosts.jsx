import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLength(10)

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPost'} validate={[required, maxLength10]} placeholder={'fdfdfdf'} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

const PostsReduxForm = reduxForm({ form: 'posts' })(PostsForm)

const MyPosts = React.memo((props) => {

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
})


export default MyPosts