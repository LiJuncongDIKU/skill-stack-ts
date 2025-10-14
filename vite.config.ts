import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockServer from 'vite-plugin-mock-server'
import bodyParser from 'body-parser'
import copy from 'rollup-plugin-copy';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/skill-stack-ts/',
  resolve: {
    alias: {
      '@': '/src',
      'cesiumSource': path.resolve(__dirname, 'node_modules/cesium/Source')
    },
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium') // 静态资源基础路径
  },
  assetsInclude:['node_modules/cesium/Source/Assets/**/*'],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/en_[name].[hash].js',
        chunkFileNames: 'assets/ck_[name].[hash].js',
      },
      plugins: [
        // 复制 Cesium 静态资源到输出目录的 /cesium 文件夹
        copy({
          targets: [
            {
              src: 'node_modules/cesium/Source/Assets/**/*',
              dest: 'dist/cesium/Assets'
            },
            {
              src: 'node_modules/cesium/Source/Workers/**/*',
              dest: 'dist/cesium/Workers'
            },
            {
              src: 'node_modules/cesium/Source/Widgets/**/*',
              dest: 'dist/cesium/Widgets'
            },
            {
              src: 'node_modules/cesium/Source/ThirdParty/**/*',
              dest: 'dist/cesium/ThirdParty'
            }
          ],
          hook: 'buildStart' // 构建开始时复制
        })
      ]
    },
  },
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info',
      middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded(),
        bodyParser.text(),
        bodyParser.raw()
      ]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
