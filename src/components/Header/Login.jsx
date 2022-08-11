import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunk } from '../../redux/authReduser';
import { maxLength, required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength20 = maxLength(40)

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} component={Input} name={'email'} validate={[required, maxLength20]} />
        </div>
        <div>
          <Field placeholder={'Password'} component={Input} name={'password'} validate={[required, maxLength20]} />
        </div>
        <div>
          <Field type={'checkbox'} component={Input} name={'rememberMe'} validate={[required, maxLength20]} /> rememberMe
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

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

export default connect(mapStateToProps, {loginThunk})(Login) 