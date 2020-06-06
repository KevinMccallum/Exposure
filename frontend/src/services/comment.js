import axios from 'axios'

const baseURL = 'https://evening-meadow-75354.herokuapp.com'

const service = axios.create({
  baseURL,
  withCredentials: true
})

const COMMENT_SERVICE = {
  CREATE_COMMENT: async (data) => {
    return await service.post('/', data)
  },

  GET_COMMENT: async (postId) => {
    return await service.get(`/${postId}`)
  },

  DELETE_COMMENT: async (id) => {
    return await service.delete(`/${id}`)
  }
}


export default COMMENT_SERVICE