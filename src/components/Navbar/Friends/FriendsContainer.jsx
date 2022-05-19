import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    state: state.navbar.friendsData
  }
}

const FriendsContainer = connect(mapStateToProps) (Friends)

export default FriendsContainer