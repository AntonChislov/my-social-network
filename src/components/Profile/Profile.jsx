import React from 'react';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

const Profile = (props) => {
  if (props.profile.userId === props.initializedId) {
    return (
      <div>
        <MyProfile status={props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} />
      </div>
    )
  } else {
    return (
      <div>
        <UserProfile status={props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} />
      </div>
    )
  }
}

export default Profile