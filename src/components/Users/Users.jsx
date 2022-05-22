import React from "react";

const Users = (props) => {
  return <div>
    {
      props.state.usersPage.map(user => {
        <div>
          <div>
            {user.followed
              ? <button onClick={props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={props.follow(user.id)}>Follow</button>}
          </div>
          <div>{user.name}</div>
          <div>{user.location.city}</div>
          <div>{user.location.country}</div>
        </div>
      })
    }
  </div>
}

export default Users
