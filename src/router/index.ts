import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/Login.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/workbench', component: () => import('../views/workbench/Workbench.vue'),
    children: [
      { path: '/workbench/overview', component: () => import('../views/overview/Overview.vue')},
      { path: '/workbench/about', component: () => import('../views/about/About.vue')}
    ]
   }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})