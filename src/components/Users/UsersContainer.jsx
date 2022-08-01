import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { countTotalPage, follow, showIsFetching, setCurrentPage, setUsers, unfollow,} from "../../redux/userReducer";
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.showIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.showIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.countTotalPage(response.data.totalCount);
      })
  }


  updateCurrentPage = (page) => {
    this.props.showIsFetching(true)
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.showIsFetching(false)
        this.props.setUsers(response.data.items);
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