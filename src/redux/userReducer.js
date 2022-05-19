

let initialState = {
  usersData: [
    {id: 0, followed: 'false', name: 'User 1', town: 'Moscow'},
    {id: 1, followed: 'true', name: 'User 2', town: 'Krasnodar'},
    {id: 2, followed: 'false', name: 'User 3', town: 'Omsk'}
  ]
}

const userReducer = (state = initialState, action) => {
  return state
}

let updateButtonFollowActionCreator = () => {
  return {}
}

export default userReducer