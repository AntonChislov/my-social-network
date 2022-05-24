import * as axios from "axios";
import React from "react";
import userPhoto from '../../assets/images/user.png'
import classes from './Users.module.css'

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  } 

  render() {
    return <div>
    {
      this.props.usersData.map(user => <div key={user.id}>
        <div><span>
          <img className={classes.img} src={userPhoto} alt="" />
        </span>
        <span>
          {user.followed
            ? <button onClick={() => {
              this.props.unfollow(user.id)
            }}>Unfollow</button>
            : <button onClick={() => {
              this.props.follow(user.id)
            }}>Follow</button>}
        </span></div>
        <span>{user.name} </span>
        <span>{'user.location.city'} </span>
        <span>{'user.location.country'}</span>
      </div>
      )
    }
  </div>
  }
}

export default Users

