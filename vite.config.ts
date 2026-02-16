import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@assets': '/src/_assets',
      '@components': '/src/_components',
      '@consts': '/src/_consts',
      '@t': '/src/_types',
      '@ui': '/src/_ui',
      '@utils': '/src/_utils',
      '@pages': '/src/pages',
      '@fb': '/src/firebase',
      '@store': '/src/store',

      '@inside': '/src/pages/inside',
      '@outside': '/src/pages/outside',
    },
  }
})
