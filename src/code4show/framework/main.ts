/**
 * 以 Vue3 + ts 为例，创建一个基础的 Vue 应用。
 * 在这里引入各式各样的全局组件、或者应用级的插件等
 * 当然，根据不同的框架需要在vite.config.ts中进行配置对应l “ loader插件 ”
 */

import { createApp } from 'vue';
import App from './App.vue'
import { router } from './router'
import './assets/scss/global.scss'

createApp(App).use(router).mount('#app')
