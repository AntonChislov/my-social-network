import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/user.png'
import Preloader from "../Preloader";
import axios from 'axios';
import classes from './Users.module.css'

const Users = (props) => {

  let totalPage = Math.ceil(props.countPage / 1000)

  let pageArr = []

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i)
  }

  return <div>
    <Preloader isFetching={props.isFetching} />
    <div>
      {pageArr.map(page => {
        return <span className={props.currentPage === page && classes.currentPage}
          onClick={() => { props.updateCurrentPage(page) }}>{page}</span>
      })}
    </div>
    {props.usersData.map(user => <div key={user.id}>
      <div><span>
        <NavLink to={`/profile/${user.id}`}>
          <img className={classes.img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
        </NavLink>
      </span>
        <span>
          {user.followed
            ? <button onClick={() => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                  "API-KEY": "2cac03ab-6831-474b-ba3f-c5700832e553"
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                })
            }}>Unfollow</button>
            : <button onClick={() => {
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                  "API-KEY": "2cac03ab-6831-474b-ba3f-c5700832e553"
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id)
                  }
                })
            }}>Follow</button>}
        </span></div>
      <span>{user.name}</span>
    </div>
    )}
  </div>
}

export default Users