import React from 'react';
import { connect } from "react-redux";
import { usersAPI } from '../../api/api';
import { countTotalPage, follow, showIsFetching, setCurrentPage, setUsers, unfollow,} from "../../redux/userReducer";
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.showIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.showIsFetching(false)
        this.props.setUsers(data.items);
        this.props.countTotalPage(data.totalCount);
      })
  }

  updateCurrentPage = (page) => {
    this.props.showIsFetching(true)
    this.props.setCurrentPage(page)
      usersAPI.getUsers(page, this.props.pageSize).then(data => {
        this.props.showIsFetching(false)
        this.props.setUsers(data.items);
      })
  }

  render() {
    return <Users updateCurrentPage={this.updateCurrentPage}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      usersData={this.props.usersData}
      currentPage={this.props.currentPage}
      pageArr={this.pageArr}
      countPage={this.props.countPage}
      isFetching={this.props.isFetching} />
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    countPage: state.usersPage.countPage,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
  }
}

export default  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    countTotalPage,
    setCurrentPage,
    showIsFetching,
}) (UsersContainer)