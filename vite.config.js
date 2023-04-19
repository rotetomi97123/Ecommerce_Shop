import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  exclude: ['**/node_modules/**'] // exclude the node_modules directory from being watched by Vite
})