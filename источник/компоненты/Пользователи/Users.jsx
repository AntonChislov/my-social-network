import React from "react";

const Users = (props) => {
  return <div>
    {
   props.state.usersPage.map(user => {
    <div>
     {user.followed 
       ? <button onClick={props.unfollow(user.id)}>Unfollow</button> 
       : <button onClick={props.follow(user.id)}>Follow</button>
    </div>
    <div>{users.name}</div>
    <div>{users.location.city}</div>
    <div>{users.location.country}</div>
  })  
 }
  </div>
}

export default Users
