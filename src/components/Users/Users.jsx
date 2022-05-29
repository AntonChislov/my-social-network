import React from "react";
import userPhoto from '../../assets/images/user.png'
import preloader from '../../assets/images/preloader..gif'
import classes from './Users.module.css'

const Users = (props) => {

  let totalPage = Math.ceil(props.countPage / 1000)

  let pageArr = []

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i)
  }

  return <div>
    <Preloader isFetching={props.isFetching} />
    { props.isFetching ? <img src={preloader} alt="" /> : null }
  
    <div>
      {pageArr.map(page => {
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
