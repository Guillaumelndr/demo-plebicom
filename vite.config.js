import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      views: resolve(__dirname, './src/views'),
      utils: resolve(__dirname, './src/utils'),
      components: resolve(__dirname, './src/components')
    }
  },
  plugins: [reactRefresh()]
})