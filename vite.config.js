import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_APP_ID':JSON.stringify(process.env.VITE_APP_ID),
    'process.env.VITE_APP_KEY':JSON.stringify(process.env.VITE_APP_KEY),
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
