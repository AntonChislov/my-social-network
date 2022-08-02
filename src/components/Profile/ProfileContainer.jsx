import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer'
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

const withRouter = (Component) => {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 24436
    }
    profileAPI.getProfile(userId).then(data => {
        this.props.setUserProfile(data);
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.postsPage.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))