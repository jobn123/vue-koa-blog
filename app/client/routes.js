import Home from './components/home/Home'
import Write from './components/acticle/write'
import Tag from './components/tag/Tag'
import Me from './components/me/Me.vue'

const routes = [
  {path: '/', component: Home },
  {path: '/write', component: Write },
  {path: '/me', component: Me },
  {path: '/tag', component: Tag },
]

export default routes
