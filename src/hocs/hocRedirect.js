import React from "react";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const WithRedirect = (Component) => (props) => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <Component {...props} />
}

export default WithRedirect