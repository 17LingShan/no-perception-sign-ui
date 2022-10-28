import { defineConfig } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': join(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import './src/styles/global.scss';`
      }
    }
  },
  // server: {
  //   port: '6512',
  //   proxy: {
  //     '/api': {
  //       target: 'http://47.113.203.151:5000',
  //       ws: false,
  //       changeOrigin: true,
  //       rewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
})
