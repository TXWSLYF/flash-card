import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Index.vue')
  },
  {
    path: '/card-set/:id',
    name: 'CardSet',
    component: () => import('@/views/card-set/Index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router