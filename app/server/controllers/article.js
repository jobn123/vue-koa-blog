/**
 * Created by Gotcha on 16/11/20
 */
"use strict"
import Article from '../models/article'

module.exports.init = function* (router) {
  console.log('======articles========');
  // yield seed;
  console.log('hihihihihihi2');
  router.post('/articles', articleList);
  router.get('/articles/:id', articleDetail);
  router.post('/articles/:id', articleDetail);
  router.post('/getArticleLists', getArticleLists);
  // router.patch('/articles/:id', mw.verify_token, modify);
  // router.get('/hidden-articles', mw.verify_token, hiddenArticleList);
  // router.get('/hidden-articles/:id', mw.verify_token, hiddenArticleDetail);
}
function* seed() {
  console.log('========hahahaha=========');
}
function* articleList(){
  // console.log(this.request.body);
  let obj = this.request.body
  yield Article
        .insertOne({
          title: '你好，test',
          tag: ['js', 'html'],
          content: 'hahahhahahahahahahahah',
          postDate: new Date
        })
        .exec()
        .then(function(){
          console.log('insert done');
        })
        .catch(function(err){
          console.log(err);
          this.throw(500,'内部错误')
        })
  this.status = 200;
  this.body = {
    success: true
  }
  console.log('=========articleList=========')
}
function* getArticleLists() {
  let articleList = yield Article
        .find()
        .exec()
        .then((data)=>{
          console.log(data+'========');
          this.status = 200;
          this.body = {
            success: true,
            data: data
          }
        })
        .catch(function(){
          console.log('select article error');
        })

}
function* articleDetail(){
  console.log('==========articleDetail============');
}
