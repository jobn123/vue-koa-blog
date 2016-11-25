// var koa = require('koa')
const koa = require('koa'),
      app = koa(),
      bodyParser = require('koa-bodyparser'),
      router = require('koa-router')(),
      co = require('co'),
      controllers = require('./controllers/index.js'),
      mongoose = require('mongoose');
      // User = mongoose.model("User");
// app.use(function *(){
//   this.body = 'hello world'
// })
// router.get('/', function* (next){
//   var User = new User({
//     uid
//   })
//   this.body = yield User.find({});
// })
co(function* (){
  app.use(bodyParser())
  yield controllers.init(router)
  console.log('hihihihihi3');

  app.use(router.routes())

  app.listen(5000, ()=>{
    console.log('port start at 4000');
  })
})
