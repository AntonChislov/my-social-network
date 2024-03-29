import React from 'react';
import Header from './Header';
import { logOutThunk } from '../../redux/authReduser';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login} logOutThunk={this.props.logOutThunk} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { logOutThunk })(HeaderContainer)