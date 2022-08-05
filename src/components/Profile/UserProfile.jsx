import React from 'react';
import userPhoto from '../../assets/images/user.png'


const UserProfile = (props) => {
  return (
    <div>
      <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large }></img>
      <div>{props.profile.fullName}</div>
    </div>
  )

}

export default UserProfile