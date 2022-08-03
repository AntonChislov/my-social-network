import React from 'react';
import Header from './Header';
import { setAuthDataThunk } from '../../redux/authReduser'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthDataThunk()
  }

  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { setAuthDataThunk })(HeaderContainer)