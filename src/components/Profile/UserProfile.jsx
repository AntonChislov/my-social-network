import React from 'react';
import userPhoto from '../../assets/images/user.png'
import ProfileStatusWithHook from './ProfileStatusWithHook';


const UserProfile = ({updateStatusThunk, status, profile}) => {

  return (
    <div>
      <img src={profile.photos.large || userPhoto}/>
      <div>{profile.fullName}</div>
      <ProfileStatusWithHook status={status} updateStatusThunk={updateStatusThunk}/>
    </div>
  )

}

export default UserProfile