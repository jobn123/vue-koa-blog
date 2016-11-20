// var koa = require('koa')
const koa = require('koa'),
      app = koa(),
      bodyParser = require('koa-bodyparser'),
      controllers = require('./controllers/index.js'),
      router = require('koa-router')(),
      co = require('co');
// app.use(function *(){
//   this.body = 'hello world'
// })

co(function* (){
  app.use(bodyParser())
  yield controllers.init(router)
  console.log('hihihihihi3');

  app.use(router.routes())

  app.listen(4000, ()=>{
    console.log('port start at 4000');
  })
})
