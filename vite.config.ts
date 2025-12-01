import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/e735245e-3032-425e-b438-71cf55ac5fe8/preview',
  plugins: [react()],
  server: {
    port: 5189,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5189,
    },
  },
})
