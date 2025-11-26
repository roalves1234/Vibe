import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative paths so the app works when served from any subpath in production
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
