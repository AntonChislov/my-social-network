import React from "react";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export const WithRedirect = (Component) => {

  class withRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login' />
      return <Component {...this.props} />
    }
  }

  let withAuthRedirect = connect(mapStateToProps)(withRedirectComponent)

  return withAuthRedirect
}