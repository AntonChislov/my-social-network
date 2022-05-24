const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
  usersData: [
  // ***************баг связаный с добавлением условия в SET_USERS***************
    /* {
      id: 1, 
      name: 'text',
      followed: true
    } */
  ]
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
      if (state.usersData.length > 0) {
      return state
    } else {
      return {
        ...state,
        usersData: [...state.usersData, ...action.users]
      }
    }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })

export default userReducer
