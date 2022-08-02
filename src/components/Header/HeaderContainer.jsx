import React from 'react';
import axios from 'axios';
import Header from './Header';
import { setAuthData } from '../../redux/authReduser'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
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