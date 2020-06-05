import axios from 'axios'

const baseURL = 'https://intense-everglades-05444.herokuapp.com'

const service = axios.create({ baseURL, withCredentials: true })

const POST_SERVICE = {
  ADD_POST: async (post) => {
    return await service.post('/add', post)
  },

  VIEW_POSTS: async () => {
    return await service.get('/view')
  },

  VIEW_POST: async (id) => {
    return await service.get(`/${id}`)
  },

  EDIT_POST: async (post, id) => {
    return await service.patch(`/edit/${id}`, post)
  },

  DELETE_POST: async (id) => {
    return await service.delete(`/${id}`)
  }
}

export default POST_SERVICE