import React from 'react';
import userPhoto from '../../assets/images/user.png'
import ProfileStatus from './ProfileStatus';


const UserProfile = (props) => {

  return (
    <div>
      <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large }></img>
      <div>{props.profile.fullName}</div>
      <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
    </div>
  )

}

export default UserProfile