import Vue from 'vue'
import VueRouter from 'vue-router'
import search from '../views/search.vue'
import ChannelDetails from '../views/ChannelDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search

  },
  {
    path: '/channel/:id',
    name: 'channelDetails',
    component: ChannelDetails

  }
]

const router = new VueRouter({
  routes
})


export default router
