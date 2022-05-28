const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const COUNT_PAGE = 'COUNT-PAGE'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const IS_FETCHING = 'IS-FETCHING'

let initialState = {
  usersData: [
    // ***************баг связаный с добавлением условия в SET_USERS***************
    /* {
      id: 1, 
      name: 'text',
      followed: true
    } */
  ],
  countPage: 2,
  currentPage: 1,
  pageSize: 5,
  isFetching: true
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
      return { ...state, currentPage: action.page}
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.vallue}
    }
    default:
      return state
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const countTotalPage = (count) => ({ type: COUNT_PAGE, count: count })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page })
export const showIsFetching = (vallue) => ({ type: IS_FETCHING, vallue: vallue })

export default userReducer
