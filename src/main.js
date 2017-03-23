// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router.js'
import store from './store/store.js'
import Mint from 'mint-ui';
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint);



/* eslint-disable no-new */
const router = new VueRouter({
  mode :'history',
  base :__dirname,
  linkActiveClass: 'active',
  routes : routerConfig
})

new Vue({
  el:'#app',
  router,
  store,
  render:xx=>xx(App)
}).$mount('#app')