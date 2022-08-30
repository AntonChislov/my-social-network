import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import logo from '../../assets/images/600px-Wikimedia-logo.png'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <img src={logo} alt='' />
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div>
            {props.login}
            <button onClick={props.logOutThunk} >logOut</button>
          </div>
          : <div>
            <NavLink to='/login'>Login</NavLink>
          </div>}
      </div>
    </div>
  )
}

export default Header