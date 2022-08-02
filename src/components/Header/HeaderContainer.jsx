import React from 'react';
import Header from './Header';
import { setAuthData } from '../../redux/authReduser'
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.isAuth().then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          this.props.setAuthData(id, login, email);
        }
      })
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

export default connect(mapStateToProps, { setAuthData })(HeaderContainer)