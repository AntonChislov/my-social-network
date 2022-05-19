import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={focus => focus.isActive ? classes.active : classes.item}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={focus => focus.isActive ? classes.active : classes.item}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='news' className={focus => focus.isActive ? classes.active : classes.item}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={focus => focus.isActive ? classes.active : classes.item}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={focus => focus.isActive ? classes.active : classes.item}>Settings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' className={focus => focus.isActive ? classes.active : classes.item}>All Users</NavLink>
      </div>
      <div>
        <FriendsContainer />
      </div>
    </div>
  )
}

export default Navbar

