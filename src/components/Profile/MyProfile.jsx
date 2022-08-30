import React, { useState } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import userPhoto from '../../assets/images/user.png'
import classes from './MyProfile.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataForm from './PriofileDataForm';


const MyProfile = ({ savePhoto, isOwner, status, updateStatusThunk, profile, saveProfile }) => {

  const [editMode, activedEditMode] = useState(false)

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      activedEditMode(false)
    })
  }

  return (
    <div>
      <div className={classes.item}>My Profile Content</div>
      <img src={profile.photos.large || userPhoto} />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <div>{profile.fullName}</div>
      <ProfileStatusWithHook status={status} updateStatusThunk={updateStatusThunk} />
      <div>
        {editMode
          ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
          : <ProfileData profile={profile} activedEditMode={() => activedEditMode(true)} />}
      </div>
      <MyPostsContainer />
    </div>
  )
}

const divStyle = {
  paddingLeft: '13px'
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div style={divStyle}><b>{contactTitle}:</b> {contactValue}</div>
}

const ProfileData = ({ profile, activedEditMode }) => {
  return <div>
    <div>
      <button onClick={activedEditMode}>edit</button>
    </div>
    <div>
      <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
      <b>My profissional skills: </b> {profile.lookingForAJobDescription}
    </div>
    <div>
      <b>About me: </b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

export default MyProfile