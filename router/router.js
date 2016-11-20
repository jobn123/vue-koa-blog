import router from 'koa-router'

router
  .get('/', function *(next) {
    this.body = 'Hello World!';
  })
  .post('/users', function *(next) {
    // ...
    this.body = 'Hello World!!';
  })
  .put('/users/:id', function *(next) {
    // ...
    this.body = 'Hello World!!!';
  })
  .del('/users/:id', function *(next) {
    // ...
    this.body = 'Hello World!!!!';
  });
