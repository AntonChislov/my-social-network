import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import userPhoto from '../../assets/images/user.png'
import classes from './Profile.module.css'

const MyProfile = (props) => {
  return (
    <div>
      <div className={classes.item}>My Profile Content</div>
      <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large}></img>
      <div>{props.profile.fullName}</div>
      <MyPostsContainer />
    </div>
  )
}

export default MyProfile



