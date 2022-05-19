import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
}


const UsersContainer = connect(mapStateToProps) (Users)



export default UsersContainer