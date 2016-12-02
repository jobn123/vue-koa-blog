// var koa = require('koa')
const koa = require('koa'),
      app = koa(),
      bodyParser = require('koa-bodyparser'),
      router = require('koa-router')(),
      co = require('co'),
      cors = require('koa-cors'),
      controllers = require('./controllers/index.js'),
      Mongolass = require('Mongolass'),
      mongolass = new Mongolass('mongodb://localhost:27017/blog'),
      User = mongolass.model('User', {
                name: { type: 'string' },
                age: { type: 'number' }
              });
// app.use(function *(){
//   this.body = 'hello world'
// })
// router.get('/', function* (next){
//   console.log('========');
//   yield User
//   .insertOne({ name: 'joker', age: 20 })
//   .exec()
//   .then(console.log('insert done'))
//   .catch(function (e) {
//     console.error(e);
//     console.error(e.stack);
//   })
// })
co(function* (){
  app.use(cors({
    maxAge: 7 * 24 * 60 * 60,
    // 7 days 预请求头有效期
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
    headers: 'Content-Type, Accept, Authorization'
  }))
  app.use(bodyParser())
  yield controllers.init(router)
  console.log('hihihihihi3');

  app.use(router.routes())

  app.listen(5000, ()=>{
    console.log('port start at 4000');
  })
})
