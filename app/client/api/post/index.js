import api from '../index.js'
export default {
  getPost(id){
    return api.get(`articles/${id}`)
  },
  savePost(id){
    return api.get(`articles/${id}`)
  },
  getPostList(params){
    return api.get('articles',params)
  }
}
