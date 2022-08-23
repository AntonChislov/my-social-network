import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { loginThunk } from '../../redux/authReduser';
import { required } from '../../utils/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {createField('Login', Input, 'email', [required])}
        {createField('Password', Input, 'password', [required])}
        {createField(null, Input, 'rememberMe', [], { type: 'checkbox' }, 'remember me')}
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
    props.loginThunk(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) return <Navigate to='/profile' />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { loginThunk })(Login) 