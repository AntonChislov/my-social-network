import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileThunk } from '../../redux/profileReducer'
import { useParams } from 'react-router-dom';
import { WithRedirect } from '../../hocs/hocRedirect';

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
    this.props.getProfileThunk(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { getProfileThunk })(withRouter(WithRedirect(ProfileContainer)))