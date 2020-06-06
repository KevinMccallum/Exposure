import axios from 'axios'

const baseURL = 'https://evening-meadow-75354.herokuapp.com'

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