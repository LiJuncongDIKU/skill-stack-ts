import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockServer from 'vite-plugin-mock-server'
import bodyParser from 'body-parser'
import cp from 'vite-plugin-cp';
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
  },
  assetsInclude: ['node_modules/cesium/Source/Assets/**/*'],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/en_[name].[hash].js',
        chunkFileNames: 'assets/ck_[name].[hash].js',
      },
      plugins: [
        // 复制 Cesium 静态资源到输出目录的 /cesium 文件夹
        cp({
          targets: [
            {
              src: 'node_modules/cesium/Build/Cesium/Assets/',
              dest: 'dist/cesium/Assets',
            },
            {
              src: 'node_modules/cesium/Build/Cesium/Workers/',
              dest: 'dist/cesium/Workers'
            },
            {
              src: 'node_modules/cesium/Build/Cesium/Widgets/',
              dest: 'dist/cesium/Widgets'
            },
            {
              src: 'node_modules/cesium/Build/Cesium/ThirdParty/',
              dest: 'dist/cesium/ThirdParty'
            }
          ],
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
