import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <img src={props.profile.photos.large}></img>
      <div>{props.profile.fullName}</div>
    </div>
  )

}

export default UserProfile