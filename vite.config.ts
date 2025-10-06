import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockServer from 'vite-plugin-mock-server'
import bodyParser from 'body-parser'

// https://vite.dev/config/
export default defineConfig({
  base: '/skill-stack-ts/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output:{
        entryFileNames: 'assets/en_[name].[hash].js',
        chunkFileNames: 'assets/ck_[name].[hash].js',
      },
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
