import mongolass from '../config/config'

const Article = mongolass.model('Article', {
  title: { type: String },
  tag: { type: Array },
  content: {type: String },
  postDate: {type: Date }
});
module.exports = Article;
