import React from "react";
import userPhoto from '../../assets/images/user.png'
import classes from './Users.module.css'

const Users = (props) => {

  return <div>
    <Preloader isFetching={props.isFetching} />
    <div>
      {props.pageArr.map(page => {
        return <span className={props.currentPage === page && classes.currentPage}
        onClick={() => { 
          props.updateCurrentPage(page) 
          }}>{page}</span>})}
    </div>
    {
      props.usersData.map(user => <div key={user.id}>
        <div><span> 
          <img className={classes.img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
        </span>
          <span>
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>}
          </span></div>
        <span>{user.name}</span>
        <span>{'user.location.city'}</span>
        <span>{'user.location.country'}</span>
      </div>
      )
    }
  </div>
}


export default Users
