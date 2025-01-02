import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_APP_ID:process.env.VITE_APP_ID,
    VITE_APP_KEY:process.env.VITE_APP_KEY
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
