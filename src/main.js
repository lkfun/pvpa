// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'babel-polyfill'
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
