import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
      <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHTN9KmPJLIPmg-DQH1E-2RzMgD18ujSe9Q&usqp=CAU' alt='' />
      <div className={classes.item}>My content</div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile



