import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profileReducer'
import { useParams } from 'react-router-dom';
import { WithRedirect } from '../../hocs/hocRedirect';
import { compose } from 'redux';

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
      userId = this.props.initializedId
      /* if (!userId) {
        this.props.history.push('/login')
      } */
    }
    this.props.getProfileThunk(userId)
    this.props.getStatusThunk(userId)
  }

  render() {
    return (
      <Profile status={this.props.status} {...this.props} 
      profile={this.props.profile} updateStatusThunk={this.props.updateStatusThunk}
      initializedId={this.props.initializedId} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    initializedId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk }),
  withRouter,
  WithRedirect
)(ProfileContainer)