import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Barang from '../views/Barang.vue'
import DetailBarang from '../views/DetailBarang'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/barang',
    name: 'Barang',
    component: Barang
  },
  {
    path: '/barang/:id',
    name: 'DetailBarang',
    component: DetailBarang
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
