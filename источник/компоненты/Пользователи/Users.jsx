import React from "react";

const Users = (props) => {
  return <div>
    {
   props.state.usersPage.map(user => {
    <div>
     {user.followed 
       ? <button onClick={unfollow}>Unfollow</button> 
       : <button onClick={follow}>Follow</button>
    </div>
    <div>{users.name}</div>
    <div>{users.town}</div>
  })  
 }
  </div>
}

export default Users
