import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/Login.vue';

const routes = [
  { path: '/', component: LoginView },
  {
    path: '/workbench', component: () => import('../views/workbench/Workbench.vue'),
    children: [
      { path: '/workbench/overview', component: () => import('../views/overview/Overview.vue') },
      { path: '/workbench/about', component: () => import('../views/about/About.vue') },
      {
        path: '/workbench/crud', component: () => import('../views/crud/Crud.vue'),
        children: [
          { path: '/workbench/crud/table', name: 'crudTable', component: () => import('../views/crud/CrudTable.vue') },
          { path: '/workbench/crud/form', name: 'crudForm', component: () => import('../views/crud/CrudForm.vue') }
        ],
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})