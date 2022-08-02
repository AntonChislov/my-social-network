import React from 'react';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

const Profile = (props) => {
  if (props.profile.userId === 24436) {
    return (
      <div>
        <MyProfile profile={props.profile} />
      </div>
    )
  } else {
    return (
      <div>
        <UserProfile profile={props.profile} />
      </div>
    )
  }
}

export default Profile