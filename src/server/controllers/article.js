/**
 * Created by Gotcha on 16/11/20
 */
"use strict"
module.exports.init = function* (router) {
  console.log('======articles========');
  // yield seed;
  console.log('hihihihihihi2');
  router.get('/articles', articleList);
  router.get('/articles/:id', articleDetail);
  // router.patch('/articles/:id', mw.verify_token, modify);
  // router.get('/hidden-articles', mw.verify_token, hiddenArticleList);
  // router.get('/hidden-articles/:id', mw.verify_token, hiddenArticleDetail);
}
function* seed() {
  console.log('========hahahaha=========');
}
function* articleList(){
  console.log('=========articleList=========')
}
function* articleDetail(){
  console.log('==========articleDetail============');
}
