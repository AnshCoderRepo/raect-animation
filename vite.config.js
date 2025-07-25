import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/raect-animation/',
  plugins: [react()],
  server: {
    host: true,
  },
  hmr: {
    clientPort: 5173,
  },
})
