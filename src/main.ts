import { createApp } from 'vue';
import App from './App.vue'
import { router } from './router'
import './assets/scss/global.scss'

import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'

createApp(App).use(router).mount('#app')
