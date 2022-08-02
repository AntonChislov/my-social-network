import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/user.png'
import Preloader from "../Preloader";
import classes from './Users.module.css'
import { usersAPI } from "../../api/api";

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
              usersAPI.unfollow(user.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                })
            }}>Unfollow</button>
            : <button onClick={() => {
              usersAPI.follow(user.id).then(data => {
                  if (data.resultCode === 0) {
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