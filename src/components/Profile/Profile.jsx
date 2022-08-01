import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfile from './MyProfile';

const Profile = () => {
  return (
    <div>
      <MyProfile />
      <MyPostsContainer />
    </div>
  )
}

export default Profile