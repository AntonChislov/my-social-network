import { createSelector } from "reselect"

/* export const getUsersSuper = createSelector(() => {
  return state.usersPage.users
})
 */
export const getUsersData = (state) => {
  return state.usersPage.usersData
}

export const getCountPage = (state) => {
  return state.usersPage.countPage
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getButtonDisabled = (state) => {
  return state.usersPage.buttonDisabled
}