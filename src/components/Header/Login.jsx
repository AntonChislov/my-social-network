import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} component={Input} name={'login'} validate={[required, maxLength20]} />
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
    console.log(formData)
  }
    
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login