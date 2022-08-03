import * as axios from "axios"

const instans = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "2cac03ab-6831-474b-ba3f-c5700832e553"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instans.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(userId) {
    return instans.post(`follow/${userId}`).then(response => response.data)
  },
  unfollow(userId) {
    return instans.delete(`follow/${userId}`).then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`).then(response => response.data)
  }
}

export const authAPI = {
  isAuth() {
    return instans.get(`auth/me`).then(response => response.data)
  }
}