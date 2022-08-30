import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { loginThunk } from '../../redux/authReduser';
import { required } from '../../utils/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import classes from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField('Login', Input, 'email', [required])}
        {createField('Password', Input, 'password', [required])}
        {createField(null, Input, 'rememberMe', [], { type: 'checkbox' }, 'remember me')}

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField("Symbols from image", Input, "captcha", [required],{})}

        {error && <div className={classes.formSummaryError} >
          {error}
          </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) return <Navigate to='/profile' />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, { loginThunk })(Login) 