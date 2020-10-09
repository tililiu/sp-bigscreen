import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import CommandLeft from '../views/CommandLeft.vue'
import CommandLeftCopy from '../views/CommandLeftCopy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CommandLeft
  },
  {
    path: '/copy',
    component: CommandLeftCopy
  }
]

const router = new VueRouter({
  routes
})

export default router
