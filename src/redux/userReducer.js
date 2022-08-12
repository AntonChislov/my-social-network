import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const COUNT_PAGE = 'COUNT-PAGE'
const ADD_FRIEND = 'ADD_FRIEND'
const DEL_FRIEND = 'DEL_FRIEND'
const IS_FETCHING = 'IS-FETCHING'
const BUTTON_DISABLED = 'BUTTON_DISABLED'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

let initialState = {
  usersData: [],
  friends: [],
  countPage: 2,
  currentPage: 1,
  pageSize: 5,
  isFetching: true,
  buttonDisabled: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS:

      return {
        ...state,
        usersData: action.users
      }

    case COUNT_PAGE: {
      return { ...state, countPage: action.count }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page }
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.vallue }
    }
    case BUTTON_DISABLED: {
      return {
        ...state,
        buttonDisabled: action.vallue
          ? [...state.buttonDisabled, action.userId]
          : state.buttonDisabled.filter(id => id != action.userId)
      }
    }
    case ADD_FRIEND: {
      return {
        ...state,
        friends: [...state.friends, action.user].map(user => ({...user, followed: true}))
      }
    }
    case DEL_FRIEND: {
      return {
        ...state,
        friends: state.friends.filter(user => user.id !== action.user.id)
      }
    }
    default:
      return state
  }
}

export const addFriend = (user) => ({ type: ADD_FRIEND, user })
export const delFriend = (user) => ({ type: DEL_FRIEND, user })
export const follow = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const countTotalPage = (count) => ({ type: COUNT_PAGE, count: count })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page })
export const showIsFetching = (vallue) => ({ type: IS_FETCHING, vallue: vallue })
export const currentButtonDisabled = (vallue, userId) => ({ type: BUTTON_DISABLED, vallue, userId })

export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
  dispatch(showIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(showIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(countTotalPage(data.totalCount))
  })
}

export const unfollowThunk = (user) => (dispatch) => {
  dispatch(currentButtonDisabled(true, user.id))
  usersAPI.unfollow(user.id).then(data => {
    if (data.resultCode === 0) {
      dispatch(delFriend(user))
      dispatch(unfollow(user.id))
    }
    dispatch(currentButtonDisabled(false, user.id))
  })
}
export const followThunk = (user) => (dispatch) => {
  dispatch(currentButtonDisabled(true, user.id))
  usersAPI.follow(user.id).then(data => {
    if (data.resultCode === 0) {
      dispatch(addFriend(user))
      dispatch(follow(user.id))
    }
    dispatch(currentButtonDisabled(false, user.id))
  })
}

export default userReducer