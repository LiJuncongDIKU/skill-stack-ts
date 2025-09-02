import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/Login.vue';

const routes = [
  { path: '/', component: LoginView },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})