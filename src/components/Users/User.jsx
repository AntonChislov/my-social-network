import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/user.png'
import classes from './Users.module.css'

const User = ({user, buttonDisabled, unfollowThunk, followThunk}) => {

  return (
    <div>
      <div><span>
        <NavLink to={`/profile/${user.id}`}>
          <img className={classes.img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
        </NavLink>
      </span>
        <span>
          {user.followed
            ? <button disabled={buttonDisabled.some(id => id === user.id)}
              onClick={() => { unfollowThunk(user) }}>Unfollow</button>
            : <button disabled={buttonDisabled.some(id => id === user.id)}
              onClick={() => { followThunk(user) }}>Follow</button>}
        </span></div>
      <span>{user.name}</span>
      <div>{user.status}</div>
    </div>
    )}


export default User