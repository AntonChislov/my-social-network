import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import userPhoto from '../../assets/images/user.png'
import classes from './Profile.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook';

const MyProfile = ({ savePhoto, isOwner, status, updateStatusThunk, profile }) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={classes.item}>My Profile Content</div>
      <img src={profile.photos.large || userPhoto} />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <div>{profile.fullName}</div>
      <ProfileStatusWithHook status={status} updateStatusThunk={updateStatusThunk} />
      <MyPostsContainer />
    </div>
  )
}

export default MyProfile