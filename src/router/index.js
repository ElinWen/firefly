import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Programmed from '../views/programmed/programmed'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/programmed',
    component: Programmed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
