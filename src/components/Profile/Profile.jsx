import React from 'react';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

const Profile = (props) => {
  if (props.profile.userId === props.initializedId) {
    return (
      <div>
        <MyProfile savePhoto={props.savePhoto} isOwner={props.isOwner} status={props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} />
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