import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPosts: () => {
      dispatch(addPostActionCreator())
    }, 
    updateNewPostText: (addText) => {
      dispatch(updateNewPostTextActionCreator(addText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
