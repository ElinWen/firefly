import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Programmed from '../views/programmed/programmed'
import Pcb from  '../views/pcb/pcb'
import Technology from  '../views/technology/technology'
import Lease from '../views/lease/lease'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/programmed',
    component: Programmed
  },
  {
    path: '/pcb',
    component: Pcb
  },
  {
    path: '/technology',
    component: Technology
  },
  {
    path: '/lease',
    component: Lease
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
