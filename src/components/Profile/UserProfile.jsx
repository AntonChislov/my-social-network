import React from 'react';
import userPhoto from '../../assets/images/user.png'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHook from './ProfileStatusWithHook';


const UserProfile = (props) => {

  return (
    <div>
      <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large }></img>
      <div>{props.profile.fullName}</div>
      <ProfileStatusWithHook status={props.status} updateStatusThunk={props.updateStatusThunk}/>
    </div>
  )

}

export default UserProfile