import * as axios from "axios"
import { follow } from "../redux/userReducer"

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

export default usersAPI