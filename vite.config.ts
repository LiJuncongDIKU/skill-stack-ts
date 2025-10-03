import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockServer from 'vite-plugin-mock-server'

// https://vite.dev/config/
export default defineConfig({
  base: '/skill-stack-ts/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
