import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/kind',
    component: () => import('../views/Kind.vue')
  },
  {
    path: '/find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/my',
    component: () => import('../views/My.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const originalReplace = VueRouter.prototype.replace //解决重复导航引起错误的问题
VueRouter.prototype.replace = function (location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
