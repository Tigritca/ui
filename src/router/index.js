import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Schedules from '../views/Schedules.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
