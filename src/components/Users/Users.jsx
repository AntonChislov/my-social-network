import React from "react";

const Users = (props) => {

  if (props.usersData.length === 0) {
    props.setUsers([
      
    ])
  }

  return (
    <div>
      {
        props.usersData.map(user => <div key={user.id}>
          <div>
            {user.followed
              ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
              : <button onClick={() => props.follow(user.id)}>Unfollow</button>}
          </div>
          <div>{user.name}</div>
          <div>{user.location.city}</div>
          <div>{user.location.country}</div>
        </div>
        )
      }
    </div>
  )
}

export default Users
