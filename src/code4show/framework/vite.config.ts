/**
 * 这里以 vue3 + ElementPlus 作为例子，在 plugins 中配置解析vue3单文件组件的插件和elementPlus的自动按需引入插件。
 * 轮子的使用的感受确实非常清晰和方便
 * 完成这几步，项目已经可以算是真正从零开始搭建了
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
})
