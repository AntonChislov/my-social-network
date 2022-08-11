import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <img src='https://2pawdn1lybjtzusmc175drv1-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/logo.png' alt='' />
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