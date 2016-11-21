import Home from './components/home/Home'
import Write from './components/acticle/write'
import Tag from './components/tag/Tag'
import Me from './components/me/Me.vue'
// export default (router)=> {
//   router.map({
//     '*': {
//       component: Home
//     },
//     '/write':{
//       component: Write
//     },
//     '/tags':{
//       component: function (resolve) {
//         require(['./components/tag/Tag.vue'], resolve)
//       },
//     },
//     '/me':{
//       component: function (resolve) {
//         require(['./components/me/Me.vue'], resolve)
//       },
//     },
//   })
// }
const routes = [
  {path: '/', component: Home },
  {path: '/write', component: Write },
  {path: '/me', component: Me },
  {path: '/tag', component: Tag },
]

export default routes
