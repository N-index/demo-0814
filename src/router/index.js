import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/DemoItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name:'list',
    component: () => import(/* webpackChunkName: "demo-list" */ '../views/DemoList.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "demo-item" */ '../views/DemoItem.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
