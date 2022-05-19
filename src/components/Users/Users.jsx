import React from "react";

const Users = (props) => {

  let usersElement = props.usersData.map(user =>
    <div>
    <div>
      <button>Follow</button>
      {user.name} {user.town}
    </div>
    </div>
    )

  return (
    <div>
      All Users
      {usersElement}
    </div>
  )
}

export default Users