import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Schedule from '../views/Schedule'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedule
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
