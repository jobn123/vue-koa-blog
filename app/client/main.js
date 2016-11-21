import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes';

(function (doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  docEl.style.fontSize = 16 * (clientWidth / (320)) + 'px';
};
if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
// });
// Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
