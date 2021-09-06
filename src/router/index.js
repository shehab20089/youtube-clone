import Vue from 'vue'
import VueRouter from 'vue-router'
import search from '../views/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search

  }
]

const router = new VueRouter({
  routes
})


export default router
