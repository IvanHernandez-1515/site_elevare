import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path' //mportación correcta

export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    tailwindcss()
  ],
  envDir: './env',
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  server: mode === 'development'
    ? {
        proxy: {
          '/api': {
            target: process.env.VITE_PROXY_TARGET || 'http://backend:3000',
            changeOrigin: true,
            secure: false,
          },
        },
      }
    : undefined,
}))
