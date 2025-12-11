import { createWebHashHistory, createRouter } from 'vue-router'

import LoginView from '../views/login/Home.vue';

const routes = [
  { path: '/', component: LoginView },
  {
    path: '/workbench', component: () => import('../views/workbench/Workbench.vue'),
    children: [
      { path: '/workbench/overview', component: () => import('../views/overview/Overview.vue') },
      { path: '/workbench/about', component: () => import('../views/about/About.vue') },
      {
        path: '/workbench/crud', component: () => import('../views/crud/CrudHome.vue'),
        children: [
          { path: '/workbench/crud/table', name: 'crudTable', component: () => import('../views/crud/CrudTable.vue') },
          { path: '/workbench/crud/form', name: 'crudForm', component: () => import('../views/crud/CrudForm.vue') }
        ],
      },
      {
        path: '/workbench/scroll', component: () => import('../views/scroll/Scroll.vue')
      },
      {
        path: '/workbench/firstScreen', component: () => import('../views/firstScreen/FirstScreen.vue')
      },
      {
        path: '/workbench/CesiumJS', component: () => import('../views/cesium/CesiumHome.vue')
      },
      {
        path: '/workbench/gisBase', component: () => import('../views/gisBase/GisBase.vue')
      }
      ,{
        path: '/workbench/our-world', component: () => import('../views/ourWorld/OurWorld.vue'),
        children: [
          { path: 'life-origin', name: 'lifeOrigin', component: () => import('../views/ourWorld/lifeOrigin.vue') },
          { path: 'precambrian', name: 'precambrian', component: () => import('../views/ourWorld/precambrian.vue') },
          { path: 'paleozoic-cambrian', name: 'paleozoicCambrian', component: () => import('../views/ourWorld/paleozoicCambrian.vue') },
          { path: 'paleozoic-ordovician', name: 'paleozoicOrdovician', component: () => import('../views/ourWorld/paleozoicOrdovician.vue') },
          { path: 'paleozoic-silurian', name: 'paleozoicSilurian', component: () => import('../views/ourWorld/paleozoicSilurian.vue') },
          { path: 'paleozoic-devonian', name: 'paleozoicDevonian', component: () => import('../views/ourWorld/paleozoicDevonian.vue') },
          { path: 'paleozoic-carboniferous', name: 'paleozoicCarboniferous', component: () => import('../views/ourWorld/paleozoicCarboniferous.vue') },
          { path: 'paleozoic-permian', name: 'paleozoicPermian', component: () => import('../views/ourWorld/paleozoicPermian.vue') },
          { path: 'mesozoic-triassic', name: 'mesozoicTriassic', component: () => import('../views/ourWorld/mesozoicTriassic.vue') },
          { path: 'mesozoic-jurassic', name: 'mesozoicJurassic', component: () => import('../views/ourWorld/mesozoicJurassic.vue') },
          { path: 'mesozoic-cretaceous', name: 'mesozoicCretaceous', component: () => import('../views/ourWorld/mesozoicCretaceous.vue') },
          { path: 'cenozoic-paleogene', name: 'cenozoicPaleogene', component: () => import('../views/ourWorld/cenozoicPaleogene.vue') },
          { path: 'cenozoic-neogene', name: 'cenozoicNeogene', component: () => import('../views/ourWorld/cenozoicNeogene.vue') },
          { path: 'cenozoic-quaternary', name: 'cenozoicQuaternary', component: () => import('../views/ourWorld/cenozoicQuaternary.vue') }
        ]
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})