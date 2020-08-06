import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Github from '@/components/Github'
import Imprint from '@/components/Imprint'
//import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/github',
      name: 'Github',
      component: Github,
    },
    {
      path: '/imprint',
      name: 'Imprint',
      component: Imprint,
    }
  ],
  mode: 'history'
})
