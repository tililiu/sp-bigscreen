import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import CommandLeft from '../views/CommandLeft.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CommandLeft
  }
]

const router = new VueRouter({
  routes
})

export default router
