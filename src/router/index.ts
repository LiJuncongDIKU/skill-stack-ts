import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/Login.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/workbench', component: () => import('../views/workbench/Workbench.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})