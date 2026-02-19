import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path' //mportación correcta

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  envDir: "./env", // <-- aquí le dices a Vite que lea Frontend/env/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    allowedHosts: ["elevare.development"],

    proxy: {
      "/api": {
        target: "http://localhost:3000", //donde corre tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
