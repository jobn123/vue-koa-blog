import api from '../index'
export default = {
  getAllTags() {
    return api.get('tags')
  },
  getArticlesByTag(tagId) {
    return api.get('articles', {tag: tagId})
  }
}
