import axios from 'axios'

const baseURL = 'http://localhost:3000'

const service = axios.create({ baseURL, withCredentials: true })

const AUTH_SERVICE = {
  SIGNUP: async (data) => {
    return await service.post('/auth/signup', data)
  },

  LOGIN: async (data) => {
    return await service.post('/auth/login', data)
  },

  LOGOUT: async () => {
    return await service.get('/auth/logout')
  },

  CURRENTUSER: async () => {
    return await service.get('/auth/currentuser')
  }
}

export default AUTH_SERVICE