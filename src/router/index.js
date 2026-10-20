
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Explore from '../views/explore.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
