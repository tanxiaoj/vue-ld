// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router.js'
import store from './store/store.js'
import 'assets/css/base.less'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'

import loadImg from 'assets/images/loading.gif'

Vue.use(VueRouter)

Vue.use(Mint);

Vue.use(VueLazyload, {
  	preLoad: 1.3,
  	error: 'dist/error.png',
  	loading: loadImg,
  	try: 3 // default 1
})

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