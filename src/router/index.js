import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/index.vue'
import Playing from '@/pages/playing/index.vue'
import Ranking from '@/pages/ranking/index.vue'
import Hot from '@/pages/hot/index.vue'
import New from '@/pages/new/index.vue'
import Online from '@/pages/online/index.vue'
import Popular from '@/pages/popular/index.vue'
import Euramerican from '@/pages/euramerican/index.vue'
import Collected from '@/pages/collected/index.vue'
import AllList from '@/pages/allList/index.vue'
import Login from '@/pages/login/index.vue'
import Register from '@/pages/register/index.vue'
import My from '@/pages/my/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Playing',
      name: 'Playing',
      component: Playing
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/Hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/New',
      name: 'New',
      component: New
    },
    {
      path: '/Online',
      name: 'Online',
      component: Online
    },
    {
      path: '/Popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/Euramerican',
      name: 'Euramerican',
      component: Euramerican
    },
    {
      path: '/Collected',
      name: 'Collected',
      component: Collected
    },
    {
      path: '/AllList',
      name: 'AllList',
      component: AllList
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
