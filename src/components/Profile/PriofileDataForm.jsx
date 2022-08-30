import React from 'react';
import { reduxForm } from 'redux-form';
import classes from "./../common/FormsControls/FormsControls.module.css"
import { createField, Input, Textarea } from '../../components/common/FormsControls/FormsControls'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit}>
  
  <div>
    <b>Full name: </b> {createField('Full name', Input, 'fullName', [])}
  </div>
  <div>
    <b>Looking for a job: </b> {createField('', Input, 'lookingForAJob', [], { type: 'checkbox' })} 
  </div>
  <div>
    <b>My profissional skills: </b> {createField('My profissional skills', Textarea, 'lookingForAJobDescription', [])}
  </div>
  <div>
    <b>About me: </b> {createField('About me', Textarea, 'aboutMe', [])}
  </div>
  <div>
    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
      return <div key={key}>
        <b>{key}: {createField(key, Input, 'contacts.' + key)}</b>
      </div>
    })}
  </div>
  {error && <div className={classes.formSummaryError} >
          {error}
          </div>}
  <div>
    <button>save</button>
  </div>
</form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm