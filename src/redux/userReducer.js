const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  usersData: [
    { id: 1, 
      followed: false, 
      name: 'User 1', 
      location: {city: 'Moscow', country: 'Russia'}
    },
    { id: 2, 
      followed: true, 
      name: 'User 2', 
      location: {city: 'Krasnodar', country: 'Russia'}
    },
    { id: 3, 
      followed: false, 
      name: 'User 3', 
      location: {city: 'Minsk', country: 'Belarus'}
}
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
      default:
        return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })

export default userReducer
