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

import { Toast } from 'mint-ui'
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


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!sessionStorage.getItem('loginMes')) {
      Toast({
        message: '您暂未登陆账号',
        position: 'bottom',
        duration: 2000
      });
      setTimeout( () => {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }, 2000)
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})


new Vue({
  el:'#app',
  router,
  store,
  render:xx=>xx(App)
}).$mount('#app')