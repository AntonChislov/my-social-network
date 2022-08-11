import React from 'react';
import { connect } from "react-redux";
import { getUsersThunk, unfollowThunk, followThunk} from "../../redux/userReducer";
import { getButtonDisabled, getCountPage, getCurrentPage, getIsFetching, getPageSize, getUsersData } from '../../redux/usersSelectors';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  updateCurrentPage = (page) => {
    this.props.getUsersThunk(page, this.props.pageSize)
  }

  render() {
    return <Users updateCurrentPage={this.updateCurrentPage}
      usersData={this.props.usersData}
      currentPage={this.props.currentPage}
      pageArr={this.pageArr}
      countPage={this.props.countPage}
      buttonDisabled={this.props.buttonDisabled}
      unfollowThunk={this.props.unfollowThunk}
      followThunk={this.props.followThunk}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: getUsersData(state),
    countPage: getCountPage(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    buttonDisabled: getButtonDisabled(state),
  }
}

export default connect(mapStateToProps, { getUsersThunk, unfollowThunk, followThunk })(UsersContainer)