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
  },
  getStatus(userId) {
    return instans.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateStatus(status) {
    return instans.put(`profile/status`, { status }).then(response => response.data)
  },
  saveProfile(profile) {
    return instans.put(`profile`, profile).then(response => response.data)
  },
  savePhoto(file) {
    let formData = new FormData()
    formData.append('image', file)
    return instans.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  }
}

export const authAPI = {
  isAuth() {
    return instans.get(`auth/me`).then(response => response.data)
  },
  logIn(email, password, rememberMe = false, captcha = null) {
    return instans.post(`auth/login`, { email, password, rememberMe, captcha}).then(response => response.data)
  },
  logOut() {
    return instans.delete(`auth/login`).then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
      return instans.get(`security/get-captcha-url`);
  }
}