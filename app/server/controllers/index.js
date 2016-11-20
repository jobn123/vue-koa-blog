/**
 * Created by Gotcha on 16/11/20
 */
const article = require('./article.js')

module.exports.init = function* (router){
  // yield token.init(router);
  // tag.init(router);
  console.log("=======controllers=========");
  yield article.init(router);
  // draft.init(router);
  // publication.init(router);
  // yield me.init(router)
}
