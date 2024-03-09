import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':"https://contact-app-server-a4im.onrender.com",
    },
  },
  plugins: [react()],
})
