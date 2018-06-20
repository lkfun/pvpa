import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Footer from '@/components/footer'
import Header from '@/components/header'
import About from '@/components/about'
import download from '@/components/download'
import motto from '@/components/motto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: main,
        Footer,
        Header
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/motto',
      name: 'motto',
      component: motto
    }
  ]
})
