import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Default: '/', but override via env var for GitHub Pages builds
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
