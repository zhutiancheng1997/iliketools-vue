import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build:{
    rollupOptions:{
      input:{
        index:'./index.html',
        tech:'./tech.html',
        contact:'./contact.html',
        bawangcan:'./bawangcan.html',
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: "127.0.0.1",
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3888',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/proxy':{
        target: 'http://localhost:5010',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '',
        },
      }
    },
  },
})