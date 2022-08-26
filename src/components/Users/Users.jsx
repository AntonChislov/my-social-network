import React from "react";
import Preloader from "./Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
  return <div>
    <Preloader isFetching={props.isFetching} />
    <Paginator countPage={props.countPage}
      currentPage={props.currentPage}
      updateCurrentPage={props.updateCurrentPage}
      pageSize={props.pageSize} />
    <div>
      {props.usersData.map(user => <User user={user}
        buttonDisabled={props.buttonDisabled}
        unfollowThunk={props.unfollowThunk}
        followThunk={props.followThunk}
        key={user.id} />)}
    </div>
  </div>
}

export default Users